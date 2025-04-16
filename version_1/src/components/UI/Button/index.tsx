import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

type TFColors = 'blue' | 'green' | 'outline';

interface IButtonProps {
  children: ReactNode | string;
  type?: TFColors;
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, type, className, onClick }) => (
  <button
    className={cn(css.btn, 'btn_component', className, {
      _isBlue: type === 'blue',
      _isGreen: type === 'green',
      _isOutline: type === 'outline',
    })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
