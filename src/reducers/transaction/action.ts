// Token
// Auth
import { ActionType } from './types'

interface TransactionsAction {
  type: ActionType.TRANSACTIONS
  payload: string[]
}
interface AddTransactionAction {
  type: ActionType.ADD_TRANSACTION
  payload: string[]
}

export type Action = TransactionsAction | AddTransactionAction
