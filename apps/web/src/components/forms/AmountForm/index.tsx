import getValidationSchema, { FormValues } from './validationSchema';
import { Form, Formik, FormikConfig, FormikHelpers, FormikProps } from 'formik';
import useIsMounted from 'hooks/common/useIsMounted';
import React from 'react';


export * from './validationSchema';

export interface AmountFormProps
  extends Omit<FormikConfig<FormValues>, 'onSubmit' | 'initialValues'> {
  onSubmit: (value: string) => Promise<unknown>;
  children: (formProps: FormikProps<FormValues>) => React.ReactNode;
  initialAmount?: FormikConfig<FormValues>['initialValues']['amount'];
  maxAmount?: FormikConfig<FormValues>['initialValues']['amount'];
  className?: string;
}

export const AmountForm: React.FC<AmountFormProps> = ({
  children,
  onSubmit,
  className,
  initialAmount = '',
  maxAmount,
}) => {
  const isMounted = useIsMounted();

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    if (values.amount) {
      await onSubmit(values.amount.trim());
    }

    if (values.amount && isMounted()) {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        amount: initialAmount,
      }}
      onSubmit={handleSubmit}
      validationSchema={getValidationSchema(maxAmount)}
      isInitialValid={false}
      validateOnMount
      validateOnChange
    >
      {(formikProps) => (
        <Form className={className}>{children(formikProps)}</Form>
      )}
    </Formik>
  );
};