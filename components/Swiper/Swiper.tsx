// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/zoom';

import React from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Zoom,
  Scrollbar,
  Pagination,
} from 'swiper/modules';

import { SwiperLazyProps } from './Swiper.types';
export const Swiper = ({
  children,
}: SwiperLazyProps) => {
  return (
      <SwiperComponent        
        key={'test'}
        slidesPerView={2}
        modules={[Zoom, Pagination, Scrollbar, EffectFade, Autoplay]}
      >      
        {children?.map((item, i) => {
          return (
            <SwiperSlide key={'swiperImage_' + i} zoom={false}>
              {item}
            </SwiperSlide>
          );
        })}
        </SwiperComponent>
  );
};
