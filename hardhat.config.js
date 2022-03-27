require('@nomiclabs/hardhat-waffle')
require('@typechain/hardhat')
require('@nomiclabs/hardhat-web3')
require('solidity-coverage')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()
  for (const account of accounts) {
    console.log(account.address)
  }
})

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account)
    const balance = await web3.eth.getBalance(account)

    console.log(web3.utils.fromWei(balance, 'ether'), 'ETH')
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_API_KEY = ''
const RINKEBY_PRIVATE_KEY = ''
const BSC_TESTNET_PRIVATE_KEY = ''

module.exports = {
  defaultNetwork: 'hardhat',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [`${RINKEBY_PRIVATE_KEY}`],
    // },
    // testnet: {
    //   url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: [`${BSC_TESTNET_PRIVATE_KEY}`],
    // },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/projectid",
    //   accounts: [process.env.a2key]
    // },
  },
  solidity: '0.8.3',
}
