/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IVirtContractResolverInterface extends Interface {
  functions: {
    deploy: TypedFunctionDescription<{
      encode([_code, _nonce]: [Arrayish, BigNumberish]): string;
    }>;

    resolve: TypedFunctionDescription<{
      encode([_virtAddr]: [Arrayish]): string;
    }>;
  };

  events: {
    Deploy: TypedEventDescription<{
      encodeTopics([virtAddr]: [Arrayish | null]): string[];
    }>;
  };
}

export class IVirtContractResolver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IVirtContractResolver;
  attach(addressOrName: string): IVirtContractResolver;
  deployed(): Promise<IVirtContractResolver>;

  on(event: EventFilter | string, listener: Listener): IVirtContractResolver;
  once(event: EventFilter | string, listener: Listener): IVirtContractResolver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IVirtContractResolver;
  removeAllListeners(eventName: EventFilter | string): IVirtContractResolver;
  removeListener(eventName: any, listener: Listener): IVirtContractResolver;

  interface: IVirtContractResolverInterface;

  functions: {
    deploy(
      _code: Arrayish,
      _nonce: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    resolve(_virtAddr: Arrayish): Promise<string>;
  };

  deploy(
    _code: Arrayish,
    _nonce: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  resolve(_virtAddr: Arrayish): Promise<string>;

  filters: {
    Deploy(virtAddr: Arrayish | null): EventFilter;
  };

  estimate: {
    deploy(_code: Arrayish, _nonce: BigNumberish): Promise<BigNumber>;

    resolve(_virtAddr: Arrayish): Promise<BigNumber>;
  };
}
