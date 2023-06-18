/* eslint-disable @typescript-eslint/restrict-plus-operands */
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { DateTimeFormat, ITimeDurationData } from 'types/common';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

//TODO: trim down function setup
const getTimeDuration = (secs: number): ITimeDurationData => {
  const secondsNumber = secs ? parseInt(String(secs), 10) : 0;
  const hours = Math.floor(secondsNumber / 3600);
  const minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  const seconds = secondsNumber - hours * 3600 - minutes * 60;
  let hoursStr = String(hours);
  let minutesStr = String(minutes);
  let secondsStr = String(seconds);
  if (hours < 10) {
    hoursStr = '0' + hours;
  }
  if (minutes < 10) {
    minutesStr = '0' + minutes;
  }
  if (seconds < 10) {
    secondsStr = '0' + seconds;
  }
  return { hoursStr, minutesStr, secondsStr };
};

const getTimeDisplay = (
  time: string | number,
  format: string = DateTimeFormat.FullDateTime
) => {
  if (!time) return '';
  return dayjs.utc(time).local().format(format);
};

const sliceDateString = (str: string) => {
  const year = str.substring(0, 4);
  const month = str.substring(4, 6);
  const day = str.substring(6, 8);
  return `${year}/${month}/${day}`;
};

const getRelativeTime = (time: number | string = '') => {
  if (!time) return '';
  return dayjs.utc(time).fromNow();
};

const getExpiryDate = (
  createdTimestamp: string,
  leaseEnd: number,
  blockNumber: number
): string => {
  const expiryTimeNumber =
    +new Date(createdTimestamp) + 3000 * (leaseEnd - blockNumber);
  return dayjs.utc(expiryTimeNumber).local().format('DD/MMM/YYYY HH:mm');
};

const getExpiredTimestamp = (expireDate?: string): number => {
  if (!expireDate) return 0;
  const parsedDate =
    Date.parse(expireDate) / 1000 - new Date().getTimezoneOffset() * 60;
  return parsedDate - Math.floor(Date.now() / 1000);
};

export {
  getExpiryDate,
  getExpiredTimestamp,
  getTimeDuration,
  getTimeDisplay,
  getRelativeTime,
  sliceDateString,
};
