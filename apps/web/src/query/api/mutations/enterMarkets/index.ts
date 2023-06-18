import { TransactionReceipt } from 'types/common';
import { Comptroller } from 'types/contracts';

export interface EnterMarketsInput {
  comptrollerContract: Comptroller;
  accountAddress?: string;
  vTokenAddresses: string[];
}

export type EnterMarketsOutput = TransactionReceipt;

const enterMarkets = async ({
  comptrollerContract,
  vTokenAddresses,
}: EnterMarketsInput): Promise<EnterMarketsOutput> => {
  const tx = await comptrollerContract.enterMarkets(vTokenAddresses);
  const receipt = await tx.wait();
  return receipt;
};

export default enterMarkets;
