import React from 'react';
import Image from 'next/image';
import SliderNav from '../SliderNav/SliderNav';

type ServiceSlideProps = {
  num: number;
  servicesQuentity: number;
  img: string;
  slogan: string;
  description: string;
  activeSlide: number;
  handleMenuButtonClick: (slideIndex: number) => void;
};

const ServiceSlide: React.FC<ServiceSlideProps> = ({
  num,
  servicesQuentity,
  description,
  slogan,
  img,
  activeSlide,
  handleMenuButtonClick,
}) => {
  return (
    <div className={`section bg-overlay service-${img}`}>
      <div className="container">
        <div className="flex flex-col gap-[16px] md:gap-[36px] xl:gap-[20px] ">
          <div className="flex flex-col gap-[24px] md:flex-row justify-between">
            <h2 className="uppercase  text-[40px] font-thin leading-[1.4] tracking-[-1.6px] md:text-justify md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px]">
              we <span className="font-medium">offer</span>
            </h2>
            <p className=" text-[43px] font-thin text-right md:text-[67px] md:leading-[1.164] xl:leading-1.2 xl:text-[98px]">
              0{num}/<span className="text-white/20">0{servicesQuentity}</span>
            </p>
          </div>
          <div className="flex flex-col gap-[12px] md:flex-row justify-between md:gap-[20px] ">
            <div className=" w-full h-[213px] md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px] ">
              <Image
                width={1214}
                height={858}
                alt={img}
                src={`/assets/images/images/services/service-0${num}-${img}@2x.jpg`}
                placeholder="blur"
                blurDataURL={`/assets/images/images/services/service-0${num}-${img}.jpg`}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col h-[350px] md:h-[370px] md:w-[221px] xl:w-[605px] xl:h-[429px] justify-between">
              <div className="flex flex-col gap-[24px] md:flex-col-reverse md:gap-[25px] xl:flex-row-reverse ">
                <p className="block label-form text-right md:text-left xl:w-[293px]">
                  {slogan}
                </p>
                <SliderNav
                  activeSlide={activeSlide}
                  handleMenuButtonClick={handleMenuButtonClick}
                />
              </div>
              <p className="block text-[14px] font-extralight leading-[1.428]  md:text-[13px] md:leading-[1.538] md: text-justify xl:text-[18px] xl:leading-[1.333] xl:w-[293px]  xl:self-end">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;
