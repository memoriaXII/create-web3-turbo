import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { deployContractWithDeployer, deployUpgradeableContract, extractEventLoop } from '../scripts/util';

describe('TokenFaucet', () => {
  let tokenFaucet: Contract;
  let deployer: SignerWithAddress;
  let user1: SignerWithAddress;
  let erc20Token: Contract;

  const faucet = {
    amount: ethers.utils.parseUnits('10000', 'ether'), //award 10000 tokens per faucet interaction
    frequency: 1, //will allow people to request funds every block (so essentially every ~5s)
  };

  beforeEach(async () => {
    [deployer, user1] = await ethers.getSigners();
    erc20Token = await deployContractWithDeployer(deployer, 'ERC20Token', ['SOOLLL', 'SOOLLL'], false);
    tokenFaucet = await deployUpgradeableContract(deployer, 'TokenFaucet', [
      erc20Token.address,
      faucet.amount,
      faucet.frequency,
    ]);
  });
  describe('fund', async () => {
    it('works', async () => {
      const connected = tokenFaucet.connect(deployer);
      const totalAmount = await erc20Token.balanceOf(deployer.address);
      await erc20Token.approve(tokenFaucet.address, totalAmount);
      await connected.donate(erc20Token.address, totalAmount);

      await tokenFaucet.fund(user1.address);
      const userBalance = await erc20Token.balanceOf(user1.address);
      const faucetBalance = await erc20Token.balanceOf(tokenFaucet.address);
      console.log(ethers.utils.formatEther(userBalance), ethers.utils.formatEther(faucetBalance), 'balance');
    });
  });
});
