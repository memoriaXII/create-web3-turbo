/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Transactions {
  export type TransferStructStruct = {
    sender: string;
    receiver: string;
    amount: BigNumberish;
    message: string;
    timestamp: BigNumberish;
  };

  export type TransferStructStructOutput = [
    string,
    string,
    BigNumber,
    string,
    BigNumber
  ] & {
    sender: string;
    receiver: string;
    amount: BigNumber;
    message: string;
    timestamp: BigNumber;
  };

  export type MultiTransferStructStruct = {
    sender: string;
    receiverArray: string[];
    sentAmountArray: BigNumberish[];
    timestamp: BigNumberish;
  };

  export type MultiTransferStructStructOutput = [
    string,
    string[],
    BigNumber[],
    BigNumber
  ] & {
    sender: string;
    receiverArray: string[];
    sentAmountArray: BigNumber[];
    timestamp: BigNumber;
  };
}

export interface TransactionsInterface extends utils.Interface {
  contractName: "Transactions";
  functions: {
    "getAllTransactions()": FunctionFragment;
    "getMultiCallTransactions()": FunctionFragment;
    "getTransactionCount()": FunctionFragment;
    "multiTransactionCall(address[],uint256[])": FunctionFragment;
    "singleTransactionCall(address,uint256,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAllTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiCallTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multiTransactionCall",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "singleTransactionCall",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiCallTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiTransactionCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "singleTransactionCall",
    data: BytesLike
  ): Result;

  events: {
    "MultiTransfer(address[],uint256[])": EventFragment;
    "Transfer(address,address,uint256,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MultiTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type MultiTransferEvent = TypedEvent<
  [string[], BigNumber[]],
  { _receivers: string[]; _sentAmounts: BigNumber[] }
>;

export type MultiTransferEventFilter = TypedEventFilter<MultiTransferEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  {
    from: string;
    receiver: string;
    amount: BigNumber;
    message: string;
    timestamp: BigNumber;
  }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface Transactions extends BaseContract {
  contractName: "Transactions";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransactionsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAllTransactions(
      overrides?: CallOverrides
    ): Promise<[Transactions.TransferStructStructOutput[]]>;

    getMultiCallTransactions(
      overrides?: CallOverrides
    ): Promise<[Transactions.MultiTransferStructStructOutput[]]>;

    getTransactionCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    multiTransactionCall(
      _receivers: string[],
      _sentAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    singleTransactionCall(
      receiver: string,
      amount: BigNumberish,
      message: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAllTransactions(
    overrides?: CallOverrides
  ): Promise<Transactions.TransferStructStructOutput[]>;

  getMultiCallTransactions(
    overrides?: CallOverrides
  ): Promise<Transactions.MultiTransferStructStructOutput[]>;

  getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

  multiTransactionCall(
    _receivers: string[],
    _sentAmounts: BigNumberish[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  singleTransactionCall(
    receiver: string,
    amount: BigNumberish,
    message: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllTransactions(
      overrides?: CallOverrides
    ): Promise<Transactions.TransferStructStructOutput[]>;

    getMultiCallTransactions(
      overrides?: CallOverrides
    ): Promise<Transactions.MultiTransferStructStructOutput[]>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    multiTransactionCall(
      _receivers: string[],
      _sentAmounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    singleTransactionCall(
      receiver: string,
      amount: BigNumberish,
      message: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MultiTransfer(address[],uint256[])"(
      _receivers?: null,
      _sentAmounts?: null
    ): MultiTransferEventFilter;
    MultiTransfer(
      _receivers?: null,
      _sentAmounts?: null
    ): MultiTransferEventFilter;

    "Transfer(address,address,uint256,string,uint256)"(
      from?: null,
      receiver?: null,
      amount?: null,
      message?: null,
      timestamp?: null
    ): TransferEventFilter;
    Transfer(
      from?: null,
      receiver?: null,
      amount?: null,
      message?: null,
      timestamp?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    getAllTransactions(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiCallTransactions(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionCount(overrides?: CallOverrides): Promise<BigNumber>;

    multiTransactionCall(
      _receivers: string[],
      _sentAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    singleTransactionCall(
      receiver: string,
      amount: BigNumberish,
      message: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllTransactions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMultiCallTransactions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiTransactionCall(
      _receivers: string[],
      _sentAmounts: BigNumberish[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    singleTransactionCall(
      receiver: string,
      amount: BigNumberish,
      message: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
