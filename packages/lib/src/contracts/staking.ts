import { BigNumber, ContractTransaction } from 'ethers';

import BaseContract from './baseContract';

import { ContractProps } from '../types/contract';

class StakingContract extends BaseContract {
  /**
   * The day the staking contract started.
   */
  public startDay?: number;

  /**
   * The address of the staking contract.
   */
  public address?: string;

  /**
   * Creates a new instance of the StakingContract class.
   * @param {ContractProps} props The properties needed to initialize the contract, including its address, ABI, and signer.
   */
  constructor(props: ContractProps) {
    super(props);
    this.startDay = props.startDay;
    this.address = props.address;
  }

  /**
   * Deposits the specified amount into the contract.
   *
   * @param amount The amount to deposit, as a string.
   * @param options Options for the transaction, including gas and gas price.
   */
  public async deposit(amount: string): Promise<ContractTransaction> {
    const tx = await this.contract?.deposit(amount);
    return tx;
  }

  /**
   * Withdraws the specified amount from the contract.
   *
   * @param amount The amount to withdraw, as a string.
   * @param options Options for the transaction, including gas and gas price.
   */
  public async withdraw(amount: any): Promise<ContractTransaction> {
    const tx = await this.contract?.withdraw(amount);
    return tx;
  }

  /**
   * Withdraws all funds from the contract.
   *
   * @param options Options for the transaction, including gas and gas price.
   */
  public async withdrawAll(): Promise<ContractTransaction> {
    const tx = await this.contract?.withdrawAll();
    return tx;
  }

  /**
   * Derives the reward for a given deposit, based on the last updated time and existing reward.
   *
   * @param deposit The amount of the deposit, as a number.
   * @param lastUpdatedTime The timestamp of the last update, as a number.
   * @param existingReward The existing reward, as a number.
   */
  public async deriveReward(
    deposit: number,
    lastUpdatedTime: number,
    existingReward: number
  ): Promise<void> {
    await this.contract?.deriveReward(deposit, lastUpdatedTime, existingReward);
  }

  /**
   * Gets the deposited amount and total rewards for the specified user.
   *
   * @param address The user address to get the deposited amount and rewards for, as a string.
   * @returns Promise of type BigNumber array representing user deposited amount and staking rewards value.
   */
  public async getUserStake(address?: string): Promise<[BigNumber, BigNumber]> {
    const [depositedAmount, totalRewards] = await this.contract?.getUserStake(address);
    return [depositedAmount, totalRewards];
  }

  /**
   * Gets the maximum deposit amount allowed by the contract.
   * @returns Promise of type BigNumber representing the maximum deposit amount value.
   */
  public async getMaxDeposit(): Promise<BigNumber> {
    const maxDeposit = await this.contract?.maxDeposit();
    return maxDeposit;
  }

  /**
   * Gets the maximum deposit amount per user allowed by the contract.
   * @returns Promise of type BigNumber representing the maximum deposit amount per user value.
   */
  public async getMaxPerUserDeposit(): Promise<BigNumber> {
    const maxPerUserDeposit = await this.contract?.maxPerUserDeposit();
    return maxPerUserDeposit;
  }

  /**
   * Gets the minimum deposit amount per user allowed by the contract.
   * @returns Promise of type BigNumber representing the minimum deposit amount value.
   */
  public async getMinDepositAmount(): Promise<BigNumber> {
    const minDepositAmount = await this.contract?.minDepositAmount();
    return minDepositAmount;
  }

  /**
   * Gets the staking end time of the contract.
   * @returns Promise of type string representing the staking end time value.
   */
  public async getStakingEndTime(): Promise<string> {
    const stakingEndTime = await this.contract?.stakingEndTime();
    return stakingEndTime;
  }

  /**
   * Retrieves the total reward amount set by the contract.
   * @returns A Promise of type BigNumber representing the total reward value.
   */
  public async getTotalReward(): Promise<BigNumber> {
    const totalReward = await this.contract?.totalReward();
    return totalReward;
  }

  /**
   * Retrieves the total deposit amount made by all the users in the contract.
   * @returns A Promise of type BigNumber representing the total deposit value.
   */
  public async getTotalDeposit(): Promise<BigNumber> {
    const totalDeposit = await this.contract?.totalDeposit();
    return totalDeposit;
  }

  /**
   * Asynchronous function that retrieves the reward per block value from a smart contract, if available, and returns it as a Promise of type BigNumber.
   * @returns Promise of type BigNumber representing the reward per block value.
   */
  public async getRewardPerBlock(): Promise<BigNumber> {
    const rewardPerBlock = await this.contract?.rewardPerBlock();
    return rewardPerBlock;
  }
}

export default StakingContract;
export { StakingContract };
