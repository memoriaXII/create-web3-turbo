import { TextField, TextFieldProps } from '../TextField';
import BigNumber from 'bignumber.js';
import React, { FC, useMemo } from 'react';
import { Token } from 'types';


export interface TokenTextFieldProps
  extends Omit<TextFieldProps, 'onChange' | 'value' | 'max' | 'min'> {
  token: Token;
  value: string;
  onChange: (newValue: string) => void;
  rightMaxButton?: {
    label: string;
    valueOnClick: string;
  };
  displayTokenIcon?: boolean;
  max?: string;
}

export const TokenTextField: FC<TokenTextFieldProps> = ({
  token,
  rightMaxButton,
  onChange,
  disabled,
  max,
  displayTokenIcon = true,
  ...otherProps
}) => {
  const step = useMemo(() => {
    const tmpOneTokenInWei = new BigNumber(10).pow(token?.decimals);
    const tmpOneWeiInTokens = new BigNumber(1).dividedBy(tmpOneTokenInWei);

    return tmpOneWeiInTokens.toFixed();
  }, [token?.decimals]);

  const setMaxValue = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleChange: TextFieldProps['onChange'] = ({
    currentTarget: { value },
  }) => {
    // Forbid values with more decimals than the token provided supports
    const valueDecimals = value.includes('.') ? value.split('.')[1].length : 0;

    if (valueDecimals <= token.decimals) {
      onChange(value);
    }
  };

  return (
    <TextField
      placeholder='0.00'
      min={0}
      max={max}
      step={step}
      onChange={handleChange}
      type='text'
      leftIconSrc={displayTokenIcon ? token : undefined}
      rightAdornment={
        rightMaxButton ? (
          <button
            className='absolute bottom-2.5 right-2.5 z-10 flex rounded-full border border-[#646464] px-4 py-2 text-sm font-medium text-[#646464] focus:outline-none '
            type='button'
            onClick={() => setMaxValue(rightMaxButton.valueOnClick)}
            disabled={disabled}
          >
            {rightMaxButton.label}
          </button>
        ) : undefined
      }
      disabled={disabled}
      {...otherProps}
    />
  );
};