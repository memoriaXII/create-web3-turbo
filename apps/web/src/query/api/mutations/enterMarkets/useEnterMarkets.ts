import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import {
  EnterMarketsInput,
  EnterMarketsOutput,
  enterMarkets,
  // queryClient,
} from 'query/api';
import { useComptrollerContract } from 'query/contracts/hooks';
import getQueryClient from 'utils/getQueryClient';

const useEnterMarkets = (
  options?: MutationObserverOptions<
    EnterMarketsOutput,
    // @TODO: use custom error type (see https://app.clickup.com/t/2rvwhnt)
    Error,
    Omit<EnterMarketsInput, 'comptrollerContract'>
  >
) => {
  const comptrollerContract = useComptrollerContract();
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (params: Omit<EnterMarketsInput, 'comptrollerContract'>) =>
      enterMarkets({
        comptrollerContract,
        ...params,
      }),
    ...options,
    onSuccess: (...onSuccessParams) => {
      queryClient.invalidateQueries({
        queryKey: [FunctionKey.GET_ASSETS_IN_ACCOUNT],
      });

      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
  });
};

export default useEnterMarkets;
