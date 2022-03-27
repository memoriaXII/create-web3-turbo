const env = process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV

export const isProduction = env === 'production'

export const isDevelopment = env === 'development'

export const apiUrl = process.env.REACT_APP_API_URL

export const apiOpenChest = process.env.REACT_APP_API_OPEN_CHEST

export const apiGame = process.env.REACT_APP_API_GAME

export const apiSocket = process.env.REACT_APP_API_SOCKET_URL

export default {
  isProduction,
  apiUrl,
  apiOpenChest,
  apiGame,
  apiSocket,
}
