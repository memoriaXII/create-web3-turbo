import { ethers } from 'hardhat';
import { deployUpgradeableContract } from './util';

const erc20Addr = '0x862BC9Bd9265980feA5E69308A98cCB31BeA8d4D';
async function main() {
  try {
    const faucet = {
      amount: ethers.utils.parseUnits('50000', 'ether'), //award 10000 tokens per faucet interaction
      frequency: 1, //will allow people to request funds every block (so essentially every ~5s)
    };
    const [deployer] = await ethers.getSigners();
    const tokenFaucet = await deployUpgradeableContract(deployer, 'TokenFaucet', [
      '0x862BC9Bd9265980feA5E69308A98cCB31BeA8d4D',
      faucet.amount,
      faucet.frequency,
    ]);
    console.log(`Faucet address:${tokenFaucet.address}`);
    const erc20Token = await ethers.getContractAt('ERC20Token', erc20Addr);
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
//faucet: 0xDCFc55CE79D6715B4D63388F02D2121e6f9E0487

main();
