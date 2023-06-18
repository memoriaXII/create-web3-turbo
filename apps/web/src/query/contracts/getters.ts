import bep20Abi from 'constants/contracts/abis/bep20.json';
import { ContractInterface, Signer, ethers } from 'ethers';
import { Token } from 'types';
import { Bep20 } from 'types/contracts';

const getContract = (
  abi: ContractInterface,
  address: string,
  signer?: Signer
) => {
  if (!address) return null;
  return new ethers.Contract(address, abi, signer);
};

export const getTokenContract = (token: Token, signer?: Signer) => {
  return getContract(bep20Abi, token?.address, signer);
};

export const getTokenContractByAddress = (
  address: string,
  signer?: Signer
): Bep20 => getContract(bep20Abi, address, signer) as unknown as Bep20;
