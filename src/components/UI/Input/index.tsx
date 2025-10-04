/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

type TFInputProps = {
  value: string;
  label?: string | ReactNode;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: any) => void
};

const Input: FC<TFInputProps> = ({
  value,
  label,
  inputAttributes,
  onChange,
}) => (
    <div className={cn(css.input, 'input_component')}>
      {label && <label>{label}</label>}
      <input type="text" value={value} {...inputAttributes} onChange={onChange}/>
    </div>
  );

export default Input;
