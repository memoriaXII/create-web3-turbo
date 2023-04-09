import { ethers } from 'ethers';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { LedgerConnector } from 'wagmi/connectors/ledger';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { SafeConnector } from 'wagmi/connectors/safe';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

import { DEFAULT_CHAIN_RPC_LINK, SUPPORTED_CHAINS } from 'configs/chain';
import { PLATFORM } from 'configs/setting';
import { INetwork } from 'types/common';

type TProps = {
  children: React.ReactNode;
};

const WagmiProvider: React.FC<TProps> = ({ children }) => {
  // TODO: get supportedNetworks from config
  const supportedNetworks: INetwork[] = [
    {
      chainId: 1,
      name: 'Ethereum Mainnet',
      explorerUrl: 'https://etherscan.io'
    }
  ];
  const supportedChainIds = supportedNetworks?.map((i: INetwork) => i.chainId);
  const inAppChains = SUPPORTED_CHAINS.filter((chain) => supportedChainIds.includes(chain.id));
  const { chains, provider } = configureChains(inAppChains, [publicProvider()]);

  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: PLATFORM.APP_NAME
        }
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: '...'
        }
      }),
      new SafeConnector({
        chains,
        options: {
          allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
          debug: false
        }
      }),
      new LedgerConnector({
        chains
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true
        }
      })
    ],
    provider(config) {
      const { chainId } = config;

      if (chainId && SUPPORTED_CHAINS.find((c) => c.id === chainId)) {
        if (typeof window !== 'undefined' && window.ethereum && window.ethereum.isMetaMask) {
          return new ethers.providers.Web3Provider(window.ethereum, chainId);
        }

        return new ethers.providers.JsonRpcProvider(DEFAULT_CHAIN_RPC_LINK[chainId], chainId);
      }

      return provider(config);
    }
  });

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
