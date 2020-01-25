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

interface DIDRegistryInterface extends Interface {
  functions: {
    isOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    renounceOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    initialize: TypedFunctionDescription<{
      encode([_owner]: [string]): string;
    }>;

    isDIDOwnerOrProvider: TypedFunctionDescription<{
      encode([_caller, _did]: [string, Arrayish]): string;
    }>;

    registerAttribute: TypedFunctionDescription<{
      encode([_did, _checksum, _providers, _value]: [
        Arrayish,
        Arrayish,
        string[],
        string
      ]): string;
    }>;

    addDIDProvider: TypedFunctionDescription<{
      encode([_did, _provider]: [Arrayish, string]): string;
    }>;

    removeDIDProvider: TypedFunctionDescription<{
      encode([_did, _provider]: [Arrayish, string]): string;
    }>;

    isDIDProvider: TypedFunctionDescription<{
      encode([_did, _provider]: [Arrayish, string]): string;
    }>;

    getDIDRegister: TypedFunctionDescription<{
      encode([_did]: [Arrayish]): string;
    }>;

    getBlockNumberUpdated: TypedFunctionDescription<{
      encode([_did]: [Arrayish]): string;
    }>;

    getDIDOwner: TypedFunctionDescription<{
      encode([_did]: [Arrayish]): string;
    }>;

    getDIDRegistrySize: TypedFunctionDescription<{ encode([]: []): string }>;

    getDIDRegisterIds: TypedFunctionDescription<{ encode([]: []): string }>;

    transferDIDOwnership: TypedFunctionDescription<{
      encode([_did, _newOwner]: [Arrayish, string]): string;
    }>;
  };

  events: {
    DIDAttributeRegistered: TypedEventDescription<{
      encodeTopics([
        _did,
        _owner,
        _checksum,
        _value,
        _lastUpdatedBy,
        _blockNumberUpdated
      ]: [
        Arrayish | null,
        string | null,
        Arrayish | null,
        null,
        null,
        null
      ]): string[];
    }>;

    DIDOwnershipTransferred: TypedEventDescription<{
      encodeTopics([_did, _previousOwner, _newOwner]: [
        null,
        null,
        null
      ]): string[];
    }>;

    DIDProviderAdded: TypedEventDescription<{
      encodeTopics([_did, _provider]: [null, null]): string[];
    }>;

    DIDProviderRemoved: TypedEventDescription<{
      encodeTopics([_did, _provider, state]: [null, null, null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class DIDRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DIDRegistry;
  attach(addressOrName: string): DIDRegistry;
  deployed(): Promise<DIDRegistry>;

  on(event: EventFilter | string, listener: Listener): DIDRegistry;
  once(event: EventFilter | string, listener: Listener): DIDRegistry;
  addListener(eventName: EventFilter | string, listener: Listener): DIDRegistry;
  removeAllListeners(eventName: EventFilter | string): DIDRegistry;
  removeListener(eventName: any, listener: Listener): DIDRegistry;

  interface: DIDRegistryInterface;

  functions: {
    isOwner(): Promise<boolean>;

    owner(): Promise<string>;

    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialize(
      _owner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isDIDOwnerOrProvider(_caller: string, _did: Arrayish): Promise<boolean>;

    registerAttribute(
      _did: Arrayish,
      _checksum: Arrayish,
      _providers: string[],
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addDIDProvider(
      _did: Arrayish,
      _provider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeDIDProvider(
      _did: Arrayish,
      _provider: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isDIDProvider(_did: Arrayish, _provider: string): Promise<boolean>;

    getDIDRegister(
      _did: Arrayish
    ): Promise<{
      owner: string;
      lastChecksum: string;
      lastUpdatedBy: string;
      blockNumberUpdated: BigNumber;
      providers: string[];
      0: string;
      1: string;
      2: string;
      3: BigNumber;
      4: string[];
    }>;

    getBlockNumberUpdated(_did: Arrayish): Promise<BigNumber>;

    getDIDOwner(_did: Arrayish): Promise<string>;

    getDIDRegistrySize(): Promise<BigNumber>;

    getDIDRegisterIds(): Promise<string[]>;

    transferDIDOwnership(
      _did: Arrayish,
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  isOwner(): Promise<boolean>;

  owner(): Promise<string>;

  renounceOwnership(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initialize(
    _owner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isDIDOwnerOrProvider(_caller: string, _did: Arrayish): Promise<boolean>;

  registerAttribute(
    _did: Arrayish,
    _checksum: Arrayish,
    _providers: string[],
    _value: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addDIDProvider(
    _did: Arrayish,
    _provider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  removeDIDProvider(
    _did: Arrayish,
    _provider: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isDIDProvider(_did: Arrayish, _provider: string): Promise<boolean>;

  getDIDRegister(
    _did: Arrayish
  ): Promise<{
    owner: string;
    lastChecksum: string;
    lastUpdatedBy: string;
    blockNumberUpdated: BigNumber;
    providers: string[];
    0: string;
    1: string;
    2: string;
    3: BigNumber;
    4: string[];
  }>;

  getBlockNumberUpdated(_did: Arrayish): Promise<BigNumber>;

  getDIDOwner(_did: Arrayish): Promise<string>;

  getDIDRegistrySize(): Promise<BigNumber>;

  getDIDRegisterIds(): Promise<string[]>;

  transferDIDOwnership(
    _did: Arrayish,
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    DIDAttributeRegistered(
      _did: Arrayish | null,
      _owner: string | null,
      _checksum: Arrayish | null,
      _value: null,
      _lastUpdatedBy: null,
      _blockNumberUpdated: null
    ): EventFilter;

    DIDOwnershipTransferred(
      _did: null,
      _previousOwner: null,
      _newOwner: null
    ): EventFilter;

    DIDProviderAdded(_did: null, _provider: null): EventFilter;

    DIDProviderRemoved(_did: null, _provider: null, state: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    isOwner(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    renounceOwnership(): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;

    initialize(_owner: string): Promise<BigNumber>;

    isDIDOwnerOrProvider(_caller: string, _did: Arrayish): Promise<BigNumber>;

    registerAttribute(
      _did: Arrayish,
      _checksum: Arrayish,
      _providers: string[],
      _value: string
    ): Promise<BigNumber>;

    addDIDProvider(_did: Arrayish, _provider: string): Promise<BigNumber>;

    removeDIDProvider(_did: Arrayish, _provider: string): Promise<BigNumber>;

    isDIDProvider(_did: Arrayish, _provider: string): Promise<BigNumber>;

    getDIDRegister(_did: Arrayish): Promise<BigNumber>;

    getBlockNumberUpdated(_did: Arrayish): Promise<BigNumber>;

    getDIDOwner(_did: Arrayish): Promise<BigNumber>;

    getDIDRegistrySize(): Promise<BigNumber>;

    getDIDRegisterIds(): Promise<BigNumber>;

    transferDIDOwnership(_did: Arrayish, _newOwner: string): Promise<BigNumber>;
  };
}
