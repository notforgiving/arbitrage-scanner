import React, { FC, useState } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { ReactComponent as GoogleSvg } from 'assets/google.svg';
import { useHistory } from 'react-router-dom';
import AuthWrapper from 'components/AuthWrapper';
import css from './styles.module.scss';

type TFStateForm = {
  phone: string;
  nik: string;
};

const Login: FC = () => {
  const history = useHistory();
  const [formValues, setFormValue] = useState<TFStateForm>({
    phone: '',
    nik: '',
  });

  const handleChangeValues = (e: any, key: string) => {
    setFormValue({
      ...formValues,
      [key]: e.target.value,
    });
  };

  return (
    <AuthWrapper
      title="Google регистрация"
      inputs={
        <>
          <Input
            label="Телефон (не обязательно)"
            value={formValues.phone}
            onChange={(e) => handleChangeValues(e, 'phone')}
          />
          <Input
            label="Telegram-никнейм или номер WhatsApp"
            value={formValues.nik}
            onChange={(e) => handleChangeValues(e, 'nik')}
          />
        </>
      }
      actions={
        <>
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

export default Login;
