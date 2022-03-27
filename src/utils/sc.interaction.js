import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

const useContract = () => {
  const { chainId } = useWeb3React();

  const loadContract = useCallback(
    async (address, abi) => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return new ethers.Contract(address, abi, signer);
    },
    [chainId]
  );

  const getAccountBalance = useCallback(
    async address => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let balance = await provider.getBalance(address);
      balance = ethers.utils.formatEther(balance);
      return balance;
    },
    [chainId]
  );

  return { loadContract, getAccountBalance };
};

export default useContract;
