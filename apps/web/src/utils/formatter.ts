/* eslint-disable import/no-extraneous-dependencies */
import classNames, { Argument } from 'classnames';
import { ethers } from 'ethers';
import { twMerge } from 'tailwind-merge';

const cn = (...classes: Argument[]) => twMerge(classNames(...classes));

const isContractAddress = (address: string) => ethers.utils.isAddress(address);

const displayAddress = (
  address: string = '',
  startOffset: number = 4,
  endOffset: number = 4
): string => {
  if (!address) return '--';
  if (!isContractAddress(address)) {
    if (address.length <= startOffset + endOffset) return address;
    return `${address.slice(0, startOffset)}...`;
  }

  return `${address.slice(0, startOffset)}...${address.slice(-endOffset)}`;
};

export { cn, displayAddress };
