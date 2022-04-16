import React, { FC, useState, useEffect, lazy } from 'react'
import { Formik, Form, ErrorMessage, FieldArray } from 'formik'
import { useTransactionContract } from 'contracts/Transaction'
import BigNumber from 'bignumber.js'
import { Parameters, MultiTransactionInfo } from 'type'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import { formatError, isAddress, shortenAddress, transformTransArray } from 'utils'
import transIcon from 'assets/svgs/transaction.svg'
import { SupportedChainId } from 'constants/chains'
import { ActionType } from 'reducers/batchTransaction/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'

const isMainnet = process.env.REACT_APP_ENV === 'MAINNET'
const CHAIN = isMainnet ? 1337 : SupportedChainId.BSC_TESTNET

const Loader = lazy(() => import('components/Loader'))
const InputField = lazy(() => import('components/FormFields').then((module) => ({ default: module.InputField })))

declare let window: any

const BatchTransComponent = () => {
  const initialValues = {
    mulitSendData: [
      {
        receiverAddress: '',
        sendAmount: '',
      },
    ],
  }
  const { account } = useWeb3React()
  const { batchTransactionList } = useSelector((root: RootState) => root.batchTransactions)
  const dispatch = useDispatch()
  const { ethereum } = window
  const { getTransactionContract, getUserMultiCallTransactions, createBatchTransactions } = useTransactionContract()
  const [multiButtonLoading, setMultiButtonLoading] = useState<boolean | null>(null)
  const [multiTransactionLoading, setMultiTransactionLoading] = useState<boolean | null>(null)

  const handleBatchTransactions = (_data: any) => {
    dispatch({
      type: ActionType.BATCH_TRANSACTIONS,
      payload: _data,
    })
  }

  const getUserMultiCallTransactionsFn = async () => {
    setMultiTransactionLoading(true)
    try {
      const res = await getUserMultiCallTransactions()
      if (ethereum) {
        const structuredMultiTransactions =
          res &&
          res.map((multiTrans: MultiTransactionInfo, index: number) => ({
            receiverArray: multiTrans.receiverArray,
            sentAmountArray: multiTrans.sentAmountArray!.map((x: string) => {
              return ethers.utils.formatEther(x)
            }),
            addressFrom: multiTrans.sender,
            timestamp: new Date(multiTrans.timestamp.toNumber() * 1000).toLocaleString(),
            combineArray: transformTransArray(multiTrans.receiverArray, multiTrans.sentAmountArray),
            index,
          }))
        handleBatchTransactions(structuredMultiTransactions)
        setMultiTransactionLoading(false)
      } else {
        console.log('Ethereum is not present')
        setMultiTransactionLoading(false)
      }
    } catch (err) {
      setMultiTransactionLoading(false)
      console.log(err)
    }
  }

  const initEvent = async () => {
    try {
      const transContract = await getTransactionContract()
      transContract.on('MultiTransfer', () => {
        console.log('init')
      })
    } catch (err) {
      return err
    }
  }
  const createBatchTransactionsFn = async (_values: any) => {
    setMultiButtonLoading(true)
    if (_values) {
      const transContract = await getTransactionContract()
      let addressArray: string[] = []
      let amountsArray: string[] = []
      let totalAmount = 0

      _values.mulitSendData.forEach((x: any) => {
        if (x && isAddress(x.receiverAddress)) {
          addressArray?.push(x.receiverAddress)
          amountsArray?.push(x.sendAmount)
          totalAmount = totalAmount + x.sendAmount
        }
      })

      try {
        let _amounts: number[] = []

        for (let i = 0; i < amountsArray.length; i++) {
          //@ts-ignore
          _amounts.push(new BigNumber(amountsArray[i].toString().split(',')))
        }
        let subRecivers = addressArray
        let subAmounts: BigNumber[] | string[] | number[] = _amounts

        subAmounts = subAmounts.map((v: any) => {
          return '0x' + new BigNumber(v).multipliedBy(10 ** 18).toString(16)
        })
        let value = new BigNumber(0)

        subAmounts.forEach((v) => {
          value = value.plus(new BigNumber(v))
          //plus method is from bignumber.js
        })

        let gas = 21000 + 80000 * subRecivers.length
        if (gas > 8e6) {
          gas = 8e6
        }

        const parsedAmount = ethers.utils.parseEther((totalAmount * 1.05).toString())

        const options: Parameters = {
          from: account!,
          value: parsedAmount._hex,
          gasPrice: '0x2540BE400',
          gas: undefined,
          gasLimit: undefined,
        }

        if (!window.ethereum) {
          options.gas = '0x' + gas.toString(16)
          options.gasPrice = undefined
        } else {
          options.gasLimit = '0xF4240'
        }

        const tx = await createBatchTransactions(addressArray, subAmounts, options)

        const transactionRecipt = await tx.wait()

        transactionRecipt.events.map(async (value: any) => {
          const event = value.event
          if (event === 'MultiTransfer') {
            console.log('---- bacthMintSFH.events.map owner Transfer ---')
            getUserMultiCallTransactionsFn()
            setMultiButtonLoading(false)
          }
        })
      } catch (error) {
        console.log(error, 'e')
        if (formatError(error)) {
          alert(formatError(error))
          setMultiButtonLoading(false)
        }
      }
    }
  }

  const handleSubmit = async (values: any) => {
    await createBatchTransactionsFn(values)
  }

  useEffect(() => {
    if (account) {
      initEvent()
    }
  }, [account])

  useEffect(() => {
    if (account) {
      getUserMultiCallTransactionsFn()
    }
  }, [account])

  return (
    <>
      <div className="form-section grid-item">
        <div className="projects-section-header">
          <p>Batch Transaction</p>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
          {({ values }) => (
            <Form>
              <>
                {/* @ts-ignore */}
                <FieldArray name="mulitSendData">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.mulitSendData.length > 0 &&
                        values.mulitSendData.map((m, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <InputField
                                name={`mulitSendData.${index}.receiverAddress`}
                                label="Receiver Address"
                                fullWidth
                                type="text"
                                inputmode="decimal"
                              />
                            </div>
                            <div className="col">
                              <InputField
                                name={`mulitSendData.${index}.sendAmount`}
                                label="Send Amount"
                                fullWidth
                                type="number"
                                inputmode="decimal"
                              />
                            </div>
                            <div className="button-group">
                              <button type="button" className="button" onClick={() => remove(index)}>
                                Remove Receiver
                              </button>
                              <button
                                type="button"
                                className="button"
                                style={{ marginLeft: '2rem' }}
                                onClick={() => push({ receiverAddress: '', sendAmount: 0 })}
                              >
                                Add Receiver
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </FieldArray>
              </>
              <button className="button" type="submit">
                Multi Send {multiButtonLoading && <div id="loading"></div>}
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
          <p>Batch Transaction History</p>
        </div>
        <div className="messages">
          {multiTransactionLoading && (
            <div className="message-box">
              <Loader />
            </div>
          )}
          {batchTransactionList?.map((multiTrans: MultiTransactionInfo, i: number) => {
            return (
              <div key={i}>
                <div className="message-box">
                  <img src={transIcon} alt="profile image" />
                  <div className="message-content">
                    <div className="message-header">
                      <div className="name">
                        {multiTrans.receiverArray?.map((x, index) => (
                          <span key={index}>
                            {shortenAddress(x)}
                            {index < (multiTrans && multiTrans.receiverArray!.length) - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                      <div className="star-checkbox">
                        <input type="checkbox" id="star-1" />
                        <label>
                          {multiTrans.sentAmountArray!.reduce((a, b) => Number(a) + Number(b), 0).toFixed(3)} ETH
                        </label>
                      </div>
                    </div>
                    <p className="message-line">
                      <span>From:</span> {multiTrans.addressFrom}
                    </p>
                    {multiTrans.combineArray?.map((x: any, index) => (
                      <p className="message-line" key={index}>
                        <span>To:</span> {x.address}
                        {index < (multiTrans && multiTrans.combineArray!.length) ? ', ' : ''}
                        {x.amount} ETH
                      </p>
                    ))}

                    <p className="message-line time"> {multiTrans.timestamp}</p>
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

export default BatchTransComponent
