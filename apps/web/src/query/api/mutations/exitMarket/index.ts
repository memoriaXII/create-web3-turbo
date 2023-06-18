import { checkForComptrollerTransactionError } from 'config/errors';
import { TransactionReceipt } from 'types/common';
import { Comptroller } from 'types/contracts';


export interface ExitMarketInput {
  comptrollerContract: Comptroller;
  accountAddress?: string;
  vtokenAddress: string;
}

export type ExitMarketOutput = TransactionReceipt;

const exitMarket = async ({
  comptrollerContract,
  vtokenAddress,
}: ExitMarketInput): Promise<ExitMarketOutput> => {
  const resp = await comptrollerContract.exitMarket(vtokenAddress);

  return checkForComptrollerTransactionError(resp);
};

export default exitMarket;