import { CONNECT_WALLET, DISCONNECT_WALLET, PLATFORM_DISCONNECT_WALLET, SUFFICIENT_BALANCE } from './action'

const initialState = {
  walletAddress: '',
  isAuthenticated: false,
  isDisconnected: false,
}

interface ACTION {
  type: string
  payload: any
}

export default function isAuthenticated(state = initialState, action: ACTION) {
  switch (action.type) {
    case CONNECT_WALLET: {
      return {
        ...state,
        walletAddress: action.payload.walletAddress,
        isDisconnected: action.payload.isDisconnected,
      }
    }
    case SUFFICIENT_BALANCE: {
      return { ...state, isAuthenticated: true }
    }
    case DISCONNECT_WALLET: {
      return {
        ...state,
        isAuthenticated: false,
        walletAddress: '',
        isDisconnected: false,
      }
    }
    case PLATFORM_DISCONNECT_WALLET: {
      return {
        ...state,
        isAuthenticated: false,
        walletAddress: '',
        isDisconnected: true,
      }
    }
  }

  return state
}
