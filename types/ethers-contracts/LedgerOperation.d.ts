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

interface LedgerOperationInterface extends Interface {
  functions: {};

  events: {
    ClearOnePay: TypedEventDescription<{
      encodeTopics([channelId, payId, peerFrom, amount]: [
        Arrayish | null,
        Arrayish | null,
        string | null,
        null
      ]): string[];
    }>;

    ConfirmSettle: TypedEventDescription<{
      encodeTopics([channelId, settleBalance]: [
        Arrayish | null,
        null
      ]): string[];
    }>;

    ConfirmSettleFail: TypedEventDescription<{
      encodeTopics([channelId]: [Arrayish | null]): string[];
    }>;

    ConfirmWithdraw: TypedEventDescription<{
      encodeTopics([
        channelId,
        withdrawnAmount,
        receiver,
        recipientChannelId,
        deposits,
        withdrawals
      ]: [
        Arrayish | null,
        null,
        string | null,
        Arrayish | null,
        null,
        null
      ]): string[];
    }>;

    CooperativeSettle: TypedEventDescription<{
      encodeTopics([channelId, settleBalance]: [
        Arrayish | null,
        null
      ]): string[];
    }>;

    CooperativeWithdraw: TypedEventDescription<{
      encodeTopics([
        channelId,
        withdrawnAmount,
        receiver,
        recipientChannelId,
        deposits,
        withdrawals,
        seqNum
      ]: [
        Arrayish | null,
        null,
        string | null,
        Arrayish | null,
        null,
        null,
        null
      ]): string[];
    }>;

    Deposit: TypedEventDescription<{
      encodeTopics([channelId, peerAddrs, deposits, withdrawals]: [
        Arrayish | null,
        null,
        null,
        null
      ]): string[];
    }>;

    IntendSettle: TypedEventDescription<{
      encodeTopics([channelId, seqNums]: [Arrayish | null, null]): string[];
    }>;

    IntendWithdraw: TypedEventDescription<{
      encodeTopics([channelId, receiver, amount]: [
        Arrayish | null,
        string | null,
        null
      ]): string[];
    }>;

    OpenChannel: TypedEventDescription<{
      encodeTopics([
        channelId,
        tokenType,
        tokenAddress,
        peerAddrs,
        initialDeposits
      ]: [Arrayish | null, null, string | null, null, null]): string[];
    }>;

    SnapshotStates: TypedEventDescription<{
      encodeTopics([channelId, seqNums]: [Arrayish | null, null]): string[];
    }>;

    VetoWithdraw: TypedEventDescription<{
      encodeTopics([channelId]: [Arrayish | null]): string[];
    }>;
  };
}

export class LedgerOperation extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LedgerOperation;
  attach(addressOrName: string): LedgerOperation;
  deployed(): Promise<LedgerOperation>;

  on(event: EventFilter | string, listener: Listener): LedgerOperation;
  once(event: EventFilter | string, listener: Listener): LedgerOperation;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): LedgerOperation;
  removeAllListeners(eventName: EventFilter | string): LedgerOperation;
  removeListener(eventName: any, listener: Listener): LedgerOperation;

  interface: LedgerOperationInterface;

  functions: {};

  filters: {
    ClearOnePay(
      channelId: Arrayish | null,
      payId: Arrayish | null,
      peerFrom: string | null,
      amount: null
    ): EventFilter;

    ConfirmSettle(channelId: Arrayish | null, settleBalance: null): EventFilter;

    ConfirmSettleFail(channelId: Arrayish | null): EventFilter;

    ConfirmWithdraw(
      channelId: Arrayish | null,
      withdrawnAmount: null,
      receiver: string | null,
      recipientChannelId: Arrayish | null,
      deposits: null,
      withdrawals: null
    ): EventFilter;

    CooperativeSettle(
      channelId: Arrayish | null,
      settleBalance: null
    ): EventFilter;

    CooperativeWithdraw(
      channelId: Arrayish | null,
      withdrawnAmount: null,
      receiver: string | null,
      recipientChannelId: Arrayish | null,
      deposits: null,
      withdrawals: null,
      seqNum: null
    ): EventFilter;

    Deposit(
      channelId: Arrayish | null,
      peerAddrs: null,
      deposits: null,
      withdrawals: null
    ): EventFilter;

    IntendSettle(channelId: Arrayish | null, seqNums: null): EventFilter;

    IntendWithdraw(
      channelId: Arrayish | null,
      receiver: string | null,
      amount: null
    ): EventFilter;

    OpenChannel(
      channelId: Arrayish | null,
      tokenType: null,
      tokenAddress: string | null,
      peerAddrs: null,
      initialDeposits: null
    ): EventFilter;

    SnapshotStates(channelId: Arrayish | null, seqNums: null): EventFilter;

    VetoWithdraw(channelId: Arrayish | null): EventFilter;
  };

  estimate: {};
}