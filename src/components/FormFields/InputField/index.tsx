import React from 'react'
import { at } from 'lodash'
import { useField } from 'formik'
import './input.scss'

export default function InputField(props: any) {
  const { errorText, type, readOnly, label, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <div className="input">
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <input type={type} disabled={readOnly} {...field} className={`input__field ${readOnly && 'input__noBorder'}`} />
      <p className="input__description">The title must contain a maximum of 400 characters</p>
      <span className="input__error">{meta.touched && meta.error}</span>
    </div>
  )
}
