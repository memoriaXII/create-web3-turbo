import { GAS_PRICE_GWEI } from "../enum";
import { AddressZero } from "@ethersproject/constants";

export const config = {
  chainName: "Binance Smart Chain Testnet",
  chainId: "0x61",
  rpcUrls: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    // 'https://data-seed-prebsc-1-s3.binance.org:8545',
    // 'https://data-seed-prebsc-2-s1.binance.org:8545',
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    // 'https://data-seed-prebsc-2-s3.binance.org:8545'
  ],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  blockExplorerUrls: ["https://testnet.bscscan.com"],
};

export const TOKEN_ADDRESS: any = {
  USD: "",
  BNB: AddressZero,
  ETH: "0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378",
  WBNB: "0x97c012Ef10eDc79510A17272CEE3ecBE1443177F",
  BUSD: "0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",
  DOR: "0x8d58514eaa7dfd24b400633d11d6bdcbc36e02be",
  GOLD: "0x9920757f0f9e71f283dba914360fd8db4ca201a2",
};

export const testnet = {
  config,
  TOKEN_ADDRESS,
  gasPrice: GAS_PRICE_GWEI.testnet,
};
