import React, { FC, useState } from 'react';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { ReactComponent as GoogleSvg } from 'assets/google.svg';
import { useNavigate } from 'react-router-dom';
import AuthWrapper from 'components/AuthWrapper';
import { useTranslation } from 'react-i18next';
import css from './styles.module.scss';

type TFStateForm = {
  phone: string;
  nik: string;
};

const Login: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      title={t(`auth.title`)}
      inputs={
        <>
          <Input
            label={t(`auth.phone`)}
            value={formValues.phone}
            onChange={(e) => handleChangeValues(e, 'phone')}
          />
          <Input
            label={t(`auth.tg_nik`)}
            value={formValues.nik}
            onChange={(e) => handleChangeValues(e, 'nik')}
          />
        </>
      }
      actions={
        <>
          <Button type="outline" className={css.googlebtn}  onClick={() => navigate('/register')}>
            <GoogleSvg />
            <span>{t(`auth.title`)}</span>
          </Button>
          <Button
            type="outline"
            className={css.back}
            onClick={() => navigate(-1)}
          >
            {t(`back`)}
          </Button>
        </>
      }
    />
  );
};

export default Login;
