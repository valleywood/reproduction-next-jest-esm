import React from 'react';
import { SwiperOptions } from 'swiper/types';



export interface SliderSettings {
  quantityLimitDesktop: number;
  quantityLimitIpad: number;
  quantityLimitMobile: number;
  disableInfinityLoop: boolean;
  autoplay: boolean;
}

type ResponsiveSettings = {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    infinite: boolean;
    arrows: boolean;
  };
};
export type Settings = {
  dots: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  draggable: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  arrows: boolean;
  nextArrow: React.ReactNode;
  prevArrow: React.ReactNode;
  infinite: boolean;
  responsive: ResponsiveSettings[];
};

export type StyledSliderItemProp = {
  length: number;
  showInfoHint: boolean;
};
export type StyledCSSWrapperProps = {
  isSkeleton?: boolean;
};
export type SliderArrowProps = {
  arrowsHigher?: boolean;
  onClick?: () => void;
};
export type SwiperLazyProps = {
  children?: React.ReactNode[];
  breakpoints?: SwiperOptions['breakpoints'];
  spaceBetween?: number;
  slidesPerView?: number;
  initialSlide?: number;
  hasModelInfo?: boolean;
  prevArrow?: JSX.Element;
  nextArrow?: JSX.Element;
  context?: ContextTypes;
  loop?: boolean;
  autoplay?: boolean;
  onSlideChange?: () => void;
};
export type ContextTypes =
  | 'zoomModal'
  | 'productListSlider'
  | 'quickView'
  | 'package'
  | 'sliderBlock'
  | 'packageSection'
  | 'bundleView';
export type SwiperSlideLazyProps = {
  children?: React.ReactNode;
};
export type StyledSwiperProps = {
  context?: ContextTypes;
  hasModelInfo?: boolean;
};
export type StyledArrowWrapperProps = {
  isMobile: boolean;
};
