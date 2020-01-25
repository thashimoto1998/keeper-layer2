/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { ICelerWallet } from "./ICelerWallet";

export class ICelerWalletFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICelerWallet {
    return new Contract(address, _abi, signerOrProvider) as ICelerWallet;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "walletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOperator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address"
      }
    ],
    name: "ChangeOperator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "walletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address[]",
        name: "owners",
        type: "address[]"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "CreateWallet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "walletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "DepositToWallet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "DrainToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "walletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposer",
        type: "address"
      }
    ],
    name: "ProposeNewOperator",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "fromWalletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "toWalletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "TransferToWallet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "walletId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "WithdrawFromWallet",
    type: "event"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]"
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_nonce",
        type: "bytes32"
      }
    ],
    name: "create",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_walletId",
        type: "bytes32"
      }
    ],
    name: "depositETH",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "depositERC20",
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
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
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
        name: "_fromWalletId",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_toWalletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferToWallet",
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
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_newOperator",
        type: "address"
      }
    ],
    name: "transferOperatorship",
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
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_newOperator",
        type: "address"
      }
    ],
    name: "proposeNewOperator",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "drainToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "_walletId",
        type: "bytes32"
      }
    ],
    name: "getWalletOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
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
        name: "_walletId",
        type: "bytes32"
      }
    ],
    name: "getOperator",
    outputs: [
      {
        internalType: "address",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      }
    ],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
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
        name: "_walletId",
        type: "bytes32"
      }
    ],
    name: "getProposedNewOperator",
    outputs: [
      {
        internalType: "address",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_walletId",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "getProposalVote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
