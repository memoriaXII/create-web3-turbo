import { combineReducers } from 'redux'
import getTransactions from 'reducers/transaction'
import getBatchTransactions from 'reducers/batchTransaction'
import isAuthenticated from 'reducers/auth'
import openConnectWalletModal from 'reducers/walletConnect'
export const rootReducer = combineReducers<any>({
  auth: isAuthenticated,
  transactions: getTransactions,
  batchTransactions: getBatchTransactions,
  connectWalletModal: openConnectWalletModal,
})
export type RootState = ReturnType<typeof rootReducer>
