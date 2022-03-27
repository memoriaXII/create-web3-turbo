const Web3 = require('web3')
const MyContract = require('../../src/constants/abis/Transaction.json')
const ethers = require('ethers')
const bodyParser = require('body-parser')
const contract_address = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
const port = process.env.PORT || 8800

let lastEventItem = {}
let allEventItems = []
let blockNumber = null

const web3Init = async (req, res) => {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    const contract = new web3.eth.Contract(MyContract.abi, contract_address)
    const receipts = contract.methods.getAllTransactions()
    const result = await contract.getPastEvents('Transfer', { fromBlock: 0 })
    allEventItems = result
    // lastEventItem = result.pop()
    contract.events.Transfer({}).on('data', (event) => console.log(event, 'event'))

    //ether.js method
    var url = 'http://localhost:8545'
    var provider = new ethers.providers.JsonRpcProvider(url)
    const etherContract = new ethers.Contract(contract_address, MyContract.abi, provider)

    // provider.getBlockNumber().then((blockAmount) => {
    //   console.log('Current block number: ' + blockAmount)
    //   blockNumber = blockAmount
    // })
    etherContract.on('Transfer', (sender, receiver, amount, message, timestamp) => {
      //websocket-event-listener
      console.log(sender, receiver, amount, message, timestamp, 'to, amount, from')
      lastEventItem = { sender, receiver, amount, message, timestamp }
    })

    etherContract.on('MultiTransfer', (receiverArray, sentAmounts) => {
      console.log(receiverArray, sentAmounts, 'receiverArray', 'sentAmounts')
    })

    return { blockNumber, lastEventItem, allEventItems }
  } catch (err) {
    console.log(err, 'err')
  }
}

web3Init()

exports.lastEvent = async (req, res) => {
  try {
    return res.status(200).json({ lastEventItem })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error!' })
  }
}

exports.allEvent = async (req, res) => {
  try {
    return res.status(200).json({ allEventItems })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error!' })
  }
}

exports.blockEvent = async (req, res) => {
  try {
    return res.status(200).json({ blockNumber })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error!' })
  }
}
