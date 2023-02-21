import { JsonRpcProvider } from '@ethersproject/providers';
import { expect } from 'chai';
import { config as dotenvConfig } from 'dotenv';
import { ContractTransaction, Wallet } from 'ethers';
import { ethers } from 'hardhat';

import { resolve } from 'path';

import { ERC20ABI, StakingABI } from '../abi';
import config from '../config/config.json';
import { ERC20TokenContract, StakingContract } from '../contracts';
import { convertBNtoTokens, convertToHex } from '../utils/format';

dotenvConfig({ path: resolve(__dirname, '../../.env') });

const PRIVATE_KEY = process.env.PRIVATE_KEY || config.privateKey;

const defaultAllowance = 9999999;
const hexAmount = convertToHex(100);
const calculatedApproveValue = convertToHex(defaultAllowance);

const tokenAddress = config.staking.tokenAddress;
const stakingAddress = config.staking.address;

describe('StakingContract', () => {
  let provider: JsonRpcProvider;
  let token: ERC20TokenContract;
  let stakingContract: StakingContract;
  let account: Wallet;

  beforeEach(async () => {
    provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    account = new ethers.Wallet(PRIVATE_KEY, provider);

    // Set up a connection to the smart contract, and create an instance of the StakingContract.
    stakingContract = new StakingContract({
      address: stakingAddress,
      abi: StakingABI,
      signer: account.connect(provider)
    });

    token = new ERC20TokenContract({
      address: tokenAddress,
      abi: ERC20ABI,
      signer: account.connect(provider)
    });
  });

  describe('deposit', () => {
    it('should deposit the specified amount into the contract', async () => {
      await token.balanceOf(account.address);
      await token.increaseAllowance(stakingAddress, calculatedApproveValue);
      await token.allowance(account.address, stakingAddress);
      const tx: ContractTransaction = await stakingContract.deposit(hexAmount);
      await tx.wait(3);
      const result = await stakingContract.getUserStake(account.address);
      const depositAmount = convertBNtoTokens(result[0]);
      const rewardAmount = convertBNtoTokens(result[1]);
      expect(depositAmount.toString() > '100').to.be.eq(true);
      expect(rewardAmount.toString() > '0').to.be.eq(true);
    });
    it('deposit when staking has ended', async () => {
      await token.balanceOf(account.address);
      await token.increaseAllowance(stakingAddress, calculatedApproveValue);
      await token.allowance(account.address, stakingAddress);
      expect(stakingContract.deposit(hexAmount)).to.revertedWith('STAK-6');
    });
  });

  describe('withdraw', () => {
    it('withdraw before staking end', async () => {
      await token.balanceOf(account.address);
      await token.increaseAllowance(stakingAddress, calculatedApproveValue);
      await token.allowance(account.address, stakingAddress);
      await stakingContract.deposit(hexAmount);
      expect(stakingContract.withdrawAll()).to.revertedWith('STAK-9');
    });
    it('should withdraw all funds from the contract', async () => {
      await token.balanceOf(account.address);
      await stakingContract.withdrawAll();
    });
  });

  describe('getUserStake', () => {
    it('should get the deposited amount and total rewards for the specified user', async () => {
      const result = await stakingContract.getUserStake(account.address);
      const depositAmount = convertBNtoTokens(result[0]);
      const rewardAmount = convertBNtoTokens(result[1]);
      expect(depositAmount.toString() > '100').to.be.eq(true);
      expect(rewardAmount.toString() > '0').to.be.eq(true);
    });
  });
});
