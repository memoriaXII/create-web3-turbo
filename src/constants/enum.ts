import { parseUnits } from 'ethers/lib/utils'

export enum Type {
  CHEST = 'Chest',
  CARD = 'Card',
}
export enum Event {
  ALL_EVENT = 'All event',
  LISTING = 'Listing',
  SALE = 'Sale',
  PURCHASE = 'Purchase',
  CANCEL_LISTING = 'Cancel Listing',
}
export enum contractTypes {
  NFT = 'nft',
  MARKETPLACE = 'marketplace',
  CHEST = 'chest',
  STARTER_CHEST = 'starter pack',
  RISING_CHEST = 'rising dragon pack',
  WARRIOR_CHEST = 'warrior pack',
  CLAIM_DOR = 'claim dor',
}

export enum StatusTransaction {
  UNKNOWN = 'UNKNOWN',
  SELECTING = 'SELECTING',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum allTab {
  NOT_ON_MARKET = 'not-on-market',
  ON_MARKET = 'on-market',
  REWARD = 'rewards',
}

export enum GAS_PRICE {
  default = '5',
  fast = '6',
  instant = '7',
  testnet = '10',
}

export const GAS_PRICE_GWEI = {
  default: parseUnits(GAS_PRICE.default, 'gwei').toString(),
  fast: parseUnits(GAS_PRICE.fast, 'gwei').toString(),
  instant: parseUnits(GAS_PRICE.instant, 'gwei').toString(),
  testnet: parseUnits(GAS_PRICE.testnet, 'gwei').toString(),
}
