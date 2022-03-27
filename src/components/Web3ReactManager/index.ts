// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import Loader from 'components/Loader'
import { network } from 'connectors'
import useEagerConnect from 'hooks/useEagerConnect'
import useInactiveListener from 'hooks/useInactiveListener'
import { useWeb3React } from '@web3-react/core'
import { switchToNetwork } from 'utils/switchToNetwork'
import { injected } from '../../connectors'
import { mainnetConfig, testnetConfig } from 'constants/wallet'

const NetworkContextName = 'NETWORK'
const targetChainId =
  process.env.REACT_APP_ENV === 'MAINNET' ? parseInt(mainnetConfig.chainId) : parseInt(testnetConfig.chainId)

export default function Web3ReactManager({ children }: any) {
  const { active } = useWeb3React()
  const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React(NetworkContextName)

  // try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
  useEffect(() => {
    if (triedEager && !networkActive && !networkError && !active) {
      activateNetwork(network)
    }
  }, [triedEager, networkActive, networkError, activateNetwork, active])

  // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEager)

  // handle delayed loader state
  const [showLoader, setShowLoader] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true)
    }, 600)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // on page load, do nothing until we've tried to connect to the injected connector
  if (!triedEager) {
    return null
  }

  // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
  // if (!active && networkError) {
  //   return (
  //     <div className="flex items-center justify-center h-80">
  //       <div className="text-secondary">
  //         {`Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device`}
  //       </div>
  //     </div>
  //   );
  // }

  // if neither context is active, spin
  // if (!active && !networkActive) {
  //   return showLoader ? (
  //     <div className="flex items-center justify-center h-80">
  //       <Loader />
  //     </div>
  //   ) : null;
  // }

  return children
}
