import Image from 'next/image';
import { cn } from 'utils/formatter';
import * as wagmiChains from 'wagmi/chains';


export enum LoginTypeEnum {
  Web3Auth = 'web3auth',
  Metamask = 'metaMask',
  Coinbase = 'coinbaseWallet',
  WalletConnect = 'walletConnect',
  WalletConnectLegacy = 'walletConnectLegacy',
  Ledger = 'ledger',
  Safe = 'safe',
}

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
  POLYGON_MUMBAI = 80001,
}

export const DEFAULT_CHAIN_RPC_LINK: { [key: number]: string } = {
  [SupportedChainId.MAINNET]: 'https://rpc.ankr.com/eth',
  [SupportedChainId.GOERLI]: 'https://rpc.ankr.com/eth_goerli',
  [SupportedChainId.POLYGON]: 'https://polygon-rpc.com',
  [SupportedChainId.POLYGON_MUMBAI]:
    'https://rpc-endpoints.superfluid.dev/mumbai',
};

export const SUPPORTED_CHAINS = [wagmiChains.mainnet, wagmiChains.goerli];

export const getWalletIcon = (id: string, className?: string) => {
  const mergedClassName = cn('h-7 w-7 mobile:h-6 mobile:w-6', className);
  switch (id) {
    case LoginTypeEnum.Metamask:
      return (
        <Image
          priority
          src='/./svgs/wallets/metamask.svg'
          width={60}
          height={60}
          alt='usdc'
        />
      );
    case LoginTypeEnum.WalletConnect:
      return (
        <Image
          priority
          src='/./svgs/wallets/wallet_connect.svg'
          width={60}
          height={60}
          alt='usdc'
        />
      );
    case LoginTypeEnum.WalletConnectLegacy:
      return (
        <Image
          priority
          src='/./svgs/wallets/wallet_connect.svg'
          width={60}
          height={60}
          alt='usdc'
        />
      );
    case LoginTypeEnum.Coinbase:
      return (
        <Image
          priority
          src='/./svgs/wallets/coinbase.svg'
          width={60}
          height={60}
          alt='usdc'
        />
      );
    case LoginTypeEnum.Safe:
      return (
        <Image
          priority
          src='/./svgs/wallets/safe.svg'
          width={60}
          height={60}
          alt='usdc'
        />
      );
    case LoginTypeEnum.Ledger:
      return (
        <svg
          width='48'
          height='48'
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={mergedClassName}
        >
          <path
            d='M35.6248 7H19.9365V27.9862H40.9914V12.4602C41 9.51219 38.5825 7 35.6248 7ZM15.1185 7H12.4866C9.529 7 7 9.40111 7 12.4687V15.092H15.1185V7ZM7 20.0053H15.1185V28.0973H7V20.0053ZM32.8815 40.9915H35.5134C38.471 40.9915 41 38.5903 41 35.5227V32.908H32.8815V40.9915ZM19.9365 32.908H28.055V41H19.9365V32.908ZM7 32.908V35.5313C7 38.4793 9.40898 41 12.4866 41H15.1185V32.908H7Z'
            fill='#9597A2'
          ></path>
        </svg>
      );
    default:
      break;
  }
};

export const getWalletName = (id: string) => {
  switch (id) {
    case LoginTypeEnum.Metamask:
      return 'MetaMask';
    case LoginTypeEnum.WalletConnect:
      return 'WalletConnect';
    case LoginTypeEnum.WalletConnectLegacy:
      return 'WalletConnect';
    case LoginTypeEnum.Coinbase:
      return 'Coinbase Wallet';
    case LoginTypeEnum.Safe:
      return 'Gnosis Safe';
    case LoginTypeEnum.Ledger:
      return 'Ledger';
    default:
      break;
  }
};