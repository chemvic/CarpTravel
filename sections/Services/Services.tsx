'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import ServiceSlide from '@/components/ServiceSlide/ServiceSlide';
import services from '../../data/services.json';




const Services = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveSlide(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleMenuButtonClick = (slideIndex: number) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };
  const servicesQuentity = services?.length;
  return (
    <section id='services' className='relative   bg-overlay'>
       <Swiper 
        effect={'fade'}
     
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        modules={[ Autoplay, EffectFade]}
        onSwiper={(s: any) => setSwiper(s)}
      >
        {services.map(({num, img, slogan, description}
) => (
          <SwiperSlide  key={img}>
            <ServiceSlide num={num} servicesQuentity={servicesQuentity} img={img} slogan={slogan} description={description}  activeSlide={activeSlide} handleMenuButtonClick={handleMenuButtonClick} />
          </SwiperSlide>

        ))}
      
      </Swiper>
    </section>
  )
}

export default Services