/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IPayRegistry } from "./IPayRegistry";

export class IPayRegistryFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPayRegistry {
    return new Contract(address, _abi, signerOrProvider) as IPayRegistry;
  }
}

const _abi = [
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
    name: "PayInfoUpdate",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_payHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_setter",
        type: "address"
      }
    ],
    name: "calculatePayId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_payHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256"
      }
    ],
    name: "setPayAmount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_payHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "setPayDeadline",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_payHash",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "_amt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
      }
    ],
    name: "setPayInfo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_payHashes",
        type: "bytes32[]"
      },
      {
        internalType: "uint256[]",
        name: "_amts",
        type: "uint256[]"
      }
    ],
    name: "setPayAmounts",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_payHashes",
        type: "bytes32[]"
      },
      {
        internalType: "uint256[]",
        name: "_deadlines",
        type: "uint256[]"
      }
    ],
    name: "setPayDeadlines",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_payHashes",
        type: "bytes32[]"
      },
      {
        internalType: "uint256[]",
        name: "_amts",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "_deadlines",
        type: "uint256[]"
      }
    ],
    name: "setPayInfos",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_payIds",
        type: "bytes32[]"
      },
      {
        internalType: "uint256",
        name: "_lastPayResolveDeadline",
        type: "uint256"
      }
    ],
    name: "getPayAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_payId",
        type: "bytes32"
      }
    ],
    name: "getPayInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
