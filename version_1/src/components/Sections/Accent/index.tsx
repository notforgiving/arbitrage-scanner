import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import css from './styles.module.scss';

const Accent: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <section className={css.accent}>
      <div className={css.accent_content}>
        <h1 className={css.title}>
          <Trans i18nKey="main_title" components={{ bold: <strong /> }} />
        </h1>
        <div className={css.subtitle}>{t(`subtitle`)}</div>
        <Button
          type="green"
          className={css.btn}
          onClick={() => history.push('/auth')}
        >
          {t(`try_free_ver`)}
        </Button>
        <ul className={css.points}>
          <li>{t(`points1`)}</li>
          <li>{t(`points2`)}</li>
          <li>{t(`points3`)}</li>
        </ul>
      </div>
    </section>
  );
};

export default Accent;
