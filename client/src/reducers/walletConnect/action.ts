// Auth
import { ActionType } from './types'

interface ModalOpenAction {
  type: ActionType.MODAL_0PENED
  payload: { isModalOpened: boolean }
}

export type Action = ModalOpenAction
