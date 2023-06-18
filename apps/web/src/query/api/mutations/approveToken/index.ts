import ALLOWANCE_AMOUNT_WEI from 'constants/allowanceAmountWei';
import { Contract } from 'ethers';
import { TransactionReceipt } from 'types/common';


export interface ApproveTokenInput {
  tokenContract: Contract | null;
  accountAddress: string;
  spenderAddress: string;
  allowance?: string;
}

export type ApproveTokenOutput = TransactionReceipt | null;

const approveToken = async ({
  tokenContract,
  accountAddress,
  spenderAddress,
  allowance = ALLOWANCE_AMOUNT_WEI,
}: ApproveTokenInput): Promise<ApproveTokenOutput> => {
  const tx = await tokenContract?.approve(spenderAddress, allowance);
  const receipt = await tx.wait();
  return receipt;
};


export default approveToken;