import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract } from 'ethers';
import { Result } from 'ethers/lib/utils';
import { ethers, upgrades } from 'hardhat';

export async function upgradeContract(
  upgraderAddress: string,
  contractName: string,
  proxyAddress: string,
): Promise<Contract> {
  console.log(`upgrade proxy: ${proxyAddress} to contract: ${contractName} as account: ${upgraderAddress}`);
  const contractFactory = await ethers.getContractFactory(contractName);
  const upgradedContract = await upgrades.upgradeProxy(proxyAddress, contractFactory, { kind: 'uups' });
  console.log(`contract ${contractName} deployed with address ${upgradedContract.address}`);
  return upgradedContract;
}

export async function deployContract(contractName: string, args: unknown[], isSilent?: boolean): Promise<Contract> {
  if (!isSilent) {
    console.log(`deploy contract: ${contractName} with args:`, ...args);
  }

  const contractFactory = await ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy(...args);
  const data = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format('json') as string),
  };
  // fs.writeFileSync(`${__dirname}/generated/${contractName}.json`, JSON.stringify(data));

  if (!isSilent) {
    console.log(`contract ${contractName} deployed with address ${contract.address}`);
  }

  return contract;
}

export async function deployContractWithDeployer(
  deployer: SignerWithAddress,
  contractName: string,
  args: unknown[],
  isSilent?: boolean,
): Promise<Contract> {
  if (!isSilent) {
    console.log(`deploy contract: ${contractName} with args:`, ...args);
  }

  const contractFactory = await ethers.getContractFactory(contractName, deployer);
  const contract = await contractFactory.deploy(...args);
  const data = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format('json') as string),
  };
  // fs.writeFileSync(`${__dirname}/generated/${contractName}.json`, JSON.stringify(data));

  if (!isSilent) {
    console.log(`contract ${contractName} deployed with address ${contract.address}`);
  }

  return contract;
}

export async function deployUpgradeableContract(
  deployer: SignerWithAddress,
  contractName: string,
  args: unknown[],
  silient?: boolean,
): Promise<Contract> {
  if (!silient) {
    console.log(`deploy contract: ${contractName} as account: `, deployer.address, ` with args:`, ...args);
  }

  const contractFactory = await ethers.getContractFactory(contractName, deployer);
  const contract = await upgrades.deployProxy(contractFactory, args, { kind: 'uups' });
  const data = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format('json') as string),
  };

  if (!silient) {
    console.log(`contract ${contractName} deployed with address ${contract.address}`);
  }

  return contract;
}

/**
 * Using a loop to iterate all the topics to see if there are matching events
 */
export async function extractEventLoop(tx: any, eventName: string, eventInterfaceRaw: string): Promise<Result[]> {
  const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
  const eventInterface = new ethers.utils.Interface([eventInterfaceRaw]);
  const events = [];
  for (const log of receipt.logs) {
    const { topics, data } = log;
    try {
      const e = eventInterface.decodeEventLog(eventName, data, topics);
      events.push(e);
    } catch (e) {
      continue;
    }
  }
  return events;
}
