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
    const owner = accounts[0];
    let peers = [owner, accounts[1]];
    const providers = [accounts[8], accounts[9]];
    let peers2 = [providers[0], accounts[1]];
    const nonce = 0;
    const timeout = 2;
    
    const _did = constants.did[0];
    const checksum = constants.checksum[0];
    const value = 'https://exmaple.com/did/ocean/test-attr-example.txt';
    const did = web3.utils.hexToBytes(_did)

    before(async () => {
        fs.writeFileSync(GAS_USED_LOG, '******* Gas Used in SimpleSingleSessionApp Tests ********\n\n');
    });

    it('intend settle should success and getOutcome should true when state is 1', async () => {
        const didRegistryLibrary = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary.address);
        const didRegistry = await DIDRegistry.new();
        await didRegistry.initialize(peers[0]);
        await didRegistry.registerAttribute(
            _did,
            checksum,
            providers,
            value
        )
        instance = await AccessSecretRegistry.new(peers, nonce, timeout, _did, didRegistry.address);
        gasUsed = await utils.getDeployGasUsed(instance);
        fs.appendFileSync(GAS_USED_LOG, 'contract deploy: '+gasUsed+'\n');
        seq = 1;
        state = [1];
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
        res = await instance.getOutcome([]);
        assert.equal(res, true);
        res = await instance.isFinalized([]);
        assert.equal(res, true);
        res = await instance.checkPermissions(peers[1], _did);
        assert.equal(res, true);
    });

    it('intend settle should success and getOutcome should false when state is 0', async () => {
        const didRegistryLibrary = await DIDRegistryLibrary.new();
        await DIDRegistry.link('DIDRegistryLibrary', didRegistryLibrary.address);
        const didRegistry = await DIDRegistry.new();
        await didRegistry.initialize(peers[0]);
        await didRegistry.registerAttribute(
            _did,
            checksum,
            providers,
            value
        )
        instance = await AccessSecretRegistry.new(peers, nonce, timeout, _did, didRegistry.address);
        gasUsed = await utils.getDeployGasUsed(instance);
        fs.appendFileSync(GAS_USED_LOG, 'contract deploy: '+gasUsed+'\n');
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
        res = await instance.getOutcome([]);
        assert.equal(res, false);
        res = await instance.isFinalized([]);
        assert.equal(res, true);
        res = await instance.checkPermissions(peers[1], _did);
        assert.equal(res, false);
    })
});