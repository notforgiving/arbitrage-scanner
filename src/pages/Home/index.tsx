import Header from 'components/Header';
import React, { FC } from 'react';
import Button from 'components/UI/Button';
import { useHistory } from 'react-router-dom';
import css from './styles.module.scss';

const Home: FC = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className={css.home}>
        <div className="container">
          <section className={css.accent}>
            <div className={css.accent_content}>
              <h1 className={css.title}>
                Находите скрытые возможности на основе{' '}
                <strong className={css.blue}>onchain данных</strong>
              </h1>
              <div className={css.subtitle}>
                И повторяйте успешные стратегии топ-трейдеров быстрее других
              </div>
              <Button type="green" className={css.btn} onClick={()=>history.push('/auth')}>
                Попробуйте бесплатную версию
              </Button>
              <ul className={css.points}>
                <li>Более 10000 выбрали наш сервис</li>
                <li>Победитель Ton Awards</li>
                <li>Победитель BlockchainLife 2024</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
