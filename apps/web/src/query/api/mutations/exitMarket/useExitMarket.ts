import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import FunctionKey from 'constants/functionKey';
import { ExitMarketInput, ExitMarketOutput, exitMarket } from 'query/api';
import { useComptrollerContract } from 'query/contracts/hooks';
import getQueryClient from 'utils/getQueryClient';

const useExitMarket = (
  options?: MutationObserverOptions<
    ExitMarketOutput,
    Error,
    Omit<ExitMarketInput, 'comptrollerContract'>
  >
) => {
  const queryClient = getQueryClient();
  const comptrollerContract = useComptrollerContract();

  return useMutation({
    mutationFn: (params: Omit<ExitMarketInput, 'comptrollerContract'>) =>
      exitMarket({
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

export default useExitMarket;
