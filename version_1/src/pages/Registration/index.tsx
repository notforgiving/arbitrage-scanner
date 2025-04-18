/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import AuthWrapper from 'components/AuthWrapper';
import Button from 'components/UI/Button';
import Input from 'components/UI/Input';
import React, { FC, useState } from 'react';
import { ReactComponent as GoogleSvg } from 'assets/google.svg';
import { useHistory } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Thanks from 'components/Thanks';
import CheckboxInput from 'components/UI/Input/checkbox';
import css from './styles.module.scss';

type TFStateForm = {
  email: string;
  phone: string;
  nik: string;
  password: string;
  confirmPassword: string;
  policy: boolean;
  adds: boolean;
};

const Registration: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [thanks, setThanks] = useState<boolean>(false);
  const [formValues, setFormValue] = useState<TFStateForm>({
    email: '',
    phone: '',
    nik: '',
    password: '',
    confirmPassword: '',
    policy: false,
    adds: false,
  });
  const handleChangeValues = (e: any, key: string) => {
    setFormValue({
      ...formValues,
      [key]: e.target.value,
    });
  };

  const handleChangeCheckboxes = (key: keyof typeof formValues) => {
    setFormValue({
      ...formValues,
      [key]: !formValues[key],
    });
  };

  const handleShowThanks = () => {
    setThanks(true);
  };

  const handleCloseThanks = () => {
    setThanks(false);
    history.push('/');
  };

  return (
    <>
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
            <div className={css.checkbox}>
              <CheckboxInput
                label={
                  <Trans
                    i18nKey="auth.policy"
                    components={{
                      a1: <a href="" target="_blank" />,
                      a2: <a href="" target="_blank" />,
                      a3: <a href="" target="_blank" />,
                    }}
                  />
                }
                value={formValues.policy}
                onChange={() => handleChangeCheckboxes('policy')}
              />
            </div>
            <div className={css.checkbox}>
              <CheckboxInput
                label={t(`auth.adds`)}
                value={formValues.adds}
                onChange={() => handleChangeCheckboxes('adds')}
              />
            </div>
          </>
        }
        actions={
          <>
            <Button type="green" onClick={handleShowThanks}>
              {t(`auth.register`)}
            </Button>
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
      {thanks && <Thanks closeAction={handleCloseThanks} />}
    </>
  );
};

export default Registration;
