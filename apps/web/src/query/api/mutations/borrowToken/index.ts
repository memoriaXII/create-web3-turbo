import BigNumber from 'bignumber.js';
import { VTokenContract } from 'query/contracts/types';
import { TransactionReceipt } from 'types/common';


export interface BorrowVTokenInput {
  vTokenContract: VTokenContract<string> | null;
  amountWei: BigNumber;
}

export type BorrowVTokenOutput = TransactionReceipt;

const borrowVToken = async ({
  vTokenContract,
  amountWei,
}: BorrowVTokenInput): Promise<TransactionReceipt> => {
  const transaction = await vTokenContract?.borrow(amountWei.toFixed());
  return transaction.wait();
};

export default borrowVToken;
