import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import Video from 'components/UI/Video';
import videoFile1 from 'assets/video1.mp4';
import videoFile3 from 'assets/video3.mp4';
import videoFile2 from 'assets/video2.mp4';
import css from './styles.module.scss';

const Tools: FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <section className={css.tools}>
      <div className={cn('container', css.tools_container)}>
        <div className="section_title">{t(`tools.title`)}</div>
        <div className="section_desc">{t(`tools.desc`)}</div>
        <div className={css.tools_content}>
          <div className={cn(css.tools_item, '')}>
            <div className={css.tools_itemText}>
              <div className={css.tools_itemTitle}>{t(`tools.item_1_1`)}</div>
              <p>
                <span>{t(`tools.item_1_2`)}</span>
                <ul>
                  <li> {t(`tools.item_1_3`)}</li>
                  <li>{t(`tools.item_1_4`)}</li>
                  <li> {t(`tools.item_1_5`)}</li>
                </ul>
              </p>
              <p>
                <strong> {t(`tools.item_1_6`)}</strong>
                <ul>
                  <li>{t(`tools.item_1_7`)}</li>
                  <li>{t(`tools.item_1_8`)}</li>
                  <li>{t(`tools.item_1_9`)}</li>
                </ul>
              </p>
              <p className={css.blue_block}>
                <strong> {t(`tools.example`)}</strong>
                <span>{t(`tools.item_1_10`)}</span>
              </p>
            </div>
            <div className={css.tools_itemImg}>
              <Video>
                <video autoPlay muted loop>
                  <source src={videoFile1} type="video/mp4" />
                  <span>Ваш браузер не поддерживает встроенные видео :(</span>
                </video>
              </Video>
            </div>
            <div className={css.tools_phoneTitle}>{t(`tools.item_1_1`)}</div>
          </div>
          <div className={cn(css.tools_item, '_isRevert')}>
            <div className={css.tools_itemText}>
              <div className={css.tools_itemTitle}>{t(`tools.item_2_1`)}</div>
              <p>
                <span>{t(`tools.item_2_2`)}</span>
                <ul>
                  <li>{t(`tools.item_2_3`)}</li>
                  <li> {t(`tools.item_2_4`)}</li>
                  <li> {t(`tools.item_2_5`)}</li>
                </ul>
              </p>
              <p className={css.blue_block}>
                <strong>{t(`tools.example`)}</strong>
                <span>{t(`tools.item_2_6`)}</span>
              </p>
              <p>
                <strong> {t(`tools.item_2_7`)}</strong>
                <ul>
                  <li> {t(`tools.item_2_8`)}</li>
                  <li> {t(`tools.item_2_9`)}</li>
                  <li> {t(`tools.item_2_10`)}</li>
                </ul>
              </p>
            </div>
            <div className={css.tools_itemImg}>
              <Video>
                <video autoPlay muted loop>
                  <source src={videoFile2} type="video/mp4" />
                  <span>Ваш браузер не поддерживает встроенные видео :(</span>
                </video>
              </Video>
            </div>
            <div className={css.tools_phoneTitle}>{t(`tools.item_2_1`)}</div>
          </div>
          <div className={cn(css.tools_item, '')}>
            <div className={css.tools_itemText}>
              <div className={css.tools_itemTitle}>{t(`tools.item_3_1`)}</div>
              <p>
                <span>{t(`tools.item_3_2`)}</span>
              </p>
              <p>
                <strong> {t(`tools.item_3_3`)}</strong>
                <ul>
                  <li>{t(`tools.item_3_4`)}</li>
                  <li>{t(`tools.item_3_5`)}</li>
                  <li>{t(`tools.item_3_6`)}</li>
                </ul>
              </p>
              <p className={css.blue_block}>
                <strong> {t(`tools.example`)}</strong>
                <span>{t(`tools.item_3_7`)}</span>
              </p>
            </div>
            <div className={css.tools_itemImg}>
              <Video>
                <video autoPlay muted loop>
                  <source src={videoFile3} type="video/mp4" />
                  <span>Ваш браузер не поддерживает встроенные видео :(</span>
                </video>
              </Video>
            </div>
            <div className={css.tools_phoneTitle}>{t(`tools.item_3_1`)}</div>
          </div>
        </div>
        <div className={css.tools_info}>
          <span>Arbitrage Scanner не работает с вашими деньгами,</span> мы не подключаемся по
          API к балансам ваших бирж, вы нигде не подключаете свои кошельки.
          Полностью ручной бот, который работает в облаке, для безопасности
          ваших денег.
        </div>
        <div className={css.tools_btn}>
          <Button type="green" onClick={() => history.push('/auth')}>
            {t(`try_free_ver`)}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
