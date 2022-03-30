import { ChainId } from '@sushiswap/sdk'

type AddressMap = { [ChainId: string]: { transaction: string } }

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
}

export const Contracts: AddressMap = {
  1337: {
    transaction: '0x3Aa5ebB10DC797CAC828524e59A333d0A371443c',
  },
  [ChainId.BSC_TESTNET]: {
    transaction: '0x01803Ef6Ab4762515972adca1c0D9Bc5D231223D',
  },
}
