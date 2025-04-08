import Header from 'components/Header';
import React, { FC } from 'react';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import SectionsGrid from 'components/SectionsGrid';
import HowImg from 'assets/how.webp';
import css from './styles.module.scss';

const Home: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className={css.home}>
        <div className="container">
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
          <SectionsGrid>
            <section className={css.how}>
              <div className={css.section_title}>{t(`how.title`)}</div>
              <div className={css.section_desc}>{t(`how.desc`)}</div>
              <div className={css.how_info}>
                <div className={css.how_items}>
                  <div className={css.how_item}>
                    <strong>{t(`how.item_title_1`)}</strong>
                    <span>{t(`how.item_text_1`)}</span>
                  </div>
                  <div className={css.how_item}>
                    <strong>{t(`how.item_title_2`)}</strong>
                    <span>{t(`how.item_text_2`)}</span>
                  </div>
                </div>
                <img src={HowImg} alt="" className={css.how_img} />
                <div className={css.how_items}>
                  <div className={css.how_item}>
                    <strong>{t(`how.item_title_3`)}</strong>
                    <span>{t(`how.item_text_3`)}</span>
                  </div>
                  <div className={css.how_item}>
                    <strong>{t(`how.item_title_4`)}</strong>
                    <span>{t(`how.item_text_4`)}</span>
                  </div>
                </div>
              </div>
            </section>
          </SectionsGrid>
        </div>
      </div>
    </>
  );
};

export default Home;
