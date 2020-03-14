const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const utils = require('./helper/utils');
const pbApp = require('./helper/pbAppFactory');
const DIDRegistryLibrary = artifacts.require('DIDRegistryLibrary');
const DIDRegistry = artifacts.require('DIDRegistry');
const AccessSecretRegistry = artifacts.require('AccessSecretRegistry');
const constants = require('./helper/constants');
const fs = require('fs');
const GAS_USED_LOG = 'gas/SimpleSingleSessionApp.txt';

contract('AccessSecretRegistry', async accounts => {
    let owner = accounts[0];
    let peers = [owner, accounts[1]];
    const providers = [accounts[8], accounts[9]];
    const nonce = 0;
    const timeout = 2;
    
    const _did1 = constants.did[0];
    const checksum1 = constants.checksum[0];
    const value1 = 'https://exmaple.com/did/ocean/test-attr-example1.txt';
   
    const _did2 = constants.did[1];
    const checksum2 = constants.checksum[1];
    const value2 = 'https://exmaple.com/did/ocean/test-attr-example2.txt'

    before(async () => {
        const didRegistryLibrary1 = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary1.address);
        const didRegistry1 = await DIDRegistry.new();
        await didRegistry1.initialize(peers[0]);
        await didRegistry1.registerAttribute(
            _did1,
            checksum1,
            providers,
            value1
        );
        instance = await AccessSecretRegistry.new(peers, nonce, timeout, _did1, didRegistry1.address);
        await didRegistry1.setAccessSecretRegistry(_did1, instance.address, peers[1]);
    });

    it('intend first settle (state is 0) should success and outcome shoule true', async () => {
        res = await instance.getDID(0);
        assert.equal(res, _did1);
        
        seq = 1;
        state = [0];
        stateProof = await pbApp.encodeStateProof(
            nonce, 
            seq,
            state,
            timeout,
            peers
        );
        res = await instance.intendSettle(stateProof);
        fs.appendFileSync(GAS_USED_LOG, 'first intendSettle: ' + utils.getCallGasUsed(res) + '\n');
        const { event, args } = res.logs[0];
        assert.equal(event, 'IntendSettle');
        assert.equal(args.seq.toString(10), seq);
        res = await instance.getOutcome([0]);
        assert.equal(res, true);
        res = await instance.isFinalized([]);
        assert.equal(res, true);
        res = await instance.checkPermissions(peers[1], _did1);
        assert.equal(res, true);
    });

    it('msg.sender who is not state channel peer setDID should fail', async () => {
        const didRegistryLibrary2 = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary2.address);
        const didRegistry2 = await DIDRegistry.new();
        await didRegistry2.initialize(peers[0]);
        await didRegistry2.registerAttribute(
            _did2,
            checksum2,
            providers,
            value2
        );

        try {
            res = await instance.setDID(_did2, didRegistry2.address, {from: accounts[3]});
        } catch (e) {
            assert.isAbove(
                e.message.search('VM Exception while processing transaction'),
                 -1
            );
            return;
        }
        assert.fail('msg.sender is not channel peer');
    });

    it('invlaid did owner set new did should fail', async () => {
        const didRegistryLibrary2 = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary2.address);
        const didRegistry2 = await DIDRegistry.new();
        await didRegistry2.initialize(peers[0]);
        await didRegistry2.registerAttribute(
            _did2,
            checksum2,
            providers,
            value2
        );

        try {
            res = await instance.setDID(_did2, didRegistry2.address, {from: peers[1]});
        } catch (e) {
            assert.isAbove(
                e.message.search('VM Exception while processing transaction'),
                 -1
            );
            return;
        }
        assert.fail('msg.sender is not didOwner');
    });

    it('did owner set new did should success', async () => {
        const didRegistryLibrary2 = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary2.address);
        const didRegistry2 = await DIDRegistry.new();
        await didRegistry2.initialize(peers[0]);
        await didRegistry2.registerAttribute(
            _did2,
            checksum2,
            providers,
            value2
        );
        
        res = await instance.setDID(_did2, didRegistry2.address, {from: peers[0]});
        const{ event, args } = res.logs[0];
        assert.equal(event, "settedDID");
        assert.equal(args.did, _did2);
        await didRegistry2.setAccessSecretRegistry(_did2, instance.address, peers[1]);
    });

    it('intend settle (state is 1 which key of _did2) should success', async () => {
        res = await instance.getDID(1);
        assert.equal(res, _did2);
        res = await instance.getKeyDID(_did2);
        assert.equal(res, 1);
        seq = 3;
        state = [-2];
        stateProof = await pbApp.encodeStateProof(
            nonce, 
            seq,
            state,
            timeout,
            peers
        );
        res = await instance.intendSettle(stateProof);
        fs.appendFileSync(GAS_USED_LOG, 'intendSettle: ' + utils.getCallGasUsed(res) + '\n');

        seq = 4;
        state = [1];
        stateProof = await pbApp.encodeStateProof(
            nonce, 
            seq,
            state,
            timeout,
            peers
        );
        res = await instance.intendSettle(stateProof);
        fs.appendFileSync(GAS_USED_LOG, 'intendSettle: ' + utils.getCallGasUsed(res) + '\n');
        const { event, args } = res.logs[0];
        assert.equal(event, 'IntendSettle');
        assert.equal(args.seq.toString(10), seq);
        res = await instance.getOutcome([1]);
        assert.equal(res, true);
        res = await instance.isFinalized([]);
        assert.equal(res, true);
        res = await instance.checkPermissions(peers[1], _did2);
        assert.equal(res, true);
    });

    it("inted settle with invalid sequence number should fail", async () => {
        seq = 2;
        state = [1];
        stateProof = await pbApp.encodeStateProof(
            nonce, 
            seq,
            state,
            timeout,
            peers
        );
        try {
            res = await instance.intendSettle(stateProof);
        } catch (e) {
            assert.isAbove(
                e.message.search('VM Exception while processing transaction'),
                 -1
            );
            return;
        }
       assert.fail("invalid sequence number");
    });

    it("intend settle (state is -1) should success and swap owner and grantee", async () => {
        seq = 5;
        state = [-1];
        stateProof = await pbApp.encodeStateProof(
            nonce,
            seq,
            state,
            timeout,
            peers
        );
        res = await instance.intendSettle(stateProof);
        fs.appendFileSync(GAS_USED_LOG, 'intendSettle: ' + utils.getCallGasUsed(res) + '\n');
        const { event, args } = res.logs[0];
        assert.equal(event, 'IntendSettle');
        assert.equal(args.seq.toString(10), seq);
        owner = await instance.getOwner();
        grantee = await instance.getGrantee();
        assert.equal(peers[0], grantee);
        assert.equal(peers[1], owner);
    });

    it("evaluate (1) did of data from grantee should success", async () => {
        res = await instance.evaluate(1, _did1, {from: peers[1]});
        fs.appendFileSync(GAS_USED_LOG, 'evaluate: ' + utils.getCallGasUsed(res) + '\n');
        const { event, args} = res.logs[0];
        assert.equal(event, 'evaluated');
        assert.equal(args.evaluation, 1);
    });

    it("evaluate (-1) did of data from grantee should success", async () => {
        res = await instance.evaluate(-1, _did1, {from: peers[1]});
        fs.appendFileSync(GAS_USED_LOG, 'evaluate: ' + utils.getCallGasUsed(res) + '\n');
        const { event, args } = res.logs[0];
        assert.equal(event, 'evaluated');
        assert.equal(args.evaluation, 0);
    })

    it("evaluate (2) did of data from grantee should fail", async () => {
        try {
            res = await instance.evaluate(2, _did1, {from: peers[1]});
        } catch(e) {
            assert.isAbove(
                e.message.search('VM Exception while processing transaction'),
                 -1
            );
            return;
        }
       assert.fail("eval is not 1 or -1");
    });

    it("evaluate did of data from owner should fail", async () => {
        try {
            res = await instance.evaluate(1, _did1, {from: peers[0]});
        } catch(e) {
            assert.isAbove(
                e.message.search('VM Exception while processing transaction'),
                 -1
            );
            return;
        }
        assert.fail("DID owner can not evaluation DID")
    });
});