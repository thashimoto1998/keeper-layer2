/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PayResolver } from "./PayResolver";

export class PayResolverFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _registryAddr: string,
    _virtResolverAddr: string
  ): Promise<PayResolver> {
    return super.deploy(_registryAddr, _virtResolverAddr) as Promise<
      PayResolver
    >;
  }
  getDeployTransaction(
    _registryAddr: string,
    _virtResolverAddr: string
  ): UnsignedTransaction {
    return super.getDeployTransaction(_registryAddr, _virtResolverAddr);
  }
  attach(address: string): PayResolver {
    return super.attach(address) as PayResolver;
  }
  connect(signer: Signer): PayResolverFactory {
    return super.connect(signer) as PayResolverFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayResolver {
    return new Contract(address, _abi, signerOrProvider) as PayResolver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registryAddr",
        type: "address"
      },
      {
        internalType: "address",
        name: "_virtResolverAddr",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "payId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "resolveDeadline",
        type: "uint256"
      }
    ],
    name: "ResolvePayment",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "payRegistry",
    outputs: [
      {
        internalType: "contract IPayRegistry",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "virtResolver",
    outputs: [
      {
        internalType: "contract IVirtContractResolver",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "_resolvePayRequest",
        type: "bytes"
      }
    ],
    name: "resolvePaymentByConditions",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes",
        name: "_vouchedPayResult",
        type: "bytes"
      }
    ],
    name: "resolvePaymentByVouchedResult",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161280c38038061280c8339818101604052604081101561003357600080fd5b508051602090910151600080546001600160a01b039384166001600160a01b031991821617909155600180549390921692169190911790556127928061007a6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634367e45e1461005157806353fc513f146100c35780635fff88c8146100e7578063ead54c1b14610157575b600080fd5b6100c16004803603602081101561006757600080fd5b81019060208101813564010000000081111561008257600080fd5b82018360208201111561009457600080fd5b803590602001918460018302840111640100000000831117156100b657600080fd5b50909250905061015f565b005b6100cb6102a9565b604080516001600160a01b039092168252519081900360200190f35b6100c1600480360360208110156100fd57600080fd5b81019060208101813564010000000081111561011857600080fd5b82018360208201111561012a57600080fd5b8035906020019184600183028401116401000000008311171561014c57600080fd5b5090925090506102b8565b6100cb610535565b6101676125b0565b6101a683838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061054492505050565b90506101b06125ca565b81516101bb9061069b565b608081015151909150600090818160058111156101d457fe5b14156101ef576101e88385602001516108d0565b9150610230565b60018160058111156101fd57fe5b1415610211576101e8838560200151610c63565b61021a81611005565b1561022e576101e88385602001518361104a565bfe5b600084600001516040518082805190602001908083835b602083106102665780518252601f199092019160209182019101610247565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902090506102a0848285611730565b50505050505050565b6000546001600160a01b031681565b6102c0612630565b6102ff83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b6e92505050565b9050610309612651565b815161031490611c17565b905061031e6125ca565b81516103299061069b565b9050806080015160200151602001516020015182602001511115610394576040805162461bcd60e51b815260206004820152601a60248201527f457863656564206d6178207472616e7366657220616d6f756e74000000000000604482015290519081900360640190fd5b60006103ff84600001516040518082805190602001908083835b602083106103cd5780518252601f1990920191602091820191016103ae565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020611ca4565b9050600061041a856020015183611cf590919063ffffffff16565b90506000610435866040015184611cf590919063ffffffff16565b905083602001516001600160a01b0316826001600160a01b0316148015610471575083604001516001600160a01b0316816001600160a01b0316145b6104b6576040805162461bcd60e51b815260206004820152601160248201527010da1958dac81cda59dcc819985a5b1959607a1b604482015290519081900360640190fd5b600085600001516040518082805190602001908083835b602083106104ec5780518252601f1990920191602091820191016104cd565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020905061052a85828860200151611730565b505050505050505050565b6001546001600160a01b031681565b61054c6125b0565b61055461266b565b61055d83611de3565b9050606061057282600263ffffffff611dfa16565b90508060028151811061058157fe5b60200260200101516040519080825280602002602001820160405280156105bc57816020015b60608152602001906001900390816105a75790505b5083602001819052506000816002815181106105d457fe5b6020026020010181815250506000805b6105ed84611e8a565b15610692576105fb84611e96565b909250905081600114156106195761061284611ec3565b855261068d565b816002141561067d5761062b84611ec3565b85602001518460028151811061063d57fe5b60200260200101518151811061064f57fe5b60200260200101819052508260028151811061066757fe5b602090810291909101018051600101905261068d565b61068d848263ffffffff611f5016565b6105e4565b50505050919050565b6106a36125ca565b6106ab61266b565b6106b483611de3565b905060606106c982600863ffffffff611dfa16565b9050806004815181106106d857fe5b602002602001015160405190808252806020026020018201604052801561071957816020015b610706612685565b8152602001906001900390816106fe5790505b50836060018190525060008160048151811061073157fe5b6020026020010181815250506000805b61074a84611e8a565b156106925761075884611e96565b909250905081600114156107765761076f84611fb1565b85526108cb565b81600214156107a35761079061078b85611ec3565b61200c565b6001600160a01b031660208601526108cb565b81600314156107cb576107b861078b85611ec3565b6001600160a01b031660408601526108cb565b8160041415610837576107e56107e085611ec3565b612017565b8560600151846004815181106107f757fe5b60200260200101518151811061080957fe5b60200260200101819052508260048151811061082157fe5b60209081029190910101805160010190526108cb565b816005141561085b5761085161084c85611ec3565b612149565b60808601526108cb565b81600614156108775761086d84611fb1565b60a08601526108cb565b81600714156108935761088984611fb1565b60c08601526108cb565b81600814156108bb576108a861078b85611ec3565b6001600160a01b031660e08601526108cb565b6108cb848263ffffffff611f5016565b610741565b60008080805b856060015151811015610c35576108eb612685565b866060015182815181106108fb57fe5b602002602001015190506000600281111561091257fe5b8151600281111561091f57fe5b14156109e857806020015186858151811061093657fe5b60200260200101516040518082805190602001908083835b6020831061096d5780518252601f19909201916020918201910161094e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020146109dd576040805162461bcd60e51b815260206004820152600e60248201526d57726f6e6720707265696d61676560901b604482015290519081900360640190fd5b600190930192610c2c565b6001815160028111156109f757fe5b1480610a0f5750600281516002811115610a0d57fe5b145b1561022e576000610a1f826121fc565b6080830151604051632f36f6a560e21b815260206004820181815283516024840152835194955085946001600160a01b0386169463bcdbda9494909383926044909201919085019080838360005b83811015610a85578181015183820152602001610a6d565b50505050905090810190601f168015610ab25780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b158015610acf57600080fd5b505afa158015610ae3573d6000803e3d6000fd5b505050506040513d6020811015610af957600080fd5b5051610b49576040805162461bcd60e51b815260206004820152601a60248201527910dbdb991a5d1a5bdb881a5cc81b9bdd08199a5b985b1a5e995960321b604482015290519081900360640190fd5b60a083015160405163ea4ba8eb60e01b81526020600482018181528351602484015283516001600160a01b0386169463ea4ba8eb94909383926044909201919085019080838360005b83811015610baa578181015183820152602001610b92565b50505050905090810190601f168015610bd75780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b158015610bf457600080fd5b505afa158015610c08573d6000803e3d6000fd5b505050506040513d6020811015610c1e57600080fd5b5051610c2957600194505b50505b506001016108d6565b508015610c4757600092505050610c5d565b8460800151602001516020015160200151925050505b92915050565b6000808080805b866060015151811015610fce57610c7f612685565b87606001518281518110610c8f57fe5b6020026020010151905060006002811115610ca657fe5b81516002811115610cb357fe5b1415610d7c578060200151878681518110610cca57fe5b60200260200101516040518082805190602001908083835b60208310610d015780518252601f199092019160209182019101610ce2565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902014610d71576040805162461bcd60e51b815260206004820152600e60248201526d57726f6e6720707265696d61676560901b604482015290519081900360640190fd5b600190940193610fc5565b600181516002811115610d8b57fe5b1480610da35750600281516002811115610da157fe5b145b1561022e576000610db3826121fc565b6080830151604051632f36f6a560e21b815260206004820181815283516024840152835194955085946001600160a01b0386169463bcdbda9494909383926044909201919085019080838360005b83811015610e19578181015183820152602001610e01565b50505050905090810190601f168015610e465780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b158015610e6357600080fd5b505afa158015610e77573d6000803e3d6000fd5b505050506040513d6020811015610e8d57600080fd5b5051610edd576040805162461bcd60e51b815260206004820152601a60248201527910dbdb991a5d1a5bdb881a5cc81b9bdd08199a5b985b1a5e995960321b604482015290519081900360640190fd5b60a083015160405163ea4ba8eb60e01b815260206004820181815283516024840152835160019a506001600160a01b0386169463ea4ba8eb94909383926044909201919085019080838360005b83811015610f42578181015183820152602001610f2a565b50505050905090810190601f168015610f6f5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b158015610f8c57600080fd5b505afa158015610fa0573d6000803e3d6000fd5b505050506040513d6020811015610fb657600080fd5b505115610fc257600194505b50505b50600101610c6a565b50811580610fd95750805b15610ff95785608001516020015160200151602001519350505050610c5d565b60009350505050610c5d565b6000600382600581111561101557fe5b148061102c5750600482600581111561102a57fe5b145b806110425750600582600581111561104057fe5b145b90505b919050565b6000808080805b87606001515181101561169b57611066612685565b8860600151828151811061107657fe5b602002602001015190506000600281111561108d57fe5b8151600281111561109a57fe5b14156111635780602001518885815181106110b157fe5b60200260200101516040518082805190602001908083835b602083106110e85780518252601f1990920191602091820191016110c9565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902014611158576040805162461bcd60e51b815260206004820152600e60248201526d57726f6e6720707265696d61676560901b604482015290519081900360640190fd5b600190930192611692565b60018151600281111561117257fe5b148061118a575060028151600281111561118857fe5b145b1561022e57600061119a826121fc565b6080830151604051632f36f6a560e21b815260206004820181815283516024840152835194955085946001600160a01b0386169463bcdbda9494909383926044909201919085019080838360005b838110156112005781810151838201526020016111e8565b50505050905090810190601f16801561122d5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561124a57600080fd5b505afa15801561125e573d6000803e3d6000fd5b505050506040513d602081101561127457600080fd5b50516112c4576040805162461bcd60e51b815260206004820152601a60248201527910dbdb991a5d1a5bdb881a5cc81b9bdd08199a5b985b1a5e995960321b604482015290519081900360640190fd5b60038960058111156112d257fe5b14156113c5576113be816001600160a01b031663ea4ba8eb8560a001516040518263ffffffff1660e01b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561133b578181015183820152602001611323565b50505050905090810190601f1680156113685780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561138557600080fd5b505afa158015611399573d6000803e3d6000fd5b505050506040513d60208110156113af57600080fd5b5051889063ffffffff6122b716565b965061168b565b60048960058111156113d357fe5b14156114b85760a083015160405163ea4ba8eb60e01b81526020600482018181528351602484015283516113be948c946001600160a01b0388169463ea4ba8eb94929383926044019185019080838360005b8381101561143d578181015183820152602001611425565b50505050905090810190601f16801561146a5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561148757600080fd5b505afa15801561149b573d6000803e3d6000fd5b505050506040513d60208110156114b157600080fd5b5051612311565b60058960058111156114c657fe5b141561022e5784156115b15760a083015160405163ea4ba8eb60e01b81526020600482018181528351602484015283516113be948c946001600160a01b0388169463ea4ba8eb94929383926044019185019080838360005b8381101561153657818101518382015260200161151e565b50505050905090810190601f1680156115635780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561158057600080fd5b505afa158015611594573d6000803e3d6000fd5b505050506040513d60208110156115aa57600080fd5b5051612328565b60a083015160405163ea4ba8eb60e01b81526020600482018181528351602484015283516001600160a01b0386169463ea4ba8eb94909383926044909201919085019080838360005b838110156116125781810151838201526020016115fa565b50505050905090810190601f16801561163f5780820380516001836020036101000a031916815260200191505b509250505060206040518083038186803b15801561165c57600080fd5b505afa158015611670573d6000803e3d6000fd5b505050506040513d602081101561168657600080fd5b505196505b6001945050505b50600101611051565b508015611712578660800151602001516020015160200151831115611707576040805162461bcd60e51b815260206004820152601a60248201527f457863656564206d6178207472616e7366657220616d6f756e74000000000000604482015290519081900360640190fd5b829350505050611729565b866080015160200151602001516020015193505050505b9392505050565b60a083015143908111156117755760405162461bcd60e51b815260040180806020018281038252602a815260200180612734602a913960400191505060405180910390fd5b60006117818430612337565b60008054604080516304f61c0b60e31b8152600481018590528151949550929384936001600160a01b03909316926327b0e058926024808301939192829003018186803b1580156117d157600080fd5b505afa1580156117e5573d6000803e3d6000fd5b505050506040513d60408110156117fb57600080fd5b50805160209091015190925090508015806118165750808411155b6118515760405162461bcd60e51b81526004018080602001828103825260238152602001806127116023913960400191505060405180910390fd5b8015611a1d578185116118ab576040805162461bcd60e51b815260206004820152601860248201527f4e657720616d6f756e74206973206e6f74206c61726765720000000000000000604482015290519081900360640190fd5b8660800151602001516020015160200151851415611973576000805460408051630e1e354960e41b8152600481018a9052602481018990526044810188905290516001600160a01b039092169263e1e354909260648084019382900301818387803b15801561191957600080fd5b505af115801561192d573d6000803e3d6000fd5b5050604080518881526020810188905281518794507fa87e293885636c5018108e8ee0e41d65206d1dfc0a9066f26f2a91a78b2beb1793509081900390910190a2611a18565b600080546040805163f8fb012f60e01b8152600481018a90526024810189905290516001600160a01b039092169263f8fb012f9260448084019382900301818387803b1580156119c257600080fd5b505af11580156119d6573d6000803e3d6000fd5b5050604080518881526020810185905281518794507fa87e293885636c5018108e8ee0e41d65206d1dfc0a9066f26f2a91a78b2beb1793509081900390910190a25b6102a0565b60008760800151602001516020015160200151861415611a3e575083611ab9565b611a62611a588960c00151876122b790919063ffffffff16565b8960a00151612328565b905060008111611ab9576040805162461bcd60e51b815260206004820152601960248201527f4e6577207265736f6c766520646561646c696e65206973203000000000000000604482015290519081900360640190fd5b6000805460408051630e1e354960e41b8152600481018b9052602481018a90526044810185905290516001600160a01b039092169263e1e354909260648084019382900301818387803b158015611b0f57600080fd5b505af1158015611b23573d6000803e3d6000fd5b5050604080518981526020810185905281518894507fa87e293885636c5018108e8ee0e41d65206d1dfc0a9066f26f2a91a78b2beb1793509081900390910190a25050505050505050565b611b76612630565b611b7e61266b565b611b8783611de3565b90506000805b611b9683611e8a565b15611c0f57611ba483611e96565b90925090508160011415611bc257611bbb83611ec3565b8452611c0a565b8160021415611bde57611bd483611ec3565b6020850152611c0a565b8160031415611bfa57611bf083611ec3565b6040850152611c0a565b611c0a838263ffffffff611f5016565b611b8d565b505050919050565b611c1f612651565b611c2761266b565b611c3083611de3565b90506000805b611c3f83611e8a565b15611c0f57611c4d83611e96565b90925090508160011415611c6b57611c6483611ec3565b8452611c9f565b8160021415611c8f57611c85611c8084611ec3565b612376565b6020850152611c9f565b611c9f838263ffffffff611f5016565b611c36565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b60008151604114611d0857506000610c5d565b60208201516040830151606084015160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611d4e5760009350505050610c5d565b8060ff16601b14158015611d6657508060ff16601c14155b15611d775760009350505050610c5d565b6040805160008152602080820180845289905260ff8416828401526060820186905260808201859052915160019260a0808401939192601f1981019281900390910190855afa158015611dce573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b611deb61266b565b60208101919091526000815290565b815160408051600184018082526020808202830101909252606092918015611e2c578160200160208202803883390190505b5091506000805b611e3c86611e8a565b15611e8157611e4a86611e96565b80925081935050506001848381518110611e6057fe5b602002602001018181510191508181525050611e7c8682611f50565b611e33565b50509092525090565b60208101515190511090565b6000806000611ea484611fb1565b9050600881049250806007166005811115611ebb57fe5b915050915091565b60606000611ed083611fb1565b8351602085015151919250820190811115611eea57600080fd5b816040519080825280601f01601f191660200182016040528015611f15576020820181803883390190505b50602080860151865192955091818601919083010160005b85811015611f45578181015183820152602001611f2d565b505050935250919050565b6000816005811115611f5e57fe5b1415611f7357611f6d82611fb1565b50611fad565b6002816005811115611f8157fe5b141561004c576000611f9283611fb1565b835181018085526020850151519192501115611f6d57600080fd5b5050565b602080820151825181019091015160009182805b600a8110156120065783811a91508060070282607f16901b851794508160801660001415611ffe57855101600101855250611045915050565b600101611fc5565b50600080fd5b600061104282612399565b61201f612685565b61202761266b565b61203083611de3565b90506000805b61203f83611e8a565b15611c0f5761204d83611e96565b909250905081600114156120915761206483611fb1565b600281111561206f57fe5b8490600281111561207c57fe5b9081600281111561208957fe5b905250612144565b81600214156120b5576120ab6120a684611ec3565b6123b8565b6020850152612144565b81600314156120dd576120ca61078b84611ec3565b6001600160a01b03166040850152612144565b81600414156120fc576120f26120a684611ec3565b6060850152612144565b81600514156121185761210e83611ec3565b6080850152612144565b81600614156121345761212a83611ec3565b60a0850152612144565b612144838263ffffffff611f5016565b612036565b6121516126be565b61215961266b565b61216283611de3565b90506000805b61217183611e8a565b15611c0f5761217f83611e96565b909250905081600114156121c35761219683611fb1565b60058111156121a157fe5b849060058111156121ae57fe5b908160058111156121bb57fe5b9052506121f7565b81600214156121e7576121dd6121d884611ec3565b6123d0565b60208501526121f7565b6121f7838263ffffffff611f5016565b612168565b600060018251600281111561220d57fe5b141561221e57506040810151611045565b60028251600281111561222d57fe5b141561022e57600154606083015160408051635c23bdf560e01b81526004810192909252516001600160a01b0390921691635c23bdf591602480820192602092909190829003018186803b15801561228457600080fd5b505afa158015612298573d6000803e3d6000fd5b505050506040513d60208110156122ae57600080fd5b50519050611045565b600082820183811015611729576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000818310156123215781611729565b5090919050565b60008183106123215781611729565b6040805160208082019490945260609290921b6bffffffffffffffffffffffff1916828201528051808303603401815260549092019052805191012090565b600060208251111561238757600080fd5b50602081810151915160089103021c90565b600081516014146123a957600080fd5b5060200151600160601b900490565b600081516020146123c857600080fd5b506020015190565b6123d86126dd565b6123e061266b565b6123e983611de3565b90506000805b6123f883611e8a565b15611c0f5761240683611e96565b9092509050816001141561242c5761242561242084611ec3565b612465565b8452612460565b81600214156124505761244661244184611ec3565b61251c565b6020850152612460565b612460838263ffffffff611f5016565b6123ef565b61246d6126f9565b61247561266b565b61247e83611de3565b90506000805b61248d83611e8a565b15611c0f5761249b83611e96565b909250905081600114156124df576124b283611fb1565b60028111156124bd57fe5b849060028111156124ca57fe5b908160028111156124d757fe5b905250612517565b8160021415612507576124f461078b84611ec3565b6001600160a01b03166020850152612517565b612517838263ffffffff611f5016565b612484565b6125246126f9565b61252c61266b565b61253583611de3565b90506000805b61254483611e8a565b15611c0f5761255283611e96565b9092509050816001141561257c5761256c61078b84611ec3565b6001600160a01b031684526125ab565b816002141561259b57612591611c8084611ec3565b60208501526125ab565b6125ab838263ffffffff611f5016565b61253b565b604051806040016040528060608152602001606081525090565b6040518061010001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200161260c6126be565b8152602001600081526020016000815260200160006001600160a01b031681525090565b60405180606001604052806060815260200160608152602001606081525090565b604051806040016040528060608152602001600081525090565b604051806040016040528060008152602001606081525090565b6040805160c081019091528060008152600060208201819052604082018190526060808301919091526080820181905260a09091015290565b6040805180820190915280600081526020016126d86126dd565b905290565b60405180604001604052806126f06126f9565b81526020016126d85b60408051808201909152600080825260208201529056fe506173736564206f6e636861696e207265736f6c76652070617920646561646c696e6550617373656420706179207265736f6c766520646561646c696e6520696e20636f6e64506179206d7367a265627a7a7231582032c8b70223d4df2d74b8178f835c319ad0e4507aff36dbda86ce869333af937e64736f6c634300050c0032";