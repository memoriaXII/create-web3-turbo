import { SupportedChainId } from 'constants/chains'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { ALL_SUPPORTED_CHAIN_IDS } from 'constants/chains'
import { INFURA_NETWORK_URLS } from 'constants/infura'
import { NetworkConnector } from './NetworkConnector'

import LogoUrl from 'assets/imgs/logo.png'

import { Web3Provider } from '@ethersproject/providers'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'

import getLibrary from '../utils/getLibrary'

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'

const RPC = isMainnet
  ? {
      1337: 'http://localhost:8545',
    }
  : {
      [SupportedChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    }

export const network = new NetworkConnector({
  urls: INFURA_NETWORK_URLS,
  defaultChainId: 1,
})

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        1337, // bsc
      ]
    : [
        97, // bsc testnet
      ],
})

export const walletlink = new WalletLinkConnector({
  url: 'https://bsc-dataseed.binance.org',
  appName: 'SKYARKS',
  appLogoUrl: LogoUrl,
})

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: INFURA_NETWORK_URLS,
  bridge: 'https://bridge.walletconnect.org',
  chainId: ALL_SUPPORTED_CHAIN_IDS[0],
  qrcodeModalOptions: {
    // desktopLinks: [],
    // mobileLinks: ['metamask', 'trust', 'safepal']
  },
  qrcode: true,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const gnosisSafe = new SafeAppConnector()
