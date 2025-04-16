import AuthWrapper from 'components/AuthWrapper';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import React, { FC, useState } from 'react';
import { ReactComponent as GoogleSvg } from 'assets/google.svg';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import css from './styles.module.scss';

type TFStateForm = {
  email: string;
  phone: string;
  nik: string;
  password: string;
  confirmPassword: string;
};

const Registration: FC = () => {
  const { t } = useTranslation();
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
      title={t(`auth.reg`)}
      inputs={
        <>
          <Input
            label={t(`auth.email`)}
            value={formValues.email}
            onChange={(e) => handleChangeValues(e, 'email')}
            inputAttributes={{
              type: 'email',
            }}
          />
          <Input
            label={t(`auth.phone_req`)}
            value={formValues.phone}
            onChange={(e) => handleChangeValues(e, 'phone')}
          />
          <Input
            label={t(`auth.tg_nik`)}
            value={formValues.nik}
            onChange={(e) => handleChangeValues(e, 'nik')}
          />
          <Input
            label={t(`auth.password`)}
            value={formValues.password}
            onChange={(e) => handleChangeValues(e, 'password')}
            inputAttributes={{
              type: 'password',
            }}
          />
          <Input
            label={t(`auth.confirm_pass`)}
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
          <Button type="green">{t(`auth.register`)}</Button>
          <Button type="outline" className={css.googlebtn}>
            <GoogleSvg />
            <span>{t(`auth.title`)}</span>
          </Button>
          <Button
            type="outline"
            className={css.back}
            onClick={() => history.goBack()}
          >
            {t(`back`)}
          </Button>
        </>
      }
    />
  );
};

export default Registration;
