/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import cn from 'classnames';
import Tabs from 'components/UI/Tabs';
import { Trans, useTranslation } from 'react-i18next';
import Slider from 'components/UI/Slider';
import css from './styles.module.scss';
import { sliderImgs } from './sliderImgs';

const Sliders: FC = () => {
  const [selectSlider, setSelectSlider] = useState<number>(0);
  const [resetView, setResetView] = useState<boolean>(false);
  const changeSlider = (index: number) => {
    setSelectSlider(index);
    setResetView(!resetView);
  };
  const { t } = useTranslation();
  const slidersData = [
    [
      {
        icon: sliderImgs.slider_1,
        title: t(`sliders.slider_1_1_title`),
        link: '',
        text: t(`sliders.slider_1_1_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_2,
        title: t(`sliders.slider_1_2_title`),
        link: 'https://crypto.ru/arbitragescanner-luchshij-skaner-dlya-arbitrazha-kriptovalyut/',
        text: t(`sliders.slider_1_2_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_3,
        title: t(`sliders.slider_1_3_title`),
        link: '',
        text: t(`sliders.slider_1_3_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_4,
        title: t(`sliders.slider_1_4_title`),
        link: 'https://cryptonisation.com/obzor-arbitragescanner/',
        text: t(`sliders.slider_1_4_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_5,
        title: t(`sliders.slider_1_5_title`),
        link: '',
        text: t(`sliders.slider_1_5_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_6,
        title: t(`sliders.slider_1_6_title`),
        link: '',
        text: t(`sliders.slider_1_6_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_7,
        title: t(`sliders.slider_1_7_title`),
        link: '',
        text: t(`sliders.slider_1_7_text`),
        imgWidth: '',
      },
    ],
    [
      {
        icon: sliderImgs.slider_8,
        link: 'https://vc.ru/u/1008961-bitcoin-bard/767240-luchshie-boty-i-skanery-dlya-arbitrazha-kriptovalyut-v-2023-godu-top-6-servisov-dlya-torgovli#1',
        title: t(`sliders.slider_2_1_title`),
        text: t(`sliders.slider_2_1_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_8,
        link: '',
        title: t(`sliders.slider_2_2_title`),
        text: t(`sliders.slider_2_2_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_9,
        link: '',
        title: t(`sliders.slider_2_3_title`),
        text: t(`sliders.slider_2_3_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_9,
        link: '',
        title: t(`sliders.slider_2_3_title`),
        text: t(`sliders.slider_2_4_text`),
        imgWidth: '',
      },
      {
        icon: sliderImgs.slider_9,
        link: '',
        title: t(`sliders.slider_2_3_title`),
        text: t(`sliders.slider_2_5_text`),
        imgWidth: '',
      },
    ],
    [
      {
        icon: sliderImgs.slider_10,
        link: 'https://youtu.be/Gl_4O-5AvIA',
        title: t(`sliders.slider_3_1_title`),
        text: t(`sliders.slider_3_1_text`),
        imgWidth: 'wide',
      },
      {
        icon: sliderImgs.slider_11,
        link: 'https://youtu.be/hVmNBVBT_No',
        title: t(`sliders.slider_3_2_title`),
        text: t(`sliders.slider_3_2_text`),
        imgWidth: 'wide',
      },
      {
        icon: sliderImgs.slider_12,
        link: 'https://youtu.be/X6vd3dZMWSk',
        title: t(`sliders.slider_3_3_title`),
        text: t(`sliders.slider_3_3_text`),
        imgWidth: 'wide',
      },
      {
        icon: sliderImgs.slider_13,
        link: 'https://youtu.be/X609cTeSqm8',
        title: t(`sliders.slider_3_4_title`),
        text: t(`sliders.slider_3_4_text`),
        imgWidth: 'wide',
      },
    ],
    [
      {
        icon: sliderImgs.slider_14,
        link: '',
        title: t(`sliders.slider_4_1_title`),
        text: t(`sliders.slider_4_1_text`),
        imgWidth: 'wide',
      },
      {
        icon: sliderImgs.slider_15,
        link: '',
        title: t(`sliders.slider_4_2_title`),
        text: t(`sliders.slider_4_2_text`),
        imgWidth: 'wide',
      },
      {
        icon: sliderImgs.slider_16,
        link: 'https://arbitragescanner.io/linksRu.influencers.comment_3',
        title: t(`sliders.slider_4_3_title`),
        text: t(`sliders.slider_4_3_text`),
        imgWidth: 'wide',
      },
    ],
  ];
  const tabs = [
    t(`sliders.tabs_1`),
    t(`sliders.tabs_2`),
    t(`sliders.tabs_3`),
    t(`sliders.tabs_4`),
  ];

  return (
    <section className={css.sliders}>
      <div className={cn('section_title', css.sliders_title)}>
        {t(`sliders.title`)}
      </div>
      <div className={css.sliders_tabs}>
        <Tabs tabs={tabs} callback={changeSlider} />
      </div>
      {!!slidersData.length &&
        slidersData.length === tabs.length &&
        slidersData
          .filter((_, index) => index === selectSlider)
          .map((slider, index) => (
            <Slider
              key={`slider-${index}`}
              resetView={resetView}
              sliderItems={
                <>
                  {slider.map((item) => (
                    <div className={css.slider_item} key={item.text}>
                      <div className={css.slider_itemInfo}>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <img
                              src={item.icon}
                              alt={item.icon}
                              className={cn({
                                _isWide: item.imgWidth === 'wide',
                              })}
                            />
                          </a>
                        ) : (
                          <img
                            src={item.icon}
                            alt={item.icon}
                            className={cn({
                              _isWide: item.imgWidth === 'wide',
                            })}
                          />
                        )}
                        {item.link !== '' ? (
                          <a href={item.link} target="_blank" rel="noreferrer">
                            <Trans
                              i18nKey={item.title}
                              components={{ br: <br />, bold: <strong /> }}
                            />
                          </a>
                        ) : (
                          <strong>
                            <Trans
                              i18nKey={item.title}
                              components={{ br: <br />, bold: <strong /> }}
                            />
                          </strong>
                        )}
                      </div>
                      <div className={css.slider_itemText}>
                        <Trans
                          i18nKey={item.text}
                          components={{ br: <br />, bold: <strong /> }}
                        />
                      </div>
                    </div>
                  ))}
                </>
              }
            />
          ))}
    </section>
  );
};

export default Sliders;
