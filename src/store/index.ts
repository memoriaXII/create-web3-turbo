import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from 'reducers'
import { logger } from 'middleware/logger'
import thunk from 'redux-thunk'

export const configureStore = (initialState?: any) => {
  let middleware = applyMiddleware(thunk, logger)

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware)
  }

  return createStore(rootReducer, middleware)
}
