import React, { FC } from 'react';
import cn from 'classnames';
import { ReactComponent as BinanceSvg } from 'assets/binance.svg';
import { ReactComponent as BybitSvg } from 'assets/bybit.svg';
import { ReactComponent as GateSvg } from 'assets/gate.svg';
import { ReactComponent as KucoinSvg } from 'assets/kucoin.svg';
import { ReactComponent as SimpleSvg } from 'assets/simple.svg';
import { ReactComponent as CoinbaseSvg } from 'assets/coinbase.svg';
import { ReactComponent as BitfinexSvg } from 'assets/bitfinex.svg';
import { ReactComponent as KrakenSvg } from 'assets/kraken.svg';
import { Trans, useTranslation } from 'react-i18next';
import css from './styles.module.scss';

const Possibility: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.possibility}>
      <div className={cn('section_title', css.possibility_title)}>
        <Trans
          i18nKey="possibility.title"
          components={{ span: <span className={css.blue} /> }}
        />
      </div>
      <div className="section_desc">{t(`possibility.desc`)}</div>
      <div className={css.possibility_grid}>
        <BinanceSvg />
        <BybitSvg />
        <GateSvg />
        <KucoinSvg />
        <SimpleSvg />
        <CoinbaseSvg />
        <BitfinexSvg />
        <KrakenSvg />
      </div>
    </div>
  );
};

export default Possibility;
