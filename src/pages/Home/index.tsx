/* eslint-disable react/jsx-curly-brace-presence */
import Header from 'components/Header';
import React, { FC } from 'react';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionsGrid from 'components/SectionsGrid';
import whyImg_1 from 'assets/why_1.webp';
import whyImg_2 from 'assets/why_2.webp';
import whyImg_3 from 'assets/why_3.webp';
import Accent from 'components/Sections/Accent';
import How from 'components/Sections/How';
import cn from 'classnames';
import tools_1 from 'assets/tools_1.webp';
import tools_2 from 'assets/tools_2.webp';
import tools_3 from 'assets/tools_3.webp';
import css from './styles.module.scss';

const Home: FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className={css.home}>
        <div className="container">
          <Accent />
          <SectionsGrid>
            <How />
            <section className={css.why}>
              <div className="section_title">{t(`why.title`)}</div>
              <div className="section_desc">{t(`why.desc`)}</div>
              <div className={css.why_grid}>
                <div className={css.why_item}>
                  <img src={whyImg_1} alt="whyImg_1" />
                  <strong> {t(`why.item_title_1`)}</strong>
                  <span>{t(`why.item_text_1`)}</span>
                </div>
                <div className={css.why_item}>
                  <img src={whyImg_2} alt="whyImg_2" />
                  <strong> {t(`why.item_title_2`)}</strong>
                  <span>{t(`why.item_text_2`)}</span>
                </div>
                <div className={css.why_item}>
                  <img src={whyImg_3} alt="whyImg_3" />
                  <strong> {t(`why.item_title_3`)}</strong>
                  <span>{t(`why.item_text_3`)}</span>
                </div>
              </div>
              <div className={css.why_btn}>
                <Button type="green" onClick={() => history.push('/auth')}>
                  {t(`try_free_ver`)}
                </Button>
              </div>
            </section>
          </SectionsGrid>
        </div>
        <section className={css.tools}>
          <div className={cn('container', css.tools_container)}>
            <div className="section_title">{t(`tools.title`)}</div>
            <div className="section_desc">{t(`tools.desc`)}</div>
            <div className={css.tools_content}>
              <div className={cn(css.tools_item, '')}>
                <div className={css.tools_itemText}>
                  <div className={css.tools_itemTitle}>
                    {t(`tools.item_1_1`)}
                  </div>
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
                <img
                  src={tools_1}
                  alt={tools_1}
                  className={css.tools_itemImg}
                />
                <div className={css.tools_phoneTitle}>
                  {t(`tools.item_1_1`)}
                </div>
              </div>
              <div className={cn(css.tools_item, '_isRevert')}>
                <div className={css.tools_itemText}>
                  <div className={css.tools_itemTitle}>
                    {t(`tools.item_2_1`)}
                  </div>
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

                <img
                  src={tools_2}
                  alt={tools_2}
                  className={css.tools_itemImg}
                />
                <div className={css.tools_phoneTitle}>
                  {t(`tools.item_2_1`)}
                </div>
              </div>
              <div className={cn(css.tools_item, '')}>
                <div className={css.tools_itemText}>
                  <div className={css.tools_itemTitle}>
                    {t(`tools.item_3_1`)}
                  </div>
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
                <img
                  src={tools_3}
                  alt={tools_3}
                  className={css.tools_itemImg}
                />
                <div className={css.tools_phoneTitle}>
                  {t(`tools.item_3_1`)}
                </div>
              </div>
            </div>
            <div className={css.why_btn}>
              <Button type="green" onClick={() => history.push('/auth')}>
                {t(`try_free_ver`)}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
