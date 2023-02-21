import { ContractInterface, providers, Signer } from 'ethers';

export type ContractProps = {
  address: string;
  abi: ContractInterface;
  signer: Signer | providers.Provider;
  startDay?: number;
};
