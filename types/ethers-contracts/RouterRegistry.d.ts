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

interface RouterRegistryInterface extends Interface {
  functions: {
    routerInfo: TypedFunctionDescription<{ encode([]: [string]): string }>;

    registerRouter: TypedFunctionDescription<{ encode([]: []): string }>;

    deregisterRouter: TypedFunctionDescription<{ encode([]: []): string }>;

    refreshRouter: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    RouterUpdated: TypedEventDescription<{
      encodeTopics([op, routerAddress]: [
        BigNumberish | null,
        string | null
      ]): string[];
    }>;
  };
}

export class RouterRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): RouterRegistry;
  attach(addressOrName: string): RouterRegistry;
  deployed(): Promise<RouterRegistry>;

  on(event: EventFilter | string, listener: Listener): RouterRegistry;
  once(event: EventFilter | string, listener: Listener): RouterRegistry;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): RouterRegistry;
  removeAllListeners(eventName: EventFilter | string): RouterRegistry;
  removeListener(eventName: any, listener: Listener): RouterRegistry;

  interface: RouterRegistryInterface;

  functions: {
    routerInfo(arg0: string): Promise<BigNumber>;

    registerRouter(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deregisterRouter(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    refreshRouter(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  routerInfo(arg0: string): Promise<BigNumber>;

  registerRouter(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deregisterRouter(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  refreshRouter(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  filters: {
    RouterUpdated(
      op: BigNumberish | null,
      routerAddress: string | null
    ): EventFilter;
  };

  estimate: {
    routerInfo(arg0: string): Promise<BigNumber>;

    registerRouter(): Promise<BigNumber>;

    deregisterRouter(): Promise<BigNumber>;

    refreshRouter(): Promise<BigNumber>;
  };
}
