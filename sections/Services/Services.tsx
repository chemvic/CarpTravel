'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import ServiceSlide from '@/components/ServiceSlide/ServiceSlide';
import services from '../../data/services.json';




const Services = () => {


  return (
    <section id='services' className='relative   bg-overlay'>
       <Swiper
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, EffectFade, Pagination]}
      >
        {services.map(({num, title, img, slogan, description}
) => (
          <SwiperSlide  key={img}>
            <ServiceSlide num={num} title={title} img={img} slogan={slogan} description={description} />
          </SwiperSlide>

        ))}
      
      </Swiper>
    </section>
  )
}

export default Services