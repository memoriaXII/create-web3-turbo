/* eslint-disable react/react-in-jsx-scope */
import { ethers, providers } from 'ethers';
import {
  configureChains,
  createClient,
  WagmiConfig,
  defaultChains as WAGMI_SUPPORTED_CHAINS
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { getDefaultWallets } from '@rainbow-me/rainbowkit';

type TProps = {
  children: React.ReactNode;
};

export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  BSC_TESTNET = 97,
  BSC = 56,

  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,

  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001
}

export const DEFAULT_CHAIN_RPC_LINK: { [key: number]: string } = {
  [SupportedChainId.MAINNET]: 'https://rpc.ankr.com/eth',
  [SupportedChainId.GOERLI]: 'https://rpc.ankr.com/eth_goerli',
  [SupportedChainId.POLYGON]: 'https://polygon-rpc.com',
  [SupportedChainId.POLYGON_MUMBAI]: 'https://rpc-endpoints.superfluid.dev/mumbai',
  [SupportedChainId.BSC]: 'https://bsc-dataseed.binance.org/'
};

const WagmiProvider: React.FC<TProps> = ({ children }: any) => {
  const supportedChains = [...WAGMI_SUPPORTED_CHAINS];

  const { chains, provider } = configureChains(supportedChains, [publicProvider()]);

  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  const client = createClient({
    autoConnect: true,
    connectors,
    provider(config) {
      const { chainId } = config;
      if (
        chainId &&
        [
          SupportedChainId.BSC,
          SupportedChainId.BSC_TESTNET,
          SupportedChainId.GOERLI,
          SupportedChainId.MAINNET
        ].includes(chainId)
      ) {
        if (window.ethereum && window.ethereum.isMetaMask) {
          // @ts-ignore
          return new ethers.providers.Web3Provider(window.ethereum, chainId);
        }

        return new providers.JsonRpcProvider(DEFAULT_CHAIN_RPC_LINK[chainId], chainId);
      }

      return provider({ chainId });
    }
  });

  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
