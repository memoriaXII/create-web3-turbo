'use client';

import BigNumber from 'bignumber.js';
import bep20Abi from 'constants/contracts/abis/bep20.json';
import { BigNumber as EtherBigNumber } from 'ethers';
import { useApproveToken } from 'query/api';
import { useTokenContract } from 'query/contracts';
import { useMemo } from 'react';
import { Token } from 'types';
import { Address, useContractRead } from 'wagmi';


interface UseTokenApprovalInput {
  token: Token;
  spenderAddress: string;
  accountAddress?: string;
}

interface UseTokenApprovalOutput {
  isTokenApproved: boolean | undefined;
  isTokenApprovalStatusLoading: boolean;
  approveToken: () => void;
  isApproveTokenLoading: boolean;
  data?: EtherBigNumber;
}

const useTokenApproval = ({
  token,
  spenderAddress,
  accountAddress,
}: UseTokenApprovalInput): UseTokenApprovalOutput => {
  const tokenContract = useTokenContract(token);

  const {
    data: tokenAllowanceData,
    isLoading: isTokenApprovalStatusLoading,
  }: {
    data?: EtherBigNumber;
    isLoading: boolean;
  } = useContractRead({
    address: tokenContract?.address as Address,
    abi: bep20Abi,
    functionName: 'allowance',
    args: [accountAddress?.toLowerCase(), spenderAddress?.toLowerCase()],
    watch: true,
    enabled: !!tokenContract && !!accountAddress,
  });

  const isTokenApproved = useMemo(() => {
    const parsedData = new BigNumber((tokenAllowanceData || 0)?.toString());
    if (!parsedData) {
      return false;
    }
    return parsedData.isGreaterThan(0);
  }, [tokenAllowanceData]);

  const {
    mutateAsync: approveTokenMutation,
    isLoading: isApproveTokenLoading,
  } = useApproveToken({
    token,
  });

  const approveToken = async () => {
    if (accountAddress) {
      return await approveTokenMutation({
        accountAddress,
        spenderAddress,
      });
    }
  };

  return {
    isTokenApproved,
    isTokenApprovalStatusLoading,
    isApproveTokenLoading,
    approveToken,
    data: tokenAllowanceData,
  };
};

export default useTokenApproval;