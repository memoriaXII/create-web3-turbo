import React, { useEffect } from 'react'
import cx from 'classnames'

import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'

import { mainnetConfig, testnetConfig, SUPPORTED_WALLETS } from 'constants/wallet'
import usePrevious from 'hooks/usePrevious'

import Modal from 'components/Modal'
import styles from './styles.module.scss'

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'

const Option = ({ onClick = null, header, icon, active = false }) => {
  return (
    <div onClick={onClick} className={cx(styles.option, active && styles.active)}>
      <div className={styles.header}>{header}</div>
      <img src={icon} className={styles.icon} />
    </div>
  )
}

const ConnectWalletModal = ({ visible, onClose }) => {
  const { account, activate, active, connector, error, deactivate, chainId } = useWeb3React()

  // close modal when a connection is successful
  const activePrevious = usePrevious(active)
  const connectorPrevious = usePrevious(connector)

  useEffect(() => {
    if (visible && ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error))) {
      onClose()
    }
  }, [active, error, connector, visible, activePrevious, connectorPrevious])

  const tryActivation = async (connector) => {
    console.log(SUPPORTED_WALLETS, connector, 'connector')
    const { ethereum } = window
    let conn = typeof connector === 'function' ? await connector() : connector

    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return SUPPORTED_WALLETS[key].name
      }
      return true
    })

    try {
      // metamask (only known implementer) automatically switches after a network is added
      // the second call is done here because that behavior is not a part of the spec and cannot be relied upon in the future
      // metamask's behavior when switching to the current network is just to return null (a no-op)
      const connectRes = conn && activate(conn, undefined, true)
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: isMainnet ? mainnetConfig?.chainId : testnetConfig?.chainId }],
      })
    } catch (e) {
      if (error.code === 4001 || error instanceof UnsupportedChainIdError) throw error
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [isMainnet ? mainnetConfig : testnetConfig],
      })
    }
  }

  const getOptions = () => {
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]
      const validateAction = () => {
        // eslint-disable-next-line no-unused-expressions
        option.connector === connector ? null : tryActivation(option.connector)
      }
      return (
        <Option
          onClick={() => {
            // eslint-disable-next-line no-unused-expressions
            option.connector === connector ? null : tryActivation(option.connector)
          }}
          key={key}
          active={option.connector === connector}
          header={option.name}
          icon={option.icon}
        />
      )
    })
  }

  const getModalContent = () => {
    if (error instanceof UnsupportedChainIdError) {
      return (
        <div>
          <div className={styles.text}>Please connect to the {isMainnet ? 'BSC Opera' : 'BSC Testnet'}.</div>
          <div className={styles.switchBtn} onClick={deactivate}>
            Disconnect
          </div>
        </div>
      )
    }
    return getOptions()
  }

  return (
    <Modal
      visible={visible}
      title={error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Connect to a wallet'}
      onClose={onClose}
      small
    >
      {getModalContent()}
    </Modal>
  )
}

export default ConnectWalletModal
