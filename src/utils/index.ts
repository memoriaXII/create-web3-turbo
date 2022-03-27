import Web3 from 'web3'

import { ethers } from 'ethers'
import { getAddress } from '@ethersproject/address'

import { IPFSUris } from 'constants/ipfs.constants'
import MetamaskErrors from 'constants/errors'

export const numFormatter = (value: any) => {
  if (!value) {
    return 0
  }

  const absoluteValue = Math.abs(value)
  if (absoluteValue < 1000) {
    return value
  }

  const exponentialValue = absoluteValue.toExponential().toString()
  const valueComponents = exponentialValue.split('e+')
  const exponent = parseInt(valueComponents[1])
  let shortValue = absoluteValue
  let suffix = ''
  if (exponent >= 3 && exponent < 6) {
    shortValue = absoluteValue / Math.pow(10, 3)
    suffix = 'K'
  }
  if (exponent >= 6 && exponent < 9) {
    shortValue = absoluteValue / Math.pow(10, 6)
    suffix = 'M'
  }
  if (exponent >= 9 && exponent < 12) {
    shortValue = absoluteValue / Math.pow(10, 9)
    suffix = 'B'
  }
  if (exponent >= 12 && exponent < 15) {
    shortValue = absoluteValue / Math.pow(10, 12)
    suffix = 'T'
  }
  if (exponent >= 15 && exponent < 18) {
    shortValue = absoluteValue / Math.pow(10, 15)
    suffix = 'QUAD'
  }
  if (exponent >= 18 && exponent < 20) {
    shortValue = absoluteValue / Math.pow(10, 18)
    suffix = 'QUIN'
  }

  return (
    shortValue.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }) + suffix
  )
}

export const transformTransArray = (a: any, b: any) => {
  // Create the object array
  var newArray = a.map((value: any, index: any) => {
    return {
      address: value,
      amount: ethers.utils.formatEther(b[index]),
    }
  })
  return newArray
}

export const conciseNumber = (value: any) => {
  return `${value.slice(0, 6)}...${value.slice(value.length - 4, value.length)}`
}

export const tokensNumberFormat = (e: any, t: any) => {
  return e.length <= t ? 0.01 : +[e.slice(0, -t), '.', e.slice(t)].join('')
}

export const conciseAddress = (address: any, number?: any) => {
  if (Web3.utils.isAddress(address)) {
    return `${address.slice(0, number ? number : 4)}...${address.slice(
      address.length - (number ? number : 4),
      address.length
    )}`
  }
  return '-'
}

export function isAddress(value: string) {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function shortenAddress(address: any, chars = 4) {
  if (!address) return ''

  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

export const getHigherGWEI = async () => {
  //@ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  //@ts-ignore
  const price = (await provider.getGasPrice()) * 2

  return price.toString()
}

const intlFormat = (num: number) => {
  return new Intl.NumberFormat().format(Math.round(num * 10) / 10)
}

export const formatFollowers = (num: number) => {
  if (num >= 1000000) return intlFormat(num / 1000000) + 'M'
  if (num >= 1000) return intlFormat(num / 1000) + 'k'
  return intlFormat(num)
}

export const calculateGasMargin = (value: ethers.BigNumber) => {
  return value.mul(ethers.BigNumber.from(10000).add(ethers.BigNumber.from(1000))).div(ethers.BigNumber.from(10000))
}

function isValidCode(code: string) {
  return code in MetamaskErrors ? true : false
}

export const getRandomIPFS = (tokenURI: string, justURL = false) => {
  let random = Math.floor(Math.random() * IPFSUris.length)

  if (justURL) {
    return `${IPFSUris[random]}`
  }

  if (
    tokenURI.includes('gateway.pinata.cloud') ||
    tokenURI.includes('cloudflare') ||
    tokenURI.includes('ipfs.io') ||
    tokenURI.includes('ipfs.infura.io')
  ) {
    return `${IPFSUris[random]}${tokenURI.split('ipfs/')[1]}`
  } else if (tokenURI.includes('ipfs://')) {
    return `${IPFSUris[random]}${tokenURI.split('ipfs://')[1]}`
  }

  return tokenURI
}

export const formatError = (error: { data: { code: any; message: any }; message: any; code: any }) => {
  if (error.data) {
    if (isValidCode(error.data.code)) {
      //@ts-ignore
      return MetamaskErrors[String(error.data.code)]
    } else {
      return error.data.message
    }
  } else {
    if (error.message) {
      let message = error.message
      let startIndex = message.indexOf('data')

      if (startIndex < 0) {
        if (isValidCode(error.code)) {
          //@ts-ignore
          return MetamaskErrors[String(error.code)]
        }
      }

      let code = String(message.substr(startIndex + 14, 6))

      if (isValidCode(code)) {
        //@ts-ignore
        return MetamaskErrors[code]
      }
    }
  }

  return 'Error!'
}
