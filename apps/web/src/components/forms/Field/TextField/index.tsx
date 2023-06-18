import { Input } from 'components/ui';
import { cn } from 'lib/utils';
import { parseInt, startsWith } from 'lodash';
import React, { InputHTMLAttributes } from 'react';
import { Token } from 'types';


export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  description?: string | React.ReactElement;
  leftIconSrc?: Token;
  rightAdornment?: React.ReactElement;
  isSmall?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  description,
  rightAdornment,
  onChange,
  max,
  min,
  type,
  disabled,
  ...inputProps
}) => {
  const handleChange: InputHTMLAttributes<HTMLInputElement>['onChange'] = (
    e
  ) => {
    let safeValue = e.currentTarget.value;

    if (type === 'number' && startsWith(safeValue, '.')) {
      safeValue = `0${safeValue}`;
    }

    const followsMaxRule =
      !safeValue ||
      max === undefined ||
      type !== 'number' ||
      parseInt(safeValue, 10) <= +max;

    const followsMinRule =
      !safeValue ||
      min === undefined ||
      type !== 'number' ||
      parseInt(safeValue, 10) >= +min;

    if (onChange && followsMaxRule && followsMinRule) {
      onChange(e);
    }
  };

  return (
    <>
      <div className='relative flex items-center justify-center'>
        <Input
          className={cn(
            'px-0 z-0 flex w-full border-0 text-[30px] text-black placeholder:text-black focus:outline-none disabled:cursor-not-allowed disabled:bg-transparent',
            className
          )}
          autoComplete='off'
          max={max}
          min={min}
          onChange={handleChange}
          type={type}
          disabled={disabled}
          {...inputProps}
        />
        <div className='flex'>{rightAdornment}</div>
      </div>
      {!!description && <>{description}</>}
    </>
  );
};