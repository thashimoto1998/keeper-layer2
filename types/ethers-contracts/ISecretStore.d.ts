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

interface ISecretStoreInterface extends Interface {
  functions: {
    checkPermissions: TypedFunctionDescription<{
      encode([grantee, did]: [string, Arrayish]): string;
    }>;
  };

  events: {};
}

export class ISecretStore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ISecretStore;
  attach(addressOrName: string): ISecretStore;
  deployed(): Promise<ISecretStore>;

  on(event: EventFilter | string, listener: Listener): ISecretStore;
  once(event: EventFilter | string, listener: Listener): ISecretStore;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ISecretStore;
  removeAllListeners(eventName: EventFilter | string): ISecretStore;
  removeListener(eventName: any, listener: Listener): ISecretStore;

  interface: ISecretStoreInterface;

  functions: {
    checkPermissions(grantee: string, did: Arrayish): Promise<boolean>;
  };

  checkPermissions(grantee: string, did: Arrayish): Promise<boolean>;

  filters: {};

  estimate: {
    checkPermissions(grantee: string, did: Arrayish): Promise<BigNumber>;
  };
}
