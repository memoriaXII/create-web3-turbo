import { BSC, RPC_URL_TESTNET, RPC_URL_MAINNET } from "./blockchain-network";
import { testnet } from "./blc/testnet";
import { mainnet } from "./blc/mainnet";

/**
 * List of all the networks supported by the Doragonland
 */

const { chainId, rpcUrls, blockExplorerUrls, chainName, nativeCurrency } =
  BSC.config;

export enum SupportedChainId {
  NETWORK = parseInt(chainId),
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

/**
 * All the chain IDs that are running the BSC protocol.
 */
export const CHAIN_IDS = [SupportedChainId.NETWORK] as const;

export const RPC_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.NETWORK]: rpcUrls,
};

export const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.NETWORK]: RPC_URLS[SupportedChainId.NETWORK][0],
};

export const ALL_NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [parseInt(testnet.config.chainId)]: RPC_URL_TESTNET,
  [parseInt(mainnet.config.chainId)]: RPC_URL_MAINNET,
};

/**
 * This is used to call the add network RPC
 */
interface AddNetworkInfo {
  readonly rpcUrl: string;
  readonly nativeCurrency: {
    name: string; // e.g. 'Binance Smart Chain',
    symbol: string; // e.g. 'BNB',
    decimals: number; // e.g. 18,
  };
}

interface BaseChainInfo {
  readonly blockWaitMsBeforeWarning?: number;
  readonly bridge?: string;
  readonly explorer: string;
  readonly label: string;
  readonly helpCenterUrl?: string;
  readonly addNetworkInfo: AddNetworkInfo;
}

export type ChainInfoMap = {
  readonly [chainId in SupportedChainId]: BaseChainInfo;
};

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.NETWORK]: {
    explorer: blockExplorerUrls[0],
    label: chainName,
    addNetworkInfo: {
      nativeCurrency: nativeCurrency,
      rpcUrl: NETWORK_URLS[SupportedChainId.NETWORK],
    },
  },
};
