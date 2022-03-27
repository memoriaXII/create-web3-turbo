import { AbstractConnector } from '@web3-react/abstract-connector'

import METAMASK_ICON_URL from '../static/images/metamask.png'
import WALLETCONNECT_ICON_URL from '../static/images/wallet-connect.png'
import { injected, walletconnect } from '../connectors/indexBack'

interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconURL: string
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'Metamask',
    iconURL: METAMASK_ICON_URL,
    mobile: true,
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'Wallet Connect',
    iconURL: WALLETCONNECT_ICON_URL,
    mobile: true,
  },
}
