const Web3 = require('web3')
const constants = require('./constants')

function getSessionID (nonce, addr1, addr2) {
  let session;
  if (addr1 < addr2) {
    session = web3.eth.abi.encodeParameters(['uint', 'address[]'], [nonce, [addr1, addr2]]);
  } else {
    session = web3.eth.abi.encodeParameters(['uint', 'address[]'], [nonce, [addr2, addr1]]);
  }
  return web3.utils.keccak256(session);
}

function padLeft (data) {
  const pad = (32 - (data.length - 2) % 32) % 32;
  let x = data.substr(2, data.length);
  for (let i = 0; i < pad; i++) {
    x = 0 + x;
  }
  return '0x' + x;
}

async function waitBlock (block, addr) {
  let blocknumber = await web3.eth.getBlockNumber();
  while (blocknumber <= block) {
    await web3.eth.sendTransaction({ from: addr });
    blocknumber = await web3.eth.getBlockNumber();
  }
}

async function getDeployGasUsed(instance) {
  let receipt = await web3.eth.getTransactionReceipt(instance.transactionHash);
  return receipt.gasUsed;
}

function getCallGasUsed(tx) {
  return tx.receipt.gasUsed;
}

async function getWeb3() {
  return new Web3(new Web3.prividers.HttpProvider(constants.keeper.nodeUrl));
}

async function generateId() {
  const id = await getWeb3().utils.sha3(Math.random().toString());
  return id;
}

async function assertEmitted(result, n, name) {
  let gotEvents = 0;
  for (let i = 0; i < result.logs.length; i++) {
    const ev = result.logs[i];
    if (ev.event === name) {
      gotEvents++
    }
  }
  assert.strictEqual(n, gotEvents, `Event ${name} was not emitted.`)
}

async function getEventArgsFromTx(txReceipt, eventName) {
  return txReceipt.logs.filter((log) => {
    return log.event === eventName
  })[0].args
}



module.exports.getSessionID = getSessionID;
module.exports.padLeft = padLeft;
module.exports.waitBlock = waitBlock;
module.exports.getDeployGasUsed = getDeployGasUsed;
module.exports.getCallGasUsed = getCallGasUsed;
module.exports.generateId = generateId;
module.exports.assertEmitted = assertEmitted;
module.exports.getEventArgsFromTx = getEventArgsFromTx;
module.exports.getWeb3 = getWeb3;