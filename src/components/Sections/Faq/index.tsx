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
import Item from './Item';
import css from './styles.module.scss';

const Faq: FC = () => {
  const data = [
    {
      title: 'Как ваш сервис помогает анализировать ончейн-данные?',
      text: ' Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Можно ли отслеживать активность конкретных кошельков? ',
      text: 'Да, вы можете добавлять интересующие вас кошельки в список мониторинга и получать обновления об их транзакциях в реальном времени.',
    },
    {
      title: 'Какие типы данных доступны для анализа?',
      text: ' Arbitrage Scanner предоставляет информацию о входящих и исходящих транзакциях, объемах, частоте переводов, взаимодействиях с другими кошельками.',
    },
    {
      title: 'Можно ли настроить уведомления о важных транзакциях?',
      text: 'Да, вы можете задать фильтры по суммам, адресам и типам операций, а затем получать оповещения, когда происходят значимые события.',
    },
    {
      title: 'Чем ваш сервис отличается от обычных блокчейн-эксплореров?',
      text: 'В отличие от стандартных эксплореров, мы предоставляем глубокий анализ, выявляем связи между кошельками, фильтруем шум и помогаем находить полезные инсайты без необходимости вручную разбирать каждую транзакцию.',
    },
    {
      title: 'Можно ли находить перспективные тренды раньше других?',
      text: 'Да! Наш инструмент анализирует поведение крупных игроков, поток ликвидности и неожиданные изменения активности, помогая выявлять перспективные возможности до того, как они станут массовыми.',
    },
    {
      title: 'Как узнать, если крупные кошельки начинают активные действия?',
      text: 'Вы можете настроить систему оповещений, чтобы моментально получать уведомления о крупных транзакциях, резких изменениях позиций и входах в новые проекты.',
    },
  ];
  return (
    <div className={css.faq}>
      <div className="container">
        <div className={cn('section_title', css.faq_title)}>
          Часто задаваемые вопросы
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
