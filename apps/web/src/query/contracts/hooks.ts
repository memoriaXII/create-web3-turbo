import useConnection from 'hooks/auth/useConnection';

export const useTokenContract = (token: any) => {
  const { signer } = useConnection();
  return useMemo(() => getTokenContract(token, signer), [signer, token]);
};
