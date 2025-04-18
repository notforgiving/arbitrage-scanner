import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import css from './styles.module.scss';

const Why: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <section className={css.why}>
      <div className="section_title">{t(`why.title`)}</div>
      <div className="section_desc">{t(`why.desc`)}</div>
      <div className={css.why_grid}>
        <div className={css.why_item}>
          {/* <img src={whyImg_1} alt="whyImg_1" /> */}
          <div className={css.why_itemImg} />
          <div className={css.why_itemContent}>
            <strong> {t(`why.item_title_1`)}</strong>
            <span>{t(`why.item_text_1`)}</span>
          </div>
        </div>
        <div className={css.why_item}>
          {/* <img src={whyImg_2} alt="whyImg_2" /> */}
          <div className={css.why_itemImg} />
          <div className={css.why_itemContent}>
            <strong> {t(`why.item_title_2`)}</strong>
            <span>{t(`why.item_text_2`)}</span>
          </div>
        </div>
        <div className={css.why_item}>
          {/* <img src={whyImg_3} alt="whyImg_3" /> */}
          <div className={css.why_itemImg} />
          <div className={css.why_itemContent}>
            <strong> {t(`why.item_title_3`)}</strong>
            <span>{t(`why.item_text_3`)}</span>
          </div>
        </div>
        <div className={css.why_item}>
          {/* <img src={whyImg_3} alt="whyImg_3" /> */}
          <div className={css.why_itemImg} />
          <div className={css.why_itemContent}>
            <strong> {t(`why.item_title_4`)}</strong>
            <span>{t(`why.item_text_4`)}</span>
          </div>
        </div>
      </div>
      <div className={css.why_btn}>
        <Button type="green" onClick={() => history.push('/register')}>
          {t(`try_free_ver`)}
        </Button>
      </div>
    </section>
  );
};

export default Why;
