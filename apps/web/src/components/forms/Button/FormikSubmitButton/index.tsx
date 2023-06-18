'use client';

import { Button, ButtonProps } from 'components/ui';
import { useFormikContext } from 'formik';

interface FormikSubmitButtonProps extends ButtonProps {
  disabledLabel?: string;
  enabledLabel: string;
}

export const FormikSubmitButton = ({
  disabledLabel,
  enabledLabel,
  isLoading,
  disabled,
  ...rest
}: Omit<FormikSubmitButtonProps, 'type'>) => {
  const { isValid } = useFormikContext();
  const showDisableLabel = !isValid;
  return (
    <Button
      className='flex w-full items-center justify-center rounded-full text-lg font-medium'
      type='submit'
      disabled={disabled || isLoading || !isValid}
      variant='default'
      size='xl'
      isLoading={isLoading}
      {...rest}
    >
      {isLoading
        ? `${enabledLabel}ing Asset...`
        : (showDisableLabel && disabledLabel) || enabledLabel}
    </Button>
  );
};
