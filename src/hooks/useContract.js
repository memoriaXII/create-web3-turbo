import { useCallback } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

// eslint-disable-next-line no-undef
const isMainnet = false

export default () => {
  const { chainId } = useWeb3React()

  const getContract = useCallback(
    async (address, abi, FACTORY) => {
      if (chainId) {
        const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        return FACTORY.connect(address, signer)
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          isMainnet ? 'http://localhost:8545' : 'https://data-seed-prebsc-1-s2.binance.org:8545',
          isMainnet ? 1337 : 97
        )
        return FACTORY.connect(address, provider)
      }
    },
    [chainId]
  )

  return { getContract }
}
