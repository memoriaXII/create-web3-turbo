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

  const getUserAllTransactions = async (): Promise<any> => {
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

  const createBatchTransactions = async (_contributors: string[], _balances: any[], options: Object) => {
    try {
      const contract = await getTransactionContract()

      return await contract.multiTransactionCall(_contributors, _balances, options)

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
