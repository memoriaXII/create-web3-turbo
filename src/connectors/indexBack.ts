import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { ALL_SUPPORTED_CHAIN_IDS, NETWORK_URLS, ALL_NETWORK_URLS } from '../constants/chains'
import getLibrary from '../utils/getLibrary'
import { NetworkConnector } from './NetworkConnector'

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: ALL_SUPPORTED_CHAIN_IDS[0],
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({})

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: ALL_NETWORK_URLS,
  bridge: 'https://bridge.walletconnect.org',
  chainId: ALL_SUPPORTED_CHAIN_IDS[0],
  qrcodeModalOptions: {
    // desktopLinks: [],
    // mobileLinks: ['metamask', 'trust', 'safepal']
  },
  qrcode: true,
})
