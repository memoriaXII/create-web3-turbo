import { VError, VErrorPhraseMap } from './VError';
import {
  ComptrollerErrorReporterError,
  ComptrollerErrorReporterFailureInfo,
  TokenErrorReporterError,
  TokenErrorReporterFailureInfo,
  VaiControllerErrorReporterError,
  VaiControllerErrorReporterFailureInfo,
} from 'constants/contracts/errorReporter';
import { TransactionReceipt } from 'types/common';

const checkForTransactionError = (
  receipt: TransactionReceipt,
  errorEnum:
    | typeof ComptrollerErrorReporterError
    | typeof TokenErrorReporterError
    | typeof VaiControllerErrorReporterError,
  infoEnum:
    | typeof ComptrollerErrorReporterFailureInfo
    | typeof TokenErrorReporterFailureInfo
    | typeof VaiControllerErrorReporterFailureInfo
) => {
  if (receipt.events?.Failure) {
    const { error, info } = receipt.events?.Failure.returnValues;
    throw new VError({
      type: 'transaction',
      code: errorEnum[error] as VErrorPhraseMap['transaction'],
      data: {
        error: errorEnum[error] as VErrorPhraseMap['transaction'],
        info: infoEnum[info] as VErrorPhraseMap['transaction'],
      },
    });
  }
  return receipt;
};

export const checkForComptrollerTransactionError = (
  receipt: TransactionReceipt
) =>
  checkForTransactionError(
    receipt,
    ComptrollerErrorReporterError,
    ComptrollerErrorReporterFailureInfo
  );

export const checkForTokenTransactionError = (receipt: TransactionReceipt) =>
  checkForTransactionError(
    receipt,
    TokenErrorReporterError,
    TokenErrorReporterFailureInfo
  );

export const checkForVaiControllerTransactionError = (
  receipt: TransactionReceipt
) =>
  checkForTransactionError(
    receipt,
    VaiControllerErrorReporterError,
    VaiControllerErrorReporterFailureInfo
  );
