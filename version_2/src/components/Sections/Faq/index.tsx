import React, { FC } from 'react';
import cn from 'classnames';
import faq_img_1 from 'assets/faq_1.webp';
import faq_img_2 from 'assets/faq_2.webp';
import faq_img_3 from 'assets/faq_3.webp';
import faq_img_4 from 'assets/faq_4.webp';
import faq_img_5 from 'assets/faq_5.webp';
import faq_img_6 from 'assets/faq_6.webp';
import faq_img_7 from 'assets/faq_7.webp';
import faq_img_8 from 'assets/faq_8.webp';
import { useTranslation } from 'react-i18next';
import Item from './Item';
import css from './styles.module.scss';

const Faq: FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t(`faq.ans_title_1`),
      text: t(`faq.ans_1`),
    },
    {
      title: t(`faq.ans_title_2`),
      text: t(`faq.ans_2`),
    },
    {
      title: t(`faq.ans_title_3`),
      text: t(`faq.ans_3`),
    },
    {
      title: t(`faq.ans_title_4`),
      text: t(`faq.ans_4`),
    },
    {
      title: t(`faq.ans_title_5`),
      text: t(`faq.ans_5`),
    },
    {
      title: t(`faq.ans_title_6`),
      text: t(`faq.ans_6`),
    },
    {
      title: t(`faq.ans_title_7`),
      text: t(`faq.ans_7`),
    },
  ];
  return (
    <div className={css.faq}>
      <div className="container">
        <div className={cn('section_title', css.faq_title)}>
          {t(`faq.title`)}
        </div>
        <div className={css.faq_content}>
          {!!data.length &&
            data.map((item) => <Item item={item} key={item.title} />)}
        </div>
        <div className={css.faq_blockchein}>
          <img
            src={faq_img_1}
            alt={faq_img_1}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_2}
            alt={faq_img_2}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_3}
            alt={faq_img_3}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_4}
            alt={faq_img_4}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_5}
            alt={faq_img_5}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_6}
            alt={faq_img_6}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_7}
            alt={faq_img_7}
            className={css.faq_blockcheinItem}
          />
          <img
            src={faq_img_8}
            alt={faq_img_8}
            className={css.faq_blockcheinItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
