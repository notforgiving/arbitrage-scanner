/* eslint-disable react/no-array-index-key */
import React, { FC, useState } from 'react';
import cn from 'classnames';
import Tabs from 'components/UI/Tabs';
import { useTranslation } from 'react-i18next';
import slider_1 from 'assets/slider_1.png';
import slider_2 from 'assets/slider_2.webp';
import Slider from 'components/UI/Slider';
import css from './styles.module.scss';

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
        icon: slider_1,
        title: 'altcoinlog.com',
        text: 'lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 ',
      },
      {
        icon: slider_2,
        title: '123',
        text: 'lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 ',
      },
      {
        icon: slider_1,
        title: 'altcoinlog.com',
        text: 'lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 lorem200 ',
      },
    ],
    [
      {
        icon: slider_2,
        title: 'altcoinlog.com',
        text: 'kldfgkldfjlkdfg',
      },
      {
        icon: slider_2,
        title: 'ldkfgjldfkjldkfjg',
        text: 'd;lfgk;ldfgk',
      },
      {
        icon: slider_2,
        title: 'iuweuiweuiweruiwer',
        text: 'dlkjaldkjladkfg',
      },
    ],
    [
      {
        icon: slider_2,
        title: 'altcoinlog.com',
        text: 'kldfgkldfjlkdfg',
      },
      {
        icon: slider_2,
        title: 'ldkfgjldfkjldkfjg',
        text: 'd;lfgk;ldfgk',
      },
      {
        icon: slider_2,
        title: 'iuweuiweuiweruiwer',
        text: 'dlkjaldkjladkfg',
      },
    ],
    [
      {
        icon: slider_2,
        title: 'altcoinlog.com',
        text: 'kldfgkldfjlkdfg',
      },
      {
        icon: slider_2,
        title: 'ldkfgjldfkjldkfjg',
        text: 'd;lfgk;ldfgk',
      },
      {
        icon: slider_2,
        title: 'iuweuiweuiweruiwer',
        text: 'dlkjaldkjladkfg',
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
              autoplay
              key={`slider-${index}`}
              resetView={resetView}
              sliderItems={
                <>
                  {slider.map((item) => (
                    <div className={css.slider_item} key={item.text}>
                      <div className={css.slider_itemInfo}>
                        <img src={item.icon} alt={slider_1} />
                        <strong>{item.title}</strong>
                      </div>
                      <div className={css.slider_itemText}>{item.text}</div>
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
