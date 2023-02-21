import hre, { ethers } from 'hardhat';

export const getAccount = async (account: string) => {
  await hre.network.provider.request({ method: 'hardhat_impersonateAccount', params: [account] });
  await hre.network.provider.request({
    method: 'hardhat_setBalance',
    params: [account, '0xffffffffffffffffffffff']
  });
  return ethers.getSigner(account);
};
