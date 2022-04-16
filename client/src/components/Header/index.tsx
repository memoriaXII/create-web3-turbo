import React, { lazy } from 'react'
import { useWeb3React } from '@web3-react/core'
import { shortenAddress } from 'utils'
import { useDispatch, useSelector } from 'react-redux'
import { ActionType } from 'reducers/walletConnect/types'
import { RootState } from 'reducers'
import logo from 'assets/imgs/logo.png'
import './Header.scss'

const ConnectWalletModal = lazy(() => import('components/ConnectWalletModal'))

export default function Header({ ...rest }) {
  const { account } = useWeb3React()
  const { isModalOpened } = useSelector((root: RootState) => root.connectWalletModal)
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch({
      type: ActionType.MODAL_0PENED,
      payload: { isModalOpened: true },
    })
  }
  const handleClose = () => {
    dispatch({
      type: ActionType.MODAL_0PENED,
      payload: { isModalOpened: false },
    })
  }
  return (
    <>
      <header className="header" id="header">
        <div className="header__container">
          <div className="header__left">
            <a className="header__logo" href="#">
              <img className="header__icon" src={logo} alt="logo" />
            </a>
            <nav className="main-menu" id="main-menu">
              <ul className="main-menu__list">
                <li className="main-menu__item">
                  <a className="main-menu__link g-link" href="#">
                    Github
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link g-link" href="#">
                    Tutorial
                  </a>
                </li>
                <li className="main-menu__item">
                  <a className="main-menu__link g-link" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            {account && account ? (
              <button className="header__button connect-button">{account && shortenAddress(account)}</button>
            ) : (
              <button className="header__button connect-button" onClick={handleOpen}>
                Connect Wallet
              </button>
            )}

            <a className="header__trigger" id="header-trigger" href="#">
              <img
                className="header__icon"
                src="https://raw.githubusercontent.com/ricardoolivaalonso/GetBello/main/public/img/menu.svg"
                alt="menu"
              />
            </a>
          </div>
        </div>
      </header>
      <ConnectWalletModal visible={isModalOpened} onClose={handleClose} />
    </>
  )
}
