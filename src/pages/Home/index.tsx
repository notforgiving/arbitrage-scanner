import Header from 'components/Header';
import React, { FC } from 'react';
import SectionsGrid from 'components/SectionsGrid';
import Accent from 'components/Sections/Accent';
import How from 'components/Sections/How';
import Why from 'components/Sections/Why';
import Tools from 'components/Sections/Tools';
import { useTranslation } from 'react-i18next';
import Sliders from 'components/Sections/Sliders';
import css from './styles.module.scss';

const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className={css.home}>
        <div className="container">
          <Accent />
          <SectionsGrid>
            <How />
            <Why />
          </SectionsGrid>
        </div>
        <Tools />
        <div className="container">
          <SectionsGrid>
            <Sliders />
          </SectionsGrid>
        </div>
      </div>
    </>
  );
};

export default Home;
