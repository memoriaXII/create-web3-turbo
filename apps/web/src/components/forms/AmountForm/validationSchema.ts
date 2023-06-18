import BigNumber from 'bignumber.js';
import * as yup from 'yup';


export type FormValues = yup.InferType<ReturnType<typeof getValidationSchema>>;

export enum ErrorCode {
  NOT_POSITIVE = 'NOT_POSITIVE', // value must be positive
  HIGHER_THAN_MAX = 'HIGHER_THAN_MAX', // value must be lower or equal to max
}

const getValidationSchema = (maxAmount?: string) =>
  yup.object({
    amount: yup
      .string()
      .required()
      .test(
        'isPositive',
        ErrorCode.NOT_POSITIVE,
        (value) => !!value && +value.replace(/,/g, '') > 0
      )
      .test(
        'isHigherThanMax',
        ErrorCode.HIGHER_THAN_MAX,
        (value) =>
          !value ||
          !maxAmount ||
          new BigNumber(value.replace(/,/g, '')).lte(new BigNumber(maxAmount))
      ),
  });

export default getValidationSchema;