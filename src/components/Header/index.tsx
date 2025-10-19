import React, { FC } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import Button from 'components/UI/Button';
import ChangeLanguage from 'components/UI/ChangeLanguage';
import { useTranslation } from 'react-i18next';
import { FiLogIn } from 'react-icons/fi';
import css from './styles.module.scss';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import i18n from '../../i18n';

const Header: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={css.header}>
      <div className={cn('container', css.header_container)}>
        <LogoSvg className={css.logo} />
        <div className={css.header_actions}>
          <ChangeLanguage />
          <div className={css.header_btns}>
            <Button onClick={() => navigate('/register')}>
              {t(`registrations`)}
            </Button>
            <Button type="blue" onClick={() => navigate('/auth')}>
              {i18n.t(`login`)}
            </Button>
          </div>
          <FiLogIn
            className={css.header_login}
            size={20}
            onClick={() => navigate('/auth')}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
