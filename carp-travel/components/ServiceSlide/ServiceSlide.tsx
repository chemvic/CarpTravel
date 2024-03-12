import React from 'react';
import Image from 'next/image'

type ServiceSlideProps = {
    num: number;
    title: string;
    img: string;
    slogan: string;
    description: string
}

const ServiceSlide:React.FC<ServiceSlideProps> = ({num, title, description, slogan, img }) => {
  return (
    <div className={`section bg-overlay service-${img}`} >
        <div className="container">
            <div className="flex flex-col gap-[16px] md:gap-[36px] xl:gap-[20px] ">
                <div className="flex flex-col gap-[24px] md:flex-row justify-between">
                    <h2 className="uppercase  text-[40px] font-thin leading-[1.4] tracking-[-1.6px] md:text-justify md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px]">we <span className="font-medium">offer</span></h2>                           
                    <p className=" text-[43px] font-thin text-right md:text-[67px] md:leading-[1.164] xl:leading-1.2 xl:text-[98px]">
                       0{num}/
                        <span className="text-white/20">05</span>
                    </p>
                </div>
                <div className="flex flex-col gap-[12px] md:flex-row md:gap-[20px] ">
                <Image
                    width={1214}
                    height={858}
                    alt={img}
                    src={`/assets/images/images/services/service-0${num}-${img}@2x.jpg`}
                    placeholder="blur"
                    blurDataURL={`/assets/images/images/services/service-0${num}-${img}.jpg`}
                    sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px, (min-width: 360px) 280px,  100vw"
                />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-[24px] md:flex-col-reverse md:gap-[25px] xl:flex-row-reverse ">
                        <p className="label-form text-left xl:w-[293px]">{slogan}</p>
                        <ul className="flex flex-col gap-[16px] xl:gap-[24px] xl:w-[244px]">
                            <li>
                                <button type='button' className='relative rhombus-sign pl-[8px] text-[20px] font-medium uppercase leading-[0.85]  md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] '>ATVs Traveling</button>
                            </li>
                            <li >
                            <button type='button' className='text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] '>Rock climbing</button>
                            </li>
                            <li >
                            <button type='button' className='text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] '>Hot air<br/>ballooning</button> 
                            </li>
                            <li >
                            <button type='button' className='text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] '>Skydiving</button>  
                            </li>
                            <li >
                            <button type='button' className='text-[20px] font-extralight uppercase leading-[0.85] opacity-[0.5] hover:opacity-[1] focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] '>Rafting</button>  
                            </li>
                        </ul>
                    </div>
                    <p className="block text-[14px] font-extralight leading-[1.428]  md:text-[13px] md:leading-[1.538] md: text-justify xl:text-[18px] xl:leading-[1.333] xl:w-[293px]  xl:self-end">{description}</p>
                </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default ServiceSlide