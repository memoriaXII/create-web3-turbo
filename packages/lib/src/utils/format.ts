import { BigNumber, BigNumberish, ethers } from 'ethers';

const expandTo18Decimals = (n: number): BigNumber => {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(18));
};

const convertToHex = (value: string | number, decimalUnit?: BigNumberish): string => {
  const stringValue = value + '';
  const weiValue = ethers.utils.parseUnits(stringValue, decimalUnit);
  return ethers.utils.hexlify(weiValue);
};

const convertBNtoTokens = (value: BigNumber, decimals?: number): number => {
  const decimalBN = ethers.BigNumber.from(10).pow(ethers.BigNumber.from(decimals || 18));
  const numberValue = ethers.BigNumber.from(value).div(decimalBN).toNumber();
  const modValue = ethers.BigNumber.from(value).mod(decimalBN).toString();
  const floatingValue = +((modValue as any) / Math.pow(10, decimals || 18)).toFixed(6);
  return numberValue + floatingValue;
};

export { expandTo18Decimals, convertToHex, convertBNtoTokens };
