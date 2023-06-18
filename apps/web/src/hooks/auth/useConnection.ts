'use client';

import { LoginTypeEnum, SUPPORTED_CHAINS } from 'config/chain';
import { Signer } from 'ethers';
import { useMemo } from 'react';
import { getLoginType } from 'utils/storage';
import { Address, useAccount, useNetwork, useProvider, useSigner } from 'wagmi';

const useConnection = () => {
  const { chain } = useNetwork();
  const {
    address,
    isConnected,
    connector: activeConnector,
    isConnecting,
  } = useAccount();
  const wagmiProvider = useProvider();
  const { data: wagmiSigner } = useSigner();

  return useMemo(() => {
    const chainId = chain?.id;
    return {
      isConnecting,
      isConnected,
      activeConnector,
      isWeb3AuthLogin: getLoginType() === LoginTypeEnum.Web3Auth,
      address: address as string,
      chain: SUPPORTED_CHAINS.find((c) => c.id === chainId),
      signer: (isConnected ? wagmiSigner : wagmiProvider) as Signer,
      provider: wagmiProvider,
    };
  }, [
    isConnecting,
    isConnected,
    activeConnector,
    chain,
    address,
    wagmiSigner,
    wagmiProvider,
  ]);
};

export default useConnection;