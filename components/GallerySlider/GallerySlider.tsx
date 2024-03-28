'use client';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const GallerySlider:React.FC = () => {
    
  return (
    <div className="hidden relative md:block  mx-auto md:px-[32px] xl:px-[0] md:w-[768px] xl:w-[1280px] ">
           
 
            <Swiper
                loop={true}
                centeredSlides={true}
                modules={[Navigation, Autoplay]}
                navigation= {{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                   }}
                   autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={3}
                spaceBetween={24}
                lazyPreloadPrevNext={1}
                className='gallery-slider'
            >
                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='lake'
            src='/assets/images/images/gallery/lake@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/lake.jpg'
            priority={true}
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"

            />
                </SwiperSlide>

                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='river'
            src='/assets/images/images/gallery/river@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/river.jpg'
            priority={true}
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"

            />
                </SwiperSlide>

                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='mountain'
            src='/assets/images/images/gallery/mountain@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/mountain.jpg'
            priority={true}
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"

            />
                </SwiperSlide>
                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='lake'
            src='/assets/images/images/gallery/lake@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/lake.jpg'
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"
            priority={true}


            />
                </SwiperSlide>

                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='river'
            src='/assets/images/images/gallery/river@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/river.jpg'
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"
            priority={true}

            />
                </SwiperSlide>

                <SwiperSlide>
                <Image
            width={606}
            height={429}
            alt='mountain'
            src='/assets/images/images/gallery/mountain@2x.jpg'
            placeholder="blur"
            blurDataURL='/assets/images/images/gallery/mountain.jpg'
            sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"
            priority={true}

            />
                </SwiperSlide>

            </Swiper>
            <button type='button'  className='button-prev block py-[7px] text-[33px]  font-thin uppercase  absolute z-10  md:left-[70px] xl:left-[200px] xl:leading-none md:bottom-[17px] xl:bottom-0  transition-colors duration-300 ease-in-out hover:bg-white/20  focus:bg-white/20'>back</button>
            <button type='button'  className='button-next block py-[7px] text-[33px]  font-thin uppercase  absolute z-10  md:right-[70px] xl:right-[260px] xl:leading-none md:bottom-[17px] xl:bottom-0  transition-colors duration-300 ease-in-out hover:bg-white/20  focus:bg-white/20'>next</button>




    </div>
  )
}

export default GallerySlider