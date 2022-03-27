import { ActionType } from './types'
import { Action } from './action'

interface connectState {
  isModalOpened: boolean
}

const initialState = {
  isModalOpened: false,
}

export default function openConnectWalletModal(state: connectState = initialState, action: Action): connectState {
  switch (action.type) {
    case ActionType.MODAL_0PENED: {
      return { ...state, isModalOpened: action.payload.isModalOpened }
    }
  }

  return state
}
