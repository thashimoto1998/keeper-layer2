/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IBooleanOutcome } from "./IBooleanOutcome";

export class IBooleanOutcomeFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBooleanOutcome {
    return new Contract(address, _abi, signerOrProvider) as IBooleanOutcome;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_query",
        type: "bytes"
      }
    ],
    name: "isFinalized",
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
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes",
        name: "_query",
        type: "bytes"
      }
    ],
    name: "getOutcome",
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
