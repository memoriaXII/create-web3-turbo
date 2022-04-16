require('dotenv')
require('@nomiclabs/hardhat-waffle')
require('@typechain/hardhat')
require('@nomiclabs/hardhat-web3')
require('solidity-coverage')

const INFURA_API_KEY = ''
const RINKEBY_PRIVATE_KEY = ''
const BSC_TESTNET_PRIVATE_KEY = ''

const { MAINNET_URL, RINKEBY_URL, ROPSTEN_URL, PRIVATE_KEY, REPORT_GAS, ETHERSCAN_API_KEY, CMC_API_KEY } = process.env

module.exports = {
  defaultNetwork: 'hardhat',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: {
        count: 1000,
      },
      mining: {
        auto: true,
        interval: [13 * 1000, 15 * 1000],
      },
    },
  },
  solidity: '0.8.3',
  gasReporter: {
    enabled: REPORT_GAS !== undefined,
    gasPrice: 100,
    showTimeSpent: true,
    currency: 'USD',
    // noColors: !!REPORT_GAS_FILE,
    // outputFile: !!REPORT_GAS_FILE ? 'gas-report.md' : 'stdout',
    coinmarketcap: CMC_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
}
