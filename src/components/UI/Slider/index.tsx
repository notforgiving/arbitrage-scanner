import React, { FC, ReactNodeArray, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import cn from 'classnames';
import css from './styles.module.scss';

interface ISliderProps {
  sliderItems: ReactNodeArray | any;
  autoplay?: boolean;
  speed?: number;
  resetView?: boolean;
  selectSlider?: number;
}

type directinalSlide = 'RIGHT' | 'LEFT';

const Slider: FC<ISliderProps> = ({
  sliderItems,
  autoplay,
  speed = 4000,
  resetView,
  selectSlider,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [totalSliders, setTotalSliders] = useState<number>(0);
  const [currentSlide, setCurentSlide] = useState<number>(0);
  const [heightSlider, setHeightSlider] = useState<number | 'auto'>('auto');
  let intervalId: any = 0;

  const resetTimeout = () => {
    if (intervalId) {
      clearTimeout(intervalId);
    }
  };

  const slideSlider = (directinal: directinalSlide) => {
    switch (directinal) {
      case 'RIGHT': {
        if (currentSlide === totalSliders - 1) {
          setCurentSlide(0);
        } else {
          setCurentSlide(currentSlide + 1);
        }
        break;
      }
      case 'LEFT': {
        if (currentSlide === 0) {
          setCurentSlide(totalSliders - 1);
        } else {
          setCurentSlide(currentSlide - 1);
        }
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    setTotalSliders(sliderItems.props.children.length);
    if (bodyRef.current) {
      setHeightSlider(bodyRef.current?.children[currentSlide].clientHeight);
    }
  }, [sliderItems]);

  useEffect(() => {
    resetTimeout();
    if (autoplay) {
      intervalId = setInterval(() => {
        slideSlider('RIGHT');
      }, speed);
    }
    return () => {
      resetTimeout();
    };
  }, [autoplay, currentSlide]);

  useEffect(() => {
    setCurentSlide(0);
  }, [resetView]);

  useEffect(() => {
    if (bodyRef.current) {
      setHeightSlider(bodyRef.current?.children[currentSlide].clientHeight);
    }
  }, [currentSlide]);

  useEffect(() => {
    console.log(selectSlider, 'selectSlider');
    setHeightSlider('auto');
  }, [selectSlider]);

  return (
    <div className={css.slider}>
      <div
        className={cn(css.slider_arrow, css.prev)}
        onClick={() => slideSlider('LEFT')}
      >
        <FiChevronLeft />
      </div>
      <div className={css.slider_wrapper}>
        <div
          className={cn(css.slider_body, `slide-${currentSlide}`)}
          style={{
            transform: `translateX(${-currentSlide * 100}%)`,
            height: `${heightSlider}px`,
          }}
          ref={bodyRef}
        >
          {sliderItems}
        </div>
      </div>

      <div
        className={cn(css.slider_arrow, css.next)}
        onClick={() => slideSlider('RIGHT')}
      >
        <FiChevronRight />
      </div>
    </div>
  );
};

export default Slider;
