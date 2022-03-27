import COINBASE_ICON_URL from 'assets/svgs/coinbase.svg'
import METAMASK_ICON_URL from 'assets/imgs/metamask.png'
import WALLETCONNECT_ICON_URL from 'assets/imgs/wallet-connect.png'
import { injected, walletlink, walletconnect } from '../connectors'
import { AbstractConnector } from '@web3-react/abstract-connector'

interface WalletInfo {
  connector?: AbstractConnector
  name: string
  icon: string
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    icon: METAMASK_ICON_URL,
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    icon: COINBASE_ICON_URL,
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'Wallet Connect',
    icon: WALLETCONNECT_ICON_URL,
    mobile: true,
  },
}

export const mainnetConfig = {
  chainName: 'Localhost 8545',
  chainId: '1337',
  rpcUrls: [
    'http://localhost:8545',
    // 'https://bsc-dataseed2.binance.org',
    // 'https://bsc-dataseed3.binance.org',
    // 'https://bsc-dataseed4.binance.org',
    // 'https://bsc-dataseed1.defibit.io',
    // 'https://bsc-dataseed2.defibit.io',
    // 'https://bsc-dataseed3.defibit.io',
    // 'https://bsc-dataseed4.defibit.io',
    // 'https://bsc-dataseed1.ninicoin.io',
    // 'https://bsc-dataseed2.ninicoin.io',
    // 'https://bsc-dataseed3.ninicoin.io',
    // 'https://bsc-dataseed4.ninicoin.io',
    // 'wss://bsc-ws-node.nariox.org',
  ],
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://bscscan.com'],
}

export const testnetConfig = {
  chainName: 'Binance Smart Chain Testnet',
  chainId: '0x61',
  rpcUrls: [
    // 'https://data-seed-prebsc-1-s1.binance.org:8545',
    // 'https://data-seed-prebsc-2-s1.binance.org:8545',
    'https://data-seed-prebsc-1-s2.binance.org:8545',
    'https://data-seed-prebsc-2-s2.binance.org:8545',
    'https://data-seed-prebsc-1-s3.binance.org:8545',
    'https://data-seed-prebsc-2-s3.binance.org:8545',
  ],
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  blockExplorerUrls: ['https://testnet.bscscan.com'],
}
