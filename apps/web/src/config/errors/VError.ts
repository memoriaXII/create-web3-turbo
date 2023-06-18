import { interactionErrorPhrases } from './interactionErrorPhrases';
import { transactionErrorPhrases } from './transactionErrorPhrases';
import { unexpectedErrorPhrases } from './unexpectedErrorPhrases';

export interface VErrorParamMap {
  transaction: {
    error: keyof typeof transactionErrorPhrases;
    info: keyof typeof transactionErrorPhrases;
  };
  unexpected: { message: string } | undefined;
  interaction: { assetName: string };
}

export interface VErrorPhraseMap {
  transaction: keyof typeof transactionErrorPhrases;
  unexpected: keyof typeof unexpectedErrorPhrases;
  interaction: keyof typeof interactionErrorPhrases;
}

export type ErrorCodes = keyof VErrorParamMap;

export class VError<E extends ErrorCodes> extends Error {
  data: VErrorParamMap[E] | undefined;

  type: E;

  code: VErrorPhraseMap[E];

  constructor({
    type,
    code,
    data,
  }: {
    type: E;
    code: VErrorPhraseMap[E];
    data?: VErrorParamMap[E];
  }) {
    super(code);
    this.type = type;
    this.code = code;
    this.data = data;
  }
}
