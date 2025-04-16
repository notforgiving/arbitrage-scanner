/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import footerImg from 'assets/footer.webp';
import { ReactComponent as LogoSvg } from 'assets/logo.svg';
import { ReactComponent as LetterSvg } from 'assets/letter.svg';
import { ReactComponent as TgSvg } from 'assets/tg.svg';
import { ReactComponent as DiscordSvg } from 'assets/discord.svg';
import { ReactComponent as XSvg } from 'assets/x.svg';
import { ReactComponent as YoutubeSvg } from 'assets/youtube.svg';
import { ReactComponent as InstagramSvg } from 'assets/instagram.svg';
import { ReactComponent as MediumSvg } from 'assets/medium.svg';
import css from './styles.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={css.footer}>
      <div className={cn('container')}>
        <div className={css.footer_content}>
          <div className={css.footer_top}>
            <LogoSvg className={css.logo} />
            <div className={css.menu}>
              <div className={css.menu_col}>
                <a href="">{t(`footer.menu_item_1`)}</a>
                <a href="">{t(`footer.menu_item_2`)}</a>
                <a href="">{t(`footer.menu_item_3`)}</a>
                <a href="">{t(`footer.menu_item_4`)}</a>
                <a href="">{t(`footer.menu_item_5`)}</a>
              </div>
              <div className={css.menu_col}>
                <a href="">{t(`footer.menu_item_6`)}</a>
                <a href="">{t(`footer.menu_item_7`)}</a>
                <a href="">{t(`footer.menu_item_8`)}</a>
                <a href="">{t(`footer.menu_item_9`)}</a>
                <a href="">{t(`footer.menu_item_10`)}</a>
              </div>
              <div className={css.menu_col}>
                <a href="">{t(`footer.menu_item_11`)}</a>
                <a href="">{t(`footer.menu_item_12`)}</a>
                <a href="">{t(`footer.menu_item_13`)}</a>
                <a href="">{t(`footer.menu_item_14`)}</a>
                <a href="">{t(`footer.menu_item_15`)}</a>
              </div>
            </div>
            <div className={css.owner}>
              <span>ИП Кубаев Роман Владимирович</span>
              <span>ИНН: 3818 0920 6180</span>
              <span>ОГРНИП: 32338 50000 29802</span>
            </div>
            <div className={css.contacts}>
              <a href="mailto: info@arbitragescanner.io" className={css.email}>
                <LetterSvg />
                <span>info@arbitragescanner.io</span>
              </a>
              <div className={css.social}>
                <a href="">
                  <TgSvg />
                </a>
                <a href="">
                  <DiscordSvg />
                </a>
                <a href="">
                  <XSvg />
                </a>
                <a href="">
                  <YoutubeSvg />
                </a>
                <a href="">
                  <InstagramSvg />
                </a>
                <a href="">
                  <MediumSvg />
                </a>
              </div>
            </div>
          </div>
          <div className={css.footer_bottom}>
            <span>© 2025 Arbitrage Scanner. All rights reserved.</span>
            <img src={footerImg} alt={footerImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
