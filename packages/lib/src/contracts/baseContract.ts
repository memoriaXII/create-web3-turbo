import { Contract } from 'ethers';

import { ContractProps } from '../types/contract';

/**
 * The BaseContract class is used as a base class for other contracts to inherit from, and provides
 * a shared `contract` instance to communicate with the Ethereum network.
 */
class BaseContract {
  contract: Contract | null = null;

  /**
   * Constructs a BaseContract instance with the given properties.
   * @param props An object containing the contract address, ABI, and signer to use.
   */
  constructor(props: ContractProps) {
    const { address, abi, signer } = props;
    this.contract = new Contract(address, abi, signer);
  }
}

export default BaseContract;
export { BaseContract };
