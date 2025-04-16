import React, { FC, ReactNode } from 'react';
import css from './styles.module.scss';

interface ISectionsGridProps {
  children: ReactNode;
}

const SectionsGrid: FC<ISectionsGridProps> = ({ children }) => (
  <div className={css.grid_sections}>{children}</div>
);

export default SectionsGrid;
