import { MutationObserverOptions, useMutation } from '@tanstack/react-query';
import { Toast } from 'components/ui';
import { ApproveTokenInput, ApproveTokenOutput, approveToken } from 'query/api';
import { useTokenContract } from 'query/contracts/hooks';
import { toast } from 'react-hot-toast';
import { Token } from 'types';


const useApproveToken = (
  { token }: { token: Token },
  options?: MutationObserverOptions<
    ApproveTokenOutput,
    Error,
    Omit<ApproveTokenInput, 'tokenContract'>
  >
) => {
  const tokenContract = useTokenContract(token);

  return useMutation({
    mutationFn: (params) =>
      approveToken({
        tokenContract,
        ...params,
      }),
    ...options,
    onSuccess: (...onSuccessParams) => {
      toast.custom((t) => (
        <Toast
          toastProps={t}
          title='Token approved successfully'
          description='Your token has been approved'
        />
      ));
      if (options?.onSuccess) {
        options.onSuccess(...onSuccessParams);
      }
    },
    onError: (...onErrorParams) => {
      // const reason = onErrorParams[0].reason || '';
      toast.custom((t) => (
        <Toast
          type='error'
          toastProps={t}
          title='Token approval failed'
          description='Failed to approve token, please try again'
        />
      ));
    },
  });
};

export default useApproveToken;