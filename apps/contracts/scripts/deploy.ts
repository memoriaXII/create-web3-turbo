import { ethers } from 'hardhat';
import { deployContract, deployUpgradeableContract } from './util';

async function main() {
  try {
    const faucet = {
      amount: ethers.utils.parseUnits('50000', 'ether'), //award 10000 tokens per faucet interaction
      frequency: 1, //will allow people to request funds every block (so essentially every ~5s)
    };
    const [deployer] = await ethers.getSigners();
    const ERC20 = await deployContract('ERC20Token', ['token', 'COO'], true);
    console.log(`Deploying contracts with account: ${deployer.address}`);
    console.log(`Test ERC20 address:${ERC20.address}`);
    const tokenFaucet = await deployUpgradeableContract(deployer, 'TokenFaucet', [
      ERC20.address,
      faucet.amount,
      faucet.frequency,
    ]);
    console.log(`Faucet address:${tokenFaucet.address}`);
    const erc20Token = await ethers.getContractAt('ERC20Token', ERC20.address);
    const connected = tokenFaucet.connect(deployer);
    const totalAmount = await erc20Token.balanceOf(deployer.address);
    await erc20Token.approve(tokenFaucet.address, totalAmount);
    await connected.donate(erc20Token.address, totalAmount);
    const faucetBalance = await erc20Token.balanceOf(tokenFaucet.address);
    console.log(ethers.utils.formatEther(faucetBalance), 'balance');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
