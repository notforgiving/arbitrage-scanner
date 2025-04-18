import React, { FC } from 'react';
import { ReactComponent as TgSvg } from 'assets/tg.svg';
import { ReactComponent as WhupSvg } from 'assets/whup.svg';
import { ReactComponent as FaceBookSvg } from 'assets/facebook.svg';
import { Trans, useTranslation } from 'react-i18next';
import { FiX } from 'react-icons/fi';
import css from './styles.module.scss';

interface IThanksProps {
  closeAction: () => void;
}

const Thanks: FC<IThanksProps> = ({ closeAction }) => {
  const { t } = useTranslation();

  return (
    <div className={css.thanks}>
      <div className={css.thanks_body}>
        <div className={css.thanks_close} onClick={closeAction}>
          <FiX />
        </div>
        <div className={css.thanks_info}>
          <strong>{t(`thanks.title`)}</strong>
          <span>
            <Trans i18nKey="thanks.info" components={{ br: <br /> }} />
          </span>
        </div>
        <div className={css.thanks_contacts}>
          <a href="/" target="_blank">
            <TgSvg />
            <span>{t(`thanks.contact_1`)}</span>
          </a>
          <a href="/" target="_blank">
            <WhupSvg />
            <span>{t(`thanks.contact_2`)}</span>
          </a>
          <a href="/" target="_blank">
            <FaceBookSvg />
            <span>{t(`thanks.contact_3`)}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
