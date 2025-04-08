import React, { FC, useState } from 'react';
import cn from 'classnames';
import css from './styles.module.scss';

interface ITabsProps {
  /** Наименования вкладок в формате ['Вкладка1', 'Вкладка2'] */
  tabs: string[];
  callback: (index: number) => void;
}

const Tabs: FC<ITabsProps> = ({ tabs, callback }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const changeTab = (index: number) => {
    setCurrentTab(index);
    callback(index);
  };

  return (
    <div className={css.tabs}>
      {tabs.map((item, index) => (
        <div
          key={item}
          className={cn(css.tab, {
            _isActive: index === currentTab,
          })}
          onClick={() => changeTab(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
