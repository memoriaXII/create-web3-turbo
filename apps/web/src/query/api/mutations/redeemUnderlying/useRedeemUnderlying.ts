import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import redeemUnderlying, {
  RedeemUnderlyingInput,
  RedeemUnderlyingOutput,
} from 'query/api/mutations/redeemUnderlying';
import { useVTokenContract } from 'query/contracts/hooks';
import getQueryClient from 'utils/getQueryClient';

const useRedeemUnderlying = (
  { vTokenId, accountAddress }: { vTokenId: string; accountAddress: string },
  options?: MutationObserverOptions<
    RedeemUnderlyingOutput,
    Error,
    Omit<RedeemUnderlyingInput, 'vTokenContract' | 'accountAddress'>
  >
) => {
  const vTokenContract = useVTokenContract(vTokenId);
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (params) =>
      redeemUnderlying({
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

export default useRedeemUnderlying;
