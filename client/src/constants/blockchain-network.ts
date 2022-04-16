import { mainnet } from "./blc/mainnet";
import { testnet } from "./blc/testnet";
import { isProduction } from "../config";
import { sample } from "lodash";

export const RPC_URL_TESTNET = sample(
  testnet.config.rpcUrls.filter((o) => o.startsWith("https"))
) as string;

export const RPC_URL_MAINNET = sample(
  mainnet.config.rpcUrls.filter((o) => o.startsWith("https"))
) as string;

export const RPC_URL = isProduction ? RPC_URL_MAINNET : RPC_URL_TESTNET;

export const BSC = isProduction ? mainnet : testnet;

export const Pancakeswap = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
