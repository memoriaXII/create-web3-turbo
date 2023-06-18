import BigNumber from 'bignumber.js';
import { ContractReceipt, ContractTransaction, Signer } from 'ethers';
import { getVTokenContract } from 'query/contracts';
import { Asset } from 'types';

export interface SupplyInput {
  asset: Asset;
  amountWei: BigNumber;
  signer?: Signer;
}

const supply = async ({
  signer,
  asset,
  amountWei,
}: SupplyInput): Promise<ContractReceipt> => {
  const tokenContract = getVTokenContract(asset.token.id, signer);
  const transaction: ContractTransaction = await tokenContract?.mint(
    amountWei.toFixed()
  );
  return transaction.wait();
};

export default supply;
