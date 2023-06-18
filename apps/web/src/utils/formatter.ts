import { ClassValue, clsx } from 'clsx';
import { format as d3format } from 'd3-format';
import { ethers } from 'ethers';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const isContractAddress = (address: string) => ethers.utils.isAddress(address);

const displayAddress = (
  address = '',
  startOffset = 6,
  endOffset = 6
): string => {
  if (!address) return '--';
  if (!isContractAddress(address)) {
    if (address.length <= startOffset + endOffset) return address;
    return `${address.slice(0, startOffset)}...`;
  }

  return `${address.slice(0, startOffset)}...${address.slice(-endOffset)}`;
};

const formatNumberWithCommas = (value: string) => {
  const numericValue = parseFloat(value.replace(/,/g, ''));
  if (isNaN(numericValue)) {
    return '';
  }
  const truncatedValue = Math.floor(numericValue * 100) / 100; // Truncate to 2 decimal places
  const formattedValue = truncatedValue.toLocaleString();
  return formattedValue;
};

const displayFloat = (
  value: number,
  decimals = 4,
  isCurrency?: boolean,
  isRoundUp = false
): string => {
  if (value === 0) return '$0.0';
  const formattedValue = isRoundUp
    ? value
    : Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  return value === undefined
    ? '--'
    : isCurrency
    ? `$${d3format(`,.${decimals}f`)(formattedValue)}`
    : d3format(`,.${decimals}f`)(formattedValue);
};

export { cn, displayAddress, formatNumberWithCommas, displayFloat };