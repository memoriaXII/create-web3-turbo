import BigNumber from 'bignumber.js';
import { checkForTokenTransactionError } from 'config/errors';
import { TransactionReceipt } from 'types/common';
import { VBep20 } from 'types/contracts';


export interface RedeemInput {
  tokenContract: VBep20 | null;
  accountAddress: string;
  amountWei: BigNumber;
}

export type RedeemOutput = TransactionReceipt;

const redeem = async ({
  tokenContract,
  amountWei,
}: RedeemInput): Promise<RedeemOutput> => {
  const transaction = await tokenContract?.redeem(amountWei.toFixed());
  return transaction.wait();
};

export default redeem;