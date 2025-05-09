import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Video from 'components/UI/Video';
import videoFile from 'assets/video3.mp4';
import css from './styles.module.scss';

const How: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={css.how}>
      <div className="section_title">{t(`how.title`)}</div>
      <div className="section_desc">{t(`how.desc`)}</div>
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
        <div className={css.how_img}>
          <Video>
            <video autoPlay muted loop>
              <source src={videoFile} type="video/mp4" />
              <span>Ваш браузер не поддерживает встроенные видео :(</span>
            </video>
          </Video>
        </div>
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
  );
};

export default How;
