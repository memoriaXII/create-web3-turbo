import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { Toast } from 'components/ui';
import FunctionKey from 'constants/functionKey';
import { ContractReceipt, Signer } from 'ethers';
import useConnection from 'hooks/auth/useConnection';
import supply from 'query/api/mutations/supply';
import toast from 'react-hot-toast';
import { Asset } from 'types';
import { VToken } from 'types/token';
import getQueryClient from 'utils/getQueryClient';

export type SupplyOutput = ContractReceipt;

export interface SupplyInput {
  vToken: VToken;
  amountWei: BigNumber;
  signer?: Signer;
}

type Options = MutationObserverOptions<
  SupplyOutput,
  Error,
  Omit<SupplyInput, 'vToken' | 'signer'>
>;

const useSupply = ({ asset }: { asset: Asset }, options?: Options) => {
  const { signer, address: accountAddress } = useConnection();
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: (params) =>
      supply({
        asset,
        signer,
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
            vTokenId: asset.token.id,
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
    onError: () => {
      toast.custom((t) => (
        <Toast
          type='error'
          toastProps={t}
          title='Supply token failed'
          description='Failed to supply token, please try again'
        />
      ));
    },
  });
};

export default useSupply;
