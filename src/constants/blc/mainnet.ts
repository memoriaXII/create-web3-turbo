export const config = {
  chainName: 'Binance Smart Chain Mainnet',
  chainId: '0x38',
  rpcUrls: [
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org',
    'https://bsc-dataseed4.binance.org',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed4.defibit.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.ninicoin.io',
    'https://bsc-dataseed3.ninicoin.io',
    'https://bsc-dataseed4.ninicoin.io',
    'wss://bsc-ws-node.nariox.org'
  ],
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18
  },
  blockExplorerUrls: ['https://bscscan.com']
}

const TOKEN_ADDRESS: any = {
  USD: '',
  BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  BNB: '0x0000000000000000000000000000000000000000',
  WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  ETH: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  DOR: '0xeba8850e542153fb9aeaa7351b6b346a9bb97ab9'
}

export const mainnet = {
  config,
  TOKEN_ADDRESS
}
