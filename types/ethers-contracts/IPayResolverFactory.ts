/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IPayResolver } from "./IPayResolver";

export class IPayResolverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPayResolver {
    return new Contract(address, _abi, signerOrProvider) as IPayResolver;
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
    name: "ResolvePayment",
    type: "event"
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
