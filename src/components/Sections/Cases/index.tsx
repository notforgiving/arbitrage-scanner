import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import cases_1 from 'assets/cases_1.webp';
import cases_2 from 'assets/cases_2.webp';
import cases_3 from 'assets/cases_3.webp';
import css from './styles.module.scss';

const Cases: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.cases}>
      <div className="section_title">{t(`cases.title`)}</div>
      <div className="section_desc">{t(`cases.desc`)}</div>
      <div className={css.cases_items}>
        <div className={css.item}>
          <img src={cases_1} alt={cases_1} className={css.item_img} />
          <div className={css.item_content}>
            <div className={css.item_title}>{t(`cases.item_1_1`)}</div>
            <div className={css.item_text}>
              <p>{t(`cases.item_1_2`)}</p>
              <p> {t(`cases.item_1_3`)}</p>
            </div>
            <div className={css.item_result}>
              <strong> {t(`cases.resilt`)}</strong>
              <span>
                <Trans
                  i18nKey="cases.item_1_4"
                  components={{ span: <span className="blue" /> }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={css.item}>
          <img src={cases_2} alt={cases_2} className={css.item_img} />
          <div className={css.item_content}>
            <div className={css.item_title}>{t(`cases.item_2_1`)}</div>
            <div className={css.item_text}>
              <p>{t(`cases.item_2_2`)}</p>
              <p> {t(`cases.item_2_3`)}</p>
            </div>
            <div className={css.item_result}>
              <strong>{t(`cases.resilt`)}</strong>
              <span>
                <Trans
                  i18nKey="cases.item_2_4"
                  components={{ span: <span className="blue" /> }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className={css.item}>
          <img src={cases_3} alt={cases_3} className={css.item_img} />
          <div className={css.item_content}>
            <div className={css.item_title}>{t(`cases.item_3_1`)}</div>
            <div className={css.item_text}>
              <p>{t(`cases.item_3_2`)}</p>
              <p>{t(`cases.item_3_3`)}</p>
            </div>
            <div className={css.item_result}>
              <strong>{t(`cases.resilt`)}</strong>
              <span>
                <Trans
                  i18nKey="cases.item_3_4"
                  components={{ span: <span className="blue" /> }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
