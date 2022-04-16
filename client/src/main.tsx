import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'

import App from './App'
import Web3ReactManager from './components/Web3ReactManager'
import { configureStore } from './store'
import getLibrary from './utils/getLibrary'
const NetworkContextName = 'NETWORK'
const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactManager>
          <App />
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </Provider>,
  document.getElementById('root')
)
