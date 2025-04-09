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
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Можно ли отслеживать активность конкретных кошельков?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Какие типы данных доступны для анализа?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Можно ли настроить уведомления о важных транзакциях?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Чем ваш сервис отличается от обычных блокчейн-эксплореров?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Можно ли находить перспективные тренды раньше других?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
    },
    {
      title: 'Как узнать, если крупные кошельки начинают активные действия?',
      text: 'Arbitrage Scanner отслеживает и анализирует транзакции в блокчейне, выявляя связи между кошельками, крупные движения активов и аномальные паттерны. Это позволяет быстро находить ключевых игроков, мониторить их стратегии и делать более обоснованные решения.',
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
