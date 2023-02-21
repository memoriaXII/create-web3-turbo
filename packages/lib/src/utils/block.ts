import { JsonRpcProvider } from '@ethersproject/providers';
import { network } from 'hardhat';

async function mineBlock(provider: JsonRpcProvider, timeOffset: number) {
  const now = Math.floor(new Date().getTime() / 1000);
  await provider.send('evm_mine', [now + timeOffset]);
  return now + timeOffset;
}

const advanceBlock = async (): Promise<void> => {
  await network.provider.send('hardhat_mine', ['0x100']);
};

export { mineBlock, advanceBlock };
