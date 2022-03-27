import { ActionType } from './types'
import { Action } from './action'

const initialState = {
  batchTransactionList: [],
  previousChainId: 0,
  previousAddress: '',
}

interface batchTransactionState {
  batchTransactionList: string[]
  previousChainId: number
  previousAddress: string
}

export default function getBatchTransactions(
  state: batchTransactionState = initialState,
  action: Action
): batchTransactionState {
  switch (action.type) {
    case ActionType.BATCH_TRANSACTIONS: {
      let batchTransactionList = [...action.payload]

      batchTransactionList &&
        batchTransactionList.sort((a: any, b: any) => {
          return b.index - a.index
        })

      return {
        ...state,
        batchTransactionList,
      }
    }
    case ActionType.ADD_BATCH_TRANSACTION: {
      let batchTransactionList: any = [...state.batchTransactionList]
      if (batchTransactionList.length > 100) {
        batchTransactionList.pop()
      }
      action.payload && batchTransactionList.unshift(action.payload)

      return {
        ...state,
        batchTransactionList: batchTransactionList,
      }
    }

    default:
      return state
  }
}
