'use client';

import { SUPPORTED_CHAINS } from 'config/chain';
import { PLATFORM } from 'config/setting';
import useConfig from 'hooks/config/useConfig';
import { useMemo } from 'react';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { SafeConnector } from 'wagmi/connectors/safe';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';


type TProps = {
  children: React.ReactNode;
};

export interface INetwork {
  chainId: number;
  name: string;
  explorerUrl: string;
}

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID || '';
const infuraId = process.env.NEXT_PUBLIC_INFURA_ID || '';

const WagmiProvider: React.FC<TProps> = ({ children }) => {
  const { supportedNetworks } = useConfig();
  const supportedChainIds = supportedNetworks?.map((i: INetwork) => i.chainId);
  const appChains = SUPPORTED_CHAINS.filter((chain) =>
    supportedChainIds.includes(chain.id)
  );
  const { chains, provider, webSocketProvider } = configureChains(appChains, [
    alchemyProvider({ apiKey: alchemyId }),
    infuraProvider({ apiKey: infuraId }),
    publicProvider(),
  ]);

  const connectors = useMemo(() => {
    return [
      new MetaMaskConnector({
        chains,
        options: {
          shimDisconnect: true,
          UNSTABLE_shimOnConnectSelectAccount: true,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,
          showQrModal: true,
        },
      }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: PLATFORM.APP_NAME,
        },
      }),
      new SafeConnector({
        chains,
        options: {
          allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
          debug: false,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ];
  }, [chains]);

  const client = useMemo(() => {
    return createClient({
      autoConnect: true,
      connectors,
      provider,
      webSocketProvider,
    });
  }, [connectors, provider, webSocketProvider]);

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;