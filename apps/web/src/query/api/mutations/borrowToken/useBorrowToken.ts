import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import useConnection from 'hooks/auth/useConnection';
import { BorrowVTokenInput, BorrowVTokenOutput, borrowVToken } from 'query/api';
import { useVTokenContract } from 'query/contracts/hooks';
import getQueryClient from 'utils/getQueryClient';


type Options = MutationObserverOptions<
  BorrowVTokenOutput,
  Error,
  Omit<BorrowVTokenInput, 'vTokenContract'>
>;

const useBorrowToken = (
  { vTokenId }: { vTokenId?: string },
  options?: Options
) => {
  const queryClient = getQueryClient();
  const vTokenContract = useVTokenContract(vTokenId || '');
  const { address } = useConnection();

  return useMutation({
    mutationFn: (params) =>
      borrowVToken({
        vTokenContract,
        ...params,
      }),
    ...options,
    onSuccess: (...onSuccessParams) => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_V_TOKEN_BALANCES_ALL],
      });
      queryClient.invalidateQueries({
        queryKey: [
          FunctionKey.GET_V_TOKEN_BALANCE,
          {
            accountAddress: address,
            vTokenId,
          },
        ],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ASSETS_IN_ACCOUNT],
      });
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_MARKETS],
      });
      queryClient.invalidateQueries({
        queryKey: [
          FunctionKey.GET_V_TOKEN_BORROW_BALANCE,
          {
            accountAddress: address,
            vTokenId,
          },
        ],
      });

      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useBorrowToken;