import repay from '.';
import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import useConnection from 'hooks/auth/useConnection';
import { RepayInput } from 'query/api';
import { useVTokenContract } from 'query/contracts/hooks';
import { TransactionReceipt } from 'types/common';
import getQueryClient from 'utils/getQueryClient';

type Options = MutationObserverOptions<
  TransactionReceipt,
  Error,
  Omit<RepayInput, 'vTokenContract'>
>;

const useRepay = (
  { vTokenId }: { vTokenId: Exclude<string, 'bnb'> },
  options?: Options
) => {
  const vTokenContract = useVTokenContract(vTokenId);
  const queryClient = getQueryClient();
  const { address } = useConnection();

  return useMutation({
    mutationFn: (params) =>
      repay({
        vTokenContract,
        ...params,
      }),
    ...options,
    onSuccess: (...onSuccessParams) => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_V_TOKEN_BALANCES_ALL],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ASSETS_IN_ACCOUNT],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_MARKETS],
      });
      queryClient.invalidateQueries([
        FunctionKey.GET_V_TOKEN_BORROW_BALANCE,
        { accountAddress: address, vTokenId },
      ]);
      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useRepay;