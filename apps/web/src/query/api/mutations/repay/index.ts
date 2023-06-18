import BigNumber from 'bignumber.js';
import { checkForTokenTransactionError } from 'config/errors';
import MAX_UINT256 from 'constants/maxUint256';
import { VTokenContract } from 'query/contracts/types';
import { TransactionReceipt } from 'types/common';


export interface RepayInput {
  vTokenContract: VTokenContract<string> | null;
  fromAccountAddress: string;
  amountWei: BigNumber;
  isRepayingFullLoan?: boolean;
}

export type RepayOutput = TransactionReceipt;

const repay = async ({
  vTokenContract,
  amountWei,
  isRepayingFullLoan = false,
}: RepayInput): Promise<RepayOutput> => {
  const transaction = await vTokenContract?.repayBorrow(
    isRepayingFullLoan ? MAX_UINT256.toFixed() : amountWei?.toFixed()
  );
   return transaction.wait();
};

export default repay;