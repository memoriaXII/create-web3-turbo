// Token
// Auth
import { ActionType } from './types'

interface BatchTransactionsAction {
  type: ActionType.BATCH_TRANSACTIONS
  payload: string[]
}
interface AddBatchTransactionAction {
  type: ActionType.ADD_BATCH_TRANSACTION
  payload: string[]
}

export type Action = BatchTransactionsAction | AddBatchTransactionAction
