import { ChainId } from '@sushiswap/sdk'

import { ethers } from 'ethers'

import { Contracts } from 'constants/networks'
import useContract from 'hooks/useContract'
import { getHigherGWEI } from 'utils'

import { Transactions__factory } from 'typechain/factories/Transactions__factory'

import abi from '../../constants/abis/Transaction.json'

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'
const CHAIN = isMainnet ? 1337 : ChainId.BSC_TESTNET

export const useTransactionContract = () => {
  const { getContract } = useContract()

  //@ts-ignore
  const getTransactionContract = async () => {
    return await getContract(Contracts[CHAIN].transaction, abi, Transactions__factory)
  }

  const getUserAllTransactions = async () => {
    try {
      const contract = await getTransactionContract()
      return await contract.getAllTransactions()
    } catch (error) {
      console.log(error)
    }
  }

  const getUserMultiCallTransactions = async () => {
    try {
      const contract = await getTransactionContract()
      return await contract.getMultiCallTransactions()
    } catch (error) {
      console.log(error)
    }
  }

  const createBatchTransactions = async (_contributors: string[], _balances: any[], from: any) => {
    const parsedAmount = ethers.utils.parseEther((0.1).toString())
    const options = {
      value: parsedAmount._hex,
      gasPrice: await getHigherGWEI(),
    }
    try {
      const contract = await getTransactionContract()
      console.log(_contributors, _balances, '_contributors, _balances')

      const tx = await contract.multisendEther(_contributors, _balances)

      await tx.wait()
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()

      console.log(tx, 'tx')

      signer.sendTransaction({
        value: parsedAmount._hex,
        to: '0x6Bd340e4C86bEF448c9912eE9c0BA3DAF21ea8C3',
      })

      // return await contract.multisendEther(_contributors, _balances, options)
    } catch (error) {
      console.log(error)
    }
  }

  const createTransaction = async (receiver: string, amount: any, message: string, options: Object) => {
    try {
      const contract = await getTransactionContract()
      return await contract.singleTransactionCall(receiver, amount, message, options)
      // addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
    } catch (error) {
      console.log(error)
    }
  }

  return {
    createTransaction,
    getTransactionContract,
    getUserAllTransactions,
    createBatchTransactions,
    getUserMultiCallTransactions,
  }
}
