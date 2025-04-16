import React, { FC, ReactNode } from 'react';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';
import css from './styles.module.scss';

interface IAuthWrapperProps {
  title: string;
  inputs: ReactNode;
  actions: ReactNode;
}

const AuthWrapper: FC<IAuthWrapperProps> = ({ title, inputs, actions }) => (
  <div className="container">
    <div className={css.login}>
      <div className={css.login_logo}>
        <LogoSvg />
      </div>
      <div className={css.login_form}>
        <div className={css.login_content}>
          <h1 className={css.title}>{title}</h1>
          <form action="" method="post" className={css.form}>
            <div className={css.inputs}>{inputs}</div>
            <div className={css.btns}>{actions}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default AuthWrapper;
