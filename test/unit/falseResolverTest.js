const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const sha3 = web3.utils.keccak256;

const fs = require('fs');

const protoChainFactory = require('./falseprotoChainFactory');

const utilities = require('./helper/utilities');
const {
  mineBlockUntil,
  getSortedArray,
  getDeployGasUsed,
  getCallGasUsed,
  calculatePayId
} = utilities;

const PayRegistry = artifacts.require('PayRegistry');
const PayResolver = artifacts.require('PayResolver');
const VirtResolver = artifacts.require('VirtContractResolver');

const GAS_USED_LOG = 'gas_used_logs/PayResolver.txt';

contract('PayResolver', async accounts => {
  const peers = getSortedArray([accounts[0], accounts[1]]);
  const TRUE_PREIMAGE = '0x123456';
  const FALSE_PREIMAGE = '0x654321';
  const RESOLVE_TIMEOUT = 10;
  const RESOLVE_DEADLINE = 9999999;
  let payRegistry;
  let payResolver;
  let protoChainInstance;
  let getConditions;
  let getConditionalPayBytes;
  let getResolvePayByConditionsRequestBytes;
  let getVouchedCondPayResultBytes;

  before(async () => {
    fs.writeFileSync(GAS_USED_LOG, '********** Gas Used in PayRegistry Tests **********\n\n');

    const virtResolver = await VirtResolver.new();
    payRegistry = await PayRegistry.new();
    payResolver = await PayResolver.new(payRegistry.address, virtResolver.address);

    fs.appendFileSync(GAS_USED_LOG, '***** Deploy Gas Used *****\n');
    let gasUsed = await getDeployGasUsed(virtResolver);
    fs.appendFileSync(GAS_USED_LOG, 'VirtContractResolver Deploy Gas: ' + gasUsed + '\n');
    gasUsed = await getDeployGasUsed(payRegistry);
    fs.appendFileSync(GAS_USED_LOG, 'PayRegistry Deploy Gas: ' + gasUsed + '\n');
    gasUsed = await getDeployGasUsed(payResolver);
    fs.appendFileSync(GAS_USED_LOG, 'PayResolver Deploy Gas: ' + gasUsed + '\n\n');
    fs.appendFileSync(GAS_USED_LOG, '***** Function Calls Gas Used *****\n');

    const provider = [accounts[5], accounts[6]];
    protoChainInstance = await protoChainFactory(peers, [accounts[8], accounts[9]], provider);
    getConditions = protoChainInstance.getConditions;
    getConditionalPayBytes = protoChainInstance.getConditionalPayBytes;
    getResolvePayByConditionsRequestBytes = protoChainInstance.getResolvePayByConditionsRequestBytes;
  });

  it('should resolve pay by conditions correctly when the logic is BOOLEAN_AND and some contract conditions are false', async () => {
    const payBytes = getConditionalPayBytes({
      payTimestamp: Date.now(),
      paySrc: accounts[8],
      payDest: accounts[9],
      conditions: getConditions({ type: 1 }),
      logicType: 0, //  BOOLEAN_AND
      maxAmount: 20,
      resolveDeadline: RESOLVE_DEADLINE,
      resolveTimeout: RESOLVE_TIMEOUT,
      payResolver: payResolver.address
    });
    const payHash = sha3(web3.utils.bytesToHex(payBytes));
    const requestBytes = getResolvePayByConditionsRequestBytes({
      condPayBytes: payBytes,
      hashPreimages: [web3.utils.hexToBytes(TRUE_PREIMAGE)]
    });

    const tx = await payResolver.resolvePaymentByConditions(requestBytes);
    const { event, args } = tx.logs[0];

    assert.equal(event, 'ResolvePayment');
    assert.equal(args.payId, calculatePayId(payHash, payResolver.address));
    assert.equal(args.amount.toString(), 0);
    assert.equal(args.resolveDeadline.toString(), tx.receipt.blockNumber + RESOLVE_TIMEOUT);
  });
});
