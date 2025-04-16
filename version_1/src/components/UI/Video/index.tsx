import React, { FC, ReactNode } from 'react';
import iphoneImg from 'assets/iphone.webp';
import css from './styles.module.scss';

interface IVideoProps {
  children: ReactNode;
}

const Video: FC<IVideoProps> = ({ children }) => (
    <div className={css.video}>
      <img src={iphoneImg} alt={iphoneImg} className={css.video_bg} />
      <div className={css.video_src}>
        {children}
      </div>
    </div>
  );

export default Video;
