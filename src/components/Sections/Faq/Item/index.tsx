import React, { FC, useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import cn from 'classnames';
import css from '../styles.module.scss';

interface IItemProps {
  item: {
    title: string;
    text: string;
  };
}

const Item: FC<IItemProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [heightText, setHeightText] = useState<number>(0);
  useEffect(() => {
    if (open) {
      setHeightText(ref.current?.children[0].clientHeight || 0);
    } else {
      setHeightText(0);
    }
  }, [open]);

  return (
    <div
      className={cn(css.faq_item, {
        _isOpen: open,
      })}
      key={item.title}
    >
      <div className={css.faq_itemHeader} onClick={() => setOpen(!open)}>
        <span>{item.title}</span>
        <FiChevronDown />
      </div>
      <div
        className={css.faq_itemText}
        style={{
          maxHeight: `${heightText}px`,
        }}
        ref={ref}
      >
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export default Item;
