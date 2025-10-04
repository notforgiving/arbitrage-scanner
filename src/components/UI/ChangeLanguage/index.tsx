import React, { FC, useState } from 'react';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './styles.module.scss';

type TFLang = {
  value: string;
  label: string;
};

const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation();
  const languages: TFLang[] = [
    {
      value: 'ru',
      label: 'Русский',
    },
    {
      value: 'en',
      label: 'English',
    },
  ];
  const localstoragelang = localStorage.getItem('scannerlanguage');
  const [selectedLang, setSelectedLang] = useState<TFLang>(
    localstoragelang !== null ? JSON.parse(localstoragelang) : languages[0],
  );
  const handleChangeLanguage = (item: TFLang) => {
    localStorage.setItem('scannerlanguage', JSON.stringify(item));
    setSelectedLang(item);
    i18n.changeLanguage(item.value);
  };
  return (
    <div className={css.language}>
      <div className={css.body}>
        <span>{selectedLang.value}</span>
        <FiChevronDown color="#a8b0b9" size={20} />
      </div>
      <div className={css.dropdown}>
        {languages.map((item) => {
          const selected = item.value === selectedLang.value;
          return (
            <div
              className={cn(css.item, {
                _isChecked: selected,
              })}
              key={item.value}
              onClick={() => handleChangeLanguage(item)}
            >
              <span>{item.label}</span>
              <FiCheck />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChangeLanguage;
