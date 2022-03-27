import { ActionType } from './types'
import { Action } from './action'

const initialState = {
  transactionList: [],
  previousChainId: 0,
  previousAddress: '',
}

interface transactionState {
  transactionList: string[]
  previousChainId: number
  previousAddress: string
}

export default function getTransactions(state: transactionState = initialState, action: Action): transactionState {
  switch (action.type) {
    case ActionType.TRANSACTIONS: {
      let transactionList = [...action.payload]

      transactionList &&
        transactionList.sort((a: any, b: any) => {
          return b.index - a.index
        })

      return {
        ...state,
        transactionList,
      }
    }
    case ActionType.ADD_TRANSACTION: {
      let transactionList: any = [...state.transactionList]
      if (transactionList.length > 100) {
        transactionList.pop()
      }
      action.payload && transactionList.unshift(action.payload)

      return {
        ...state,
        transactionList: transactionList,
      }
    }

    default:
      return state
  }
}
