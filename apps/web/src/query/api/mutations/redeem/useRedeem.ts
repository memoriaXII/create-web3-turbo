import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import redeem, { RedeemInput, RedeemOutput } from 'query/api/mutations/redeem';
import { useVTokenContract } from 'query/contracts/hooks';
import getQueryClient from 'utils/getQueryClient';


const useRedeem = (
  { vTokenId, accountAddress }: { vTokenId: string; accountAddress: string },
  options?: MutationObserverOptions<
    RedeemOutput,
    Error,
    Omit<RedeemInput, 'tokenContract' | 'accountAddress'>
  >
) => {
  const tokenContract = useVTokenContract(vTokenId);
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (params) =>
      redeem({
        tokenContract: tokenContract,
        accountAddress,
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
            accountAddress,
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
      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useRedeem;