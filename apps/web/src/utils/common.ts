import { Contract, PayableOverrides } from "@ethersproject/contracts";
import { TransactionResponse } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import {
  ContractMethodName,
  MaybeContract,
  ContractMethodParams,
} from "types/utils";

export function calculateGasMargin(value: BigNumber, margin = 1000): BigNumber {
  return value
    .mul(BigNumber.from(10000).add(BigNumber.from(margin)))
    .div(BigNumber.from(10000));
}

export const estimateGas = async <
  C extends Contract = Contract,
  N extends ContractMethodName<C> = any
>(
  contract: MaybeContract<C>,
  methodName: N,
  methodArgs: ContractMethodParams<C, N>,
  overrides: PayableOverrides = {},
  gasMarginPer10000: number
) => {
  if (!contract[methodName]) {
    throw new Error(
      `Method ${methodName} doesn't exist on ${contract.address}`
    );
  }
  const rawGasEstimation = await contract.estimateGas[methodName](
    ...methodArgs,
    overrides
  );
  // By convention, BigNumber values are multiplied by 1000 to avoid dealing with real numbers
  const gasEstimation = calculateGasMargin(rawGasEstimation, gasMarginPer10000);
  return gasEstimation;
};

export const callWithEstimateGas = async <
  C extends Contract = Contract,
  N extends ContractMethodName<C> = any
>(
  contract: MaybeContract<C>,
  methodName: N,
  methodArgs: ContractMethodParams<C, N>,
  overrides: PayableOverrides = {},
  gasMarginPer10000 = 1000
): Promise<TransactionResponse> => {
  const gasEstimation = await estimateGas(
    contract,
    methodName,
    methodArgs,
    overrides,
    gasMarginPer10000
  );
  const tx = await contract[methodName](...methodArgs, {
    gasLimit: gasEstimation,
    ...overrides,
  });
  return tx;
};
