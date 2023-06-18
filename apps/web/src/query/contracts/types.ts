import { Bep20, VBep20 } from 'types/contracts';

export type TokenContract<T extends string = ''> = T extends 'xvs'
  ? Bep20
  : Bep20;

export type VTokenContract<T extends string> = T extends 'bnb'
  ? VBep20
  : VBep20;
