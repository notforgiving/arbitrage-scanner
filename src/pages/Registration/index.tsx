import AuthWrapper from 'components/AuthWrapper';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import React, { FC, useState } from 'react';
import { ReactComponent as GoogleSvg } from 'assets/google.svg';
import { useHistory } from 'react-router-dom';
import css from './styles.module.scss';

type TFStateForm = {
  email: string;
  phone: string;
  nik: string;
  password: string;
  confirmPassword: string;
};

const Registration: FC = () => {
  const history = useHistory();
  const [formValues, setFormValue] = useState<TFStateForm>({
    email: '',
    phone: '',
    nik: '',
    password: '',
    confirmPassword: '',
  });
  const handleChangeValues = (e: any, key: string) => {
    setFormValue({
      ...formValues,
      [key]: e.target.value,
    });
  };
  return (
    <AuthWrapper
      title="Регистрация"
      inputs={
        <>
          <Input
            label="Email"
            value={formValues.email}
            onChange={(e) => handleChangeValues(e, 'email')}
            inputAttributes={{
              type: 'email',
            }}
          />
          <Input
            label="Телефон"
            value={formValues.phone}
            onChange={(e) => handleChangeValues(e, 'phone')}
          />
          <Input
            label="Telegram-никнейм или номер WhatsApp"
            value={formValues.nik}
            onChange={(e) => handleChangeValues(e, 'nik')}
          />
          <Input
            label="Пароль"
            value={formValues.password}
            onChange={(e) => handleChangeValues(e, 'password')}
            inputAttributes={{
              type: 'password',
            }}
          />
          <Input
            label="Подтверждение пароля"
            value={formValues.confirmPassword}
            onChange={(e) => handleChangeValues(e, 'confirmPassword')}
            inputAttributes={{
              type: 'password',
            }}
          />
        </>
      }
      actions={
        <>
          <Button type="green">Зарегистрироваться</Button>
          <Button type="outline" className={css.googlebtn}>
            <GoogleSvg />
            <span>Google регистрация</span>
          </Button>
          <Button
            type="outline"
            className={css.back}
            onClick={() => history.push('/')}
          >
            Назад
          </Button>
        </>
      }
    />
  );
};

export default Registration;
