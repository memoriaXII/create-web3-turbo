export enum TabsDataTitles {
  DATA = 'Highlights',
  INTELLIGENCE = 'Intelligence',
  HOLDINGS = 'Holdings',
}
export interface IExpandableBox {
  title: string
  value?: number | null | undefined
  isInteger?: boolean
  prefix?: string
  subtitle1?: string
  label1?: { title: string; green: boolean }
  subtitle2?: string
  label2?: { title: string; green: boolean }
  expendNature: boolean
  expandableComponent?: JSX.Element
  tooltip?: JSX.Element
  enabled?: boolean
}

export interface MultiTransactionInfo {
  sender: string
  addressFrom: string
  timestamp: any | null | undefined
  sentAmountArray?: string[] | null | undefined
  receiverArray?: string[] | null | undefined
  combineArray?: [] | null | undefined
}

export interface TransactionInfo {
  addressTo: string
  addressFrom: string
  timestamp: string
  message: string
  keyword: string
  amount: number
}

export interface Parameters {
  from: string | undefined
  value: string
  gasPrice: string | undefined
  gas: string | undefined
  gasLimit: string | undefined
}

export interface SingleParameters {
  from: string | undefined
  value: string
  gasPrice: string | undefined
}
