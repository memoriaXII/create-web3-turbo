import { network } from 'hardhat';

export const advanceBlock = async (secondsElaspse: number) => {
  await network.provider.send('evm_mine');
  await network.provider.send('evm_increaseTime', [secondsElaspse]);
  console.log('\n  >>>>  advance time ' + secondsElaspse / 86400 + ' days  >>>>\n');
};
