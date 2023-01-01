import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useContract, useSigner } from 'wagmi';
import FAUCET_ABI from '../abi/faucet.json';
import { callWithEstimateGas, estimateGas } from 'utils/common';

const useFaucet = (): any => {
  const { isConnected, address } = useAccount();
  const [fundInfo, setFundInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: '0xD22a7ECF2e09dDa61a114751794bC1e3B8dBaa4f',
    contractInterface: FAUCET_ABI,
    signerOrProvider: signer
  });
  const fundToken = async () => {
    if (!contract) return null;
    setIsLoading(true);
    try {
      const method = 'fund';
      const args = [address];
      const tx = await callWithEstimateGas(contract, method, args, {}, 1000);
      const receipt: any = tx.wait();
      if (receipt.status) {
        console.log('finish transaction');
        setIsLoading(false);
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };
  return { fundToken, fundInfo, isLoading };
};

export default useFaucet;
