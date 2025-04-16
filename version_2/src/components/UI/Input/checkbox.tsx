/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

interface ICheckboxInputProps {
  label: string | ReactNode;
  value: boolean;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
  onChange: (e: any) => void;
}

const CheckboxInput: FC<ICheckboxInputProps> = ({
  label,
  inputAttributes,
  value,
  onChange,
}) => (
    <div
      className={cn(css.checkbox, 'CheckboxInput_component', {
        _isChecked: value,
      })}
    >
      <label className={css.checkbox_body}>
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          {...inputAttributes}
        />
        <span className={css.checkbox_label}>{label}</span>
      </label>
    </div>
  );

export default CheckboxInput;
