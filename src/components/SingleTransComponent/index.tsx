import React, { FC, useState, lazy, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useTransactionContract } from 'contracts/Transaction'
import { getLastEvent, getAllEvent, getBlockNumberEvent } from 'apis/transaction'
import { formatError, isAddress } from 'utils'
import transIcon from 'assets/svgs/transaction.svg'
import { TransactionInfo } from 'type'
import { ActionType } from 'reducers/transaction/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'

const Loader = lazy(() => import('components/Loader'))
const InputField = lazy(() => import('components/FormFields').then((module) => ({ default: module.InputField })))
declare let window: any

const SingleTransComponent: FC = () => {
  const singleTransactionsInitialValues = {
    amount: 0,
    keyword: '',
    message: '',
    addressTo: '',
  }
  const { transactionList } = useSelector((root: RootState) => root.transactions)
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const { ethereum } = window
  const { getUserAllTransactions, createTransaction, getTransactionContract } = useTransactionContract()
  const [buttonLoading, setButtonLoading] = useState<boolean | null>(null)
  const [transactionLoading, setTransactionLoading] = useState<boolean | null>(null)

  const handleTransactions = (_data: any) => {
    dispatch({
      type: ActionType.TRANSACTIONS,
      payload: _data,
    })
  }

  const getAllTransactionsApiEvents = async () => {
    try {
      const allTransactionsEventsRes = await Promise.all([
        await getLastEvent(),
        await getAllEvent(),
        await getBlockNumberEvent(),
      ])
    } catch (e) {
      return e
    }
  }

  const getUserAllTransactionsFn = async () => {
    setTransactionLoading(true)
    try {
      const res = await getUserAllTransactions()
      if (ethereum) {
        const structuredTransactions =
          res &&
          res.map((transaction: any, index: number) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
            index,
          }))

        handleTransactions(structuredTransactions)
        setTransactionLoading(false)
      } else {
        console.log('Ethereum is not present')
        setTransactionLoading(false)
      }
    } catch (err) {
      setTransactionLoading(false)
      console.log(err)
    }
  }

  const initEvent = async () => {
    try {
      const transContract = await getTransactionContract()
      transContract.on('Transfer', () => {})
    } catch (err) {
      return err
    }
  }

  const sendTransaction = async (values: TransactionInfo) => {
    const { addressTo, amount, message } = values
    const transContract = await getTransactionContract()
    try {
      setButtonLoading(true)
      const parsedAmount = ethers.utils.parseEther(amount.toString())
      const options = {
        from: account,
        value: parsedAmount._hex,
        gasPrice: '0x2540BE400',
      }
      try {
        if (isAddress(addressTo)) {
          const tx = await createTransaction(addressTo, parsedAmount, message, options)
          transContract.on(
            'Transfer',
            (sender: any, receiver: any, amount: any, message: any, timestamp: any, keyword: any) => {
              getUserAllTransactionsFn()
              if (sender && receiver && amount && message && timestamp) {
                setButtonLoading(false)
              }
            }
          )
        }
      } catch (e) {
        if (e && formatError(e)) {
          alert(formatError(e))
          setButtonLoading(false)
        }
      }
    } catch (error) {
      if (formatError(error)) {
        alert(formatError(error))
        setButtonLoading(false)
      }
    }
  }

  const handleSubmit = async (values: any) => {
    await sendTransaction(values)
  }

  useEffect(() => {
    if (account) {
      initEvent()
      getUserAllTransactionsFn()
      getAllTransactionsApiEvents()
    }
  }, [account])

  return (
    <>
      <div className="form-section grid-item">
        <div className="projects-section-header">
          <p>Single Transaction</p>
        </div>

        <Formik initialValues={singleTransactionsInitialValues} onSubmit={handleSubmit} enableReinitialize>
          {({ values }) => (
            <Form>
              <InputField name="addressTo" label="Receiver Address" fullWidth type="text" />
              <InputField name="amount" label="Send Amount" fullWidth type="number" inputmode="decimal" />
              <InputField name="message" label="Message" fullWidth type="text" />

              <button className="button is-primary" type="submit">
                Create
                {buttonLoading && <div id="loading"></div>}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="messages-section grid-item">
        <button className="messages-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
        <div className="projects-section-header">
          <p>Transaction History</p>
        </div>
        <div className="messages">
          {transactionLoading && (
            <div className="message-box">
              <Loader />
            </div>
          )}
          {transactionList?.map((transaction: TransactionInfo, i: number) => {
            return (
              <div key={i}>
                <div className="message-box">
                  <img src={transIcon} alt="profile image" />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name"> {transaction.addressTo}</div>
                      <div className="star-checkbox">
                        <label>{transaction && transaction.amount} ETH </label>
                      </div>
                    </div>
                    <p className="message-line">
                      <span>From:</span> {transaction.addressFrom}
                    </p>
                    <p className="message-line">
                      <span>Message:</span> {transaction.message}
                    </p>
                    <p className="message-line time"> {transaction.timestamp}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SingleTransComponent
