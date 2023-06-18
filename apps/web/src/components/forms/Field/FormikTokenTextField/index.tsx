'use client';

import { TokenTextField, TokenTextFieldProps } from '../TokenTextField';
import { useField } from 'formik';
import React from 'react';
import { formatNumberWithCommas } from 'utils/formatter';


interface FormikTokenTextFieldProps
  extends Omit<TokenTextFieldProps, 'name' | 'onChange' | 'value'> {
  name: string;
  displayableErrorCodes?: string[];
}

export const FormikTokenTextField = ({
  name,
  ...rest
}: FormikTokenTextFieldProps) => {
  const [{ value, onBlur }, { error }, { setValue }] = useField(name);
  const onChange = (val: string) => {
    const formattedVal = formatNumberWithCommas(val);
    setValue(formattedVal);
  };
  return (
    <TokenTextField
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );
};