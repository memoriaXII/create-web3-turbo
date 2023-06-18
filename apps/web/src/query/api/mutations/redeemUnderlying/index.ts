import BigNumber from 'bignumber.js';
import { checkForTokenTransactionError } from 'config/errors';
import { TransactionReceipt } from 'types/common';
import { VBep20 } from 'types/contracts';


export interface RedeemUnderlyingInput {
  vTokenContract: VBep20 | null;
  amountWei: BigNumber;
}

export type RedeemUnderlyingOutput = TransactionReceipt;

const redeemUnderlying = async ({
  vTokenContract,
  amountWei,
}: RedeemUnderlyingInput): Promise<RedeemUnderlyingOutput> => {
  const transaction = await vTokenContract?.redeemUnderlying(
    amountWei.toFixed()
  );
  const receipt = await transaction.wait(1);
  return checkForTokenTransactionError(receipt);
};

export default redeemUnderlying;