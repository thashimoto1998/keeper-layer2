/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { LedgerMigrate } from "./LedgerMigrate";

export class LedgerMigrateFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<LedgerMigrate> {
    return super.deploy() as Promise<LedgerMigrate>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): LedgerMigrate {
    return super.attach(address) as LedgerMigrate;
  }
  connect(signer: Signer): LedgerMigrateFactory {
    return super.connect(signer) as LedgerMigrateFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LedgerMigrate {
    return new Contract(address, _abi, signerOrProvider) as LedgerMigrate;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldLedgerAddr",
        type: "address"
      }
    ],
    name: "MigrateChannelFrom",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "channelId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newLedgerAddr",
        type: "address"
      }
    ],
    name: "MigrateChannelTo",
    type: "event"
  }
];

const _bytecode =
  "0x61137e610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80633c50ec721461004557806382b4338a146100db575b600080fd5b81801561005157600080fd5b506100c96004803603604081101561006857600080fd5b8135919081019060408101602082013564010000000081111561008a57600080fd5b82018360208201111561009c57600080fd5b803590602001918460018302840111640100000000831117156100be57600080fd5b50909250905061016f565b60408051918252519081900360200190f35b8180156100e757600080fd5b5061016d600480360360608110156100fe57600080fd5b8135916001600160a01b036020820135169181019060608101604082013564010000000081111561012e57600080fd5b82018360208201111561014057600080fd5b8035906020019184600183028401116401000000008311171561016257600080fd5b5090925090506104c7565b005b600061017961128c565b6101b884848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061071592505050565b90506101c26112a6565b81516101cd9061086c565b80516000818152600689016020526040908190209083015192935090916001600383015460ff1660048111156101ff57fe5b148061021d57506002600383015460ff16600481111561021b57fe5b145b61022657600080fd5b600085600001516040518082805190602001908083835b6020831061025c5780518252601f19909201916020918201910161023d565b51815160209384036101000a6000190180199092169116179052604051919093018190039020918a015191945061029a935086925084919050610956565b6102e2576040805162461bcd60e51b815260206004820152601460248201527310da1958dac818dbcb5cda59dcc819985a5b195960621b604482015290519081900360640190fd5b60208501516001600160a01b03163014610343576040805162461bcd60e51b815260206004820152601f60248201527f46726f6d206c65646765722061646472657373206973206e6f74207468697300604482015290519081900360640190fd5b6001600160a01b038216331461038a5760405162461bcd60e51b81526004018080602001828103825260238152602001806113066023913960400191505060405180910390fd5b84606001514311156103e3576040805162461bcd60e51b815260206004820152601960248201527f506173736564206d6967726174696f6e20646561646c696e6500000000000000604482015290519081900360640190fd5b6103f58a84600463ffffffff6109f216565b600383018054610100600160a81b0319166101006001600160a01b0385169081029190911790915560405185907fdefb8a94bbfc44ef5297b035407a7dd1314f369e39c3301f5b90f8810fb9fe4f90600090a360038a01546040805163283226a360e21b8152600481018790526001600160a01b0385811660248301529151919092169163a0c89a8c91604480830192600092919082900301818387803b15801561049f57600080fd5b505af11580156104b3573d6000803e3d6000fd5b5095985050505050505050505b9392505050565b60405163e0a515b760e01b81526020600482019081526024820183905284916000916001600160a01b0384169163e0a515b79187918791908190604401848480828437600081840152601f19601f8201169050808301925050509350505050602060405180830381600087803b15801561054057600080fd5b505af1158015610554573d6000803e3d6000fd5b505050506040513d602081101561056a57600080fd5b505160008181526006880160205260408120919250600382015460ff16600481111561059257fe5b146105ce5760405162461bcd60e51b81526004018080602001828103825260218152602001806113296021913960400191505060405180910390fd5b600387015460408051632a5a97e560e21b815260048101859052905130926001600160a01b03169163a96a5f94916024808301926020929190829003018186803b15801561061b57600080fd5b505afa15801561062f573d6000803e3d6000fd5b505050506040513d602081101561064557600080fd5b50516001600160a01b0316146106a2576040805162461bcd60e51b815260206004820152601c60248201527f4f70657261746f7273686970206e6f74207472616e7366657272656400000000604482015290519081900360640190fd5b6106b48782600163ffffffff6109f216565b6106c581848463ffffffff610b1316565b6106d681848463ffffffff610c0316565b6040516001600160a01b0387169083907f141a72a1d915a7c4205104b6e564cc991aa827c5f2c672a5d6a1da8bef99d6eb90600090a350505050505050565b61071d61128c565b6107256112cd565b61072e83610da6565b9050606061074382600263ffffffff610dbd16565b90508060028151811061075257fe5b602002602001015160405190808252806020026020018201604052801561078d57816020015b60608152602001906001900390816107785790505b5083602001819052506000816002815181106107a557fe5b6020026020010181815250506000805b6107be84610e4d565b15610863576107cc84610e5c565b909250905081600114156107ea576107e384610e89565b855261085e565b816002141561084e576107fc84610e89565b85602001518460028151811061080e57fe5b60200260200101518151811061082057fe5b60200260200101819052508260028151811061083857fe5b602090810291909101018051600101905261085e565b61085e848263ffffffff610f1616565b6107b5565b50505050919050565b6108746112a6565b61087c6112cd565b61088583610da6565b90506000805b61089483610e4d565b1561094e576108a283610e5c565b909250905081600114156108c8576108c16108bc84610e89565b610f77565b8452610949565b81600214156108f5576108e26108dd84610e89565b610f8f565b6001600160a01b03166020850152610949565b816003141561091d5761090a6108dd84610e89565b6001600160a01b03166040850152610949565b81600414156109395761092f83610fa0565b6060850152610949565b610949838263ffffffff610f1616565b61088b565b505050919050565b60008151600214610969575060006104c0565b600061097484610ffb565b90506000805b60028110156109e5576109a985828151811061099257fe5b60200260200101518461104c90919063ffffffff16565b91508660040181600281106109ba57fe5b60080201546001600160a01b038381169116146109dd57600093505050506104c0565b60010161097a565b5060019695505050505050565b8060048111156109fe57fe5b600383015460ff166004811115610a1157fe5b1415610a1c57610b0e565b6000600383015460ff166004811115610a3157fe5b14610a9c576003820154610a7290600190859060009060ff166004811115610a5557fe5b81526020019081526020016000205461113a90919063ffffffff16565b6003830154849060009060ff166004811115610a8a57fe5b81526020810191909152604001600020555b610acd6001846000846004811115610ab057fe5b81526020019081526020016000205461117c90919063ffffffff16565b836000836004811115610adc57fe5b815260208101919091526040016000205560038201805482919060ff19166001836004811115610b0857fe5b02179055505b505050565b6000826001600160a01b0316632f0ac304836040518263ffffffff1660e01b81526004018082815260200191505060806040518083038186803b158015610b5957600080fd5b505afa158015610b6d573d6000803e3d6000fd5b505050506040513d6080811015610b8357600080fd5b508051602082015160408301516060909301516014880155600280880180546001600160a01b0390951661010002610100600160a81b031990951694909417909355600187019190915591508190811115610bda57fe5b60028086018054909160ff19909116906001908490811115610bf857fe5b021790555050505050565b610c0b6112e7565b610c136112e7565b610c1b6112e7565b610c236112e7565b610c2b6112e7565b610c336112e7565b876001600160a01b03166388f41465886040518263ffffffff1660e01b8152600401808281526020019150506101806040518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610180811015610cb257600080fd5b50955050604085019350506080840191505060c083016101008401610140850160005b6002811015610d9a5760008a6004018260028110610cef57fe5b600802019050878260028110610d0157fe5b602002015181546001600160a01b0319166001600160a01b03909116178155868260028110610d2c57fe5b60200201516001820155858260028110610d4257fe5b60200201518160020181905550848260028110610d5b57fe5b60200201516003820155838260028110610d7157fe5b60200201516004820155828260028110610d8757fe5b6020020151600790910155600101610cd5565b50505050505050505050565b610dae6112cd565b60208101919091526000815290565b815160408051600184018082526020808202830101909252606092918015610def578160200160208202803883390190505b5091506000805b610dff86610e4d565b15610e4457610e0d86610e5c565b80925081935050506001848381518110610e2357fe5b602002602001018181510191508181525050610e3f8682610f16565b610df6565b50509092525090565b6020810151518151105b919050565b6000806000610e6a84610fa0565b9050600881049250806007166005811115610e8157fe5b915050915091565b60606000610e9683610fa0565b8351602085015151919250820190811115610eb057600080fd5b816040519080825280601f01601f191660200182016040528015610edb576020820181803883390190505b50602080860151865192955091818601919083010160005b85811015610f0b578181015183820152602001610ef3565b505050935250919050565b6000816005811115610f2457fe5b1415610f3957610f3382610fa0565b50610f73565b6002816005811115610f4757fe5b1415610040576000610f5883610fa0565b835181018085526020850151519192501115610f3357600080fd5b5050565b60008151602014610f8757600080fd5b506020015190565b6000610f9a826111d6565b92915050565b602080820151825181019091015160009182805b600a811015610ff55783811a91508060070282607f16901b851794508160801660001415610fed57855101600101855250610e57915050565b600101610fb4565b50600080fd5b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b6000815160411461105f57506000610f9a565b60208201516040830151606084015160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156110a55760009350505050610f9a565b8060ff16601b141580156110bd57508060ff16601c14155b156110ce5760009350505050610f9a565b6040805160008152602080820180845289905260ff8416828401526060820186905260808201859052915160019260a0808401939192601f1981019281900390910190855afa158015611125573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b60006104c083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111f5565b6000828201838110156104c0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600081516014146111e657600080fd5b5060200151600160601b900490565b600081848411156112845760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611249578181015183820152602001611231565b50505050905090810190601f1680156112765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b604051806040016040528060608152602001606081525090565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604051806040016040528060008152602001606081525090565b6040518060400160405280600290602082028038833950919291505056fe546f206c65646765722061646472657373206973206e6f74206d73672e73656e646572496d6d69677261746564206368616e6e656c20616c726561647920657869737473a265627a7a7231582003cf80e2df02f4764b9919409c17399da34519f3ad29944aba83e5ebfd650f2d64736f6c634300050c0032";
