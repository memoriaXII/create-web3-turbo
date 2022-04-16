import { BSC, RPC_URL_TESTNET, RPC_URL_MAINNET } from './blockchain-network'
import { testnet } from './blc/testnet'
import { mainnet } from './blc/mainnet'

/**
 * List of all the networks supported by the Doragonland
 */

const { chainId, rpcUrls, blockExplorerUrls, chainName, nativeCurrency } = BSC.config

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

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.BSC]: 'binance_mainnet',
  [SupportedChainId.BSC_TESTNET]: 'binance_testnet',
  [SupportedChainId.MAINNET]: 'mainnet',
  [SupportedChainId.ROPSTEN]: 'ropsten',
  [SupportedChainId.RINKEBY]: 'rinkeby',
  [SupportedChainId.GOERLI]: 'goerli',
  [SupportedChainId.KOVAN]: 'kovan',
  [SupportedChainId.POLYGON]: 'polygon',
  [SupportedChainId.POLYGON_MUMBAI]: 'polygon_mumbai',
  [SupportedChainId.ARBITRUM_ONE]: 'arbitrum',
  [SupportedChainId.ARBITRUM_RINKEBY]: 'arbitrum_rinkeby',
  [SupportedChainId.OPTIMISM]: 'optimism',
  [SupportedChainId.OPTIMISTIC_KOVAN]: 'optimistic_kovan',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

/**
 * All the chain IDs that are running the BSC protocol.
 */

/**
 * This is used to call the add network RPC
 */
interface AddNetworkInfo {
  readonly rpcUrl: string
  readonly nativeCurrency: {
    name: string // e.g. 'Binance Smart Chain',
    symbol: string // e.g. 'BNB',
    decimals: number // e.g. 18,
  }
}

interface BaseChainInfo {
  readonly blockWaitMsBeforeWarning?: number
  readonly bridge?: string
  readonly explorer: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly addNetworkInfo: AddNetworkInfo
}

export type ChainInfoMap = {
  readonly [chainId in SupportedChainId]: BaseChainInfo
}
