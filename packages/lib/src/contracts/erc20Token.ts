import BaseContract from './baseContract';

import { ContractProps } from '../types/contract';

class ERC20TokenContract extends BaseContract {
  /**
   * The address of the erc20 contract.
   */
  public address?: string;

  /**
   * Constructs a new ERC20 token contract instance.
   * @param {ContractProps} props - The contract properties including the contract address, ABI, and signer.
   */
  constructor(props: ContractProps) {
    super(props);
    this.address = props.address;
  }

  /**
   * Returns the balance of the specified address.
   * @param address The address to check the balance of.
   * @returns Promise of type string representing the balance.
   */
  public async balanceOf(address: string): Promise<string> {
    const b = await this.contract?.balanceOf(address);
    return b;
  }

  /**
   * Returns the symbol of the token.
   * @returns Promise of type string representing the symbol.
   */
  public async symbol(): Promise<string> {
    return this.contract?.symbol();
  }

  /**
   * Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.
   * @param owner The address that owns the tokens.
   * @param spender The address that is allowed to spend the tokens.
   * @returns Promise of type string representing the allowed amount.
   */
  public async allowance(owner: string, spender: string): Promise<string> {
    return this.contract?.allowance(owner, spender);
  }

  /**
   * Increases the amount of tokens that the spender is allowed to spend on behalf of the owner.
   * @param spender The address that is allowed to spend the tokens.
   * @param addedValue The amount of tokens to add to the allowed amount.
   * @returns Promise of type void.
   */
  public async increaseAllowance(spender: string, addedValue: string): Promise<void> {
    const method = this.contract?.increaseAllowance(spender, addedValue);
    return method;
  }

  /**
   * Allows the spender to withdraw from the owner's account, multiple times, up to the value amount.
   * @param spender The address that is allowed to spend the tokens.
   * @param value The amount of tokens to be spent.
   * @returns Promise of type void.
   */
  public async approve(spender: string, value: string): Promise<void> {
    const method = this.contract?.approve(spender, value);
    return method;
  }
}

export default ERC20TokenContract;
export { ERC20TokenContract };
