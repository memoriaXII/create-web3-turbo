import { SupportedChainId } from 'constants/chains'

type AddressMap = { [ChainId: string]: { transaction: string } }

export const NETWORK_LABEL = {
  [SupportedChainId.MAINNET]: 'Ethereum',
  [SupportedChainId.RINKEBY]: 'Rinkeby',
  [SupportedChainId.ROPSTEN]: 'Ropsten',
  [SupportedChainId.KOVAN]: 'Kovan',
  [SupportedChainId.BSC]: 'BSC',
  [SupportedChainId.BSC_TESTNET]: 'BSC Testnet',
}

export const Contracts: AddressMap = {
  1337: {
    transaction: '0x3Aa5ebB10DC797CAC828524e59A333d0A371443c',
  },
  [SupportedChainId.BSC_TESTNET]: {
    transaction: '0x01803Ef6Ab4762515972adca1c0D9Bc5D231223D',
  },
}
