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

interface IBooleanOutcomeInterface extends Interface {
  functions: {
    isFinalized: TypedFunctionDescription<{
      encode([_query]: [Arrayish]): string;
    }>;

    getOutcome: TypedFunctionDescription<{
      encode([_query]: [Arrayish]): string;
    }>;
  };

  events: {};
}

export class IBooleanOutcome extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IBooleanOutcome;
  attach(addressOrName: string): IBooleanOutcome;
  deployed(): Promise<IBooleanOutcome>;

  on(event: EventFilter | string, listener: Listener): IBooleanOutcome;
  once(event: EventFilter | string, listener: Listener): IBooleanOutcome;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IBooleanOutcome;
  removeAllListeners(eventName: EventFilter | string): IBooleanOutcome;
  removeListener(eventName: any, listener: Listener): IBooleanOutcome;

  interface: IBooleanOutcomeInterface;

  functions: {
    isFinalized(_query: Arrayish): Promise<boolean>;

    getOutcome(_query: Arrayish): Promise<boolean>;
  };

  isFinalized(_query: Arrayish): Promise<boolean>;

  getOutcome(_query: Arrayish): Promise<boolean>;

  filters: {};

  estimate: {
    isFinalized(_query: Arrayish): Promise<BigNumber>;

    getOutcome(_query: Arrayish): Promise<BigNumber>;
  };
}
