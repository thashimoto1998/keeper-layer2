/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { IRouterRegistry } from "./IRouterRegistry";

export class IRouterRegistryFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRouterRegistry {
    return new Contract(address, _abi, signerOrProvider) as IRouterRegistry;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "enum IRouterRegistry.RouterOperation",
        name: "op",
        type: "uint8"
      },
      {
        indexed: true,
        internalType: "address",
        name: "routerAddress",
        type: "address"
      }
    ],
    name: "RouterUpdated",
    type: "event"
  },
  {
    constant: false,
    inputs: [],
    name: "registerRouter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "deregisterRouter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "refreshRouter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];
