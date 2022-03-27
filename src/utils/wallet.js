import { ethers } from 'ethers';

const checkBalance = async address => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let balance = await provider.getBalance(address);
  balance = ethers.utils.formatEther(balance);
  return balance;
};
const WalletUtils = {
  checkBalance,
};

export default WalletUtils;
