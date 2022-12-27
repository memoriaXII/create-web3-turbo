import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { deployContractWithDeployer, deployUpgradeableContract, extractEventLoop } from '../scripts/util';

describe('TokenFactory', () => {
  let tokenFactory: Contract;
  let deployer: SignerWithAddress;
  let erc20Token: Contract;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    tokenFactory = await deployUpgradeableContract(deployer, 'TokenFactory', []);
    erc20Token = await deployContractWithDeployer(deployer, 'ERC20Token', ['FTF', 'ftf'], false);
  });
  it("can't create the an instance for the parameters twice", async () => {
    const parameters = ['USD Coin', 'USDC', ethers.BigNumber.from(10).pow(6 + 6), 6] as const;
    const tx = await tokenFactory.createToken(...parameters);
    const createInterface = 'address token,address creator,string name,string symbol,uint limit,uint8 decimals';
    const event = await extractEventLoop(tx, 'TokenCreated', `event TokenCreated(${createInterface})`);
    console.log(event);
  });
});
