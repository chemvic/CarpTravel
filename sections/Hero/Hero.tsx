'use client';
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <section className='bg-overlay section-hero hero'>
        <div className="container flex flex-col items-center">
            <div className="grid">
                <div className="flex flex-col days xl:mb-[165px]">
                   <p className="text-[37px] font-thin uppercase  leading-none tracking-[1.665px] md:text-[67px] md:tracking-[8.71px] md:leading-none  xl:text-[98px] xl:leading-[1.21] xl:tracking-normal text-right"><span className="font-medium">7</span>days</p>
                   <span className="text-[12px] font-light uppercase leading-none tracking-[9.48px] md:text-[14px] md:tracking-[25.9px] xl:text-[16px] xl:tracking-[36.48px] text-right">JOURNEY</span> 
                </div>
                <div className="title md:flex md:flex-col md:justify-between">
                    <h1 className="text-[40px] mb-6 font-thin text-left leading-none md:text-[67px] md:tracking-[-2.68px] md:leading-normal xl:text-[98px] xl:tracking-[-3.92px] uppercase"><span className="font-medium">uncover</span><br/>carpathian’s secrets</h1>
                    <div className="flex flex-col xl:flex-row">
                      <p className="text-[10px] font-extralight leading-[1.6] md:text-[14px] md:leading-[1.143] md:tracking-[1.26px] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]">Hoverla / Yaremche / Zakarpattia / </p>
                      <p className="text-[10px] font-extralight leading-[1.6] md:text-[14px] md:leading-[1.143] md:tracking-[1.26px] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]">Vorokhta / Synevyr Lake / Bukovel</p>
                    </div>
                </div>
                <div className="description flex flex-col items-center w-full md:w-[230px] md:justify-between md:ml-auto xl:w-[294px]">
                 <div className="mb-6 md:mb-7 "><p className="text-justify text-[14px] font-extralight leading-[1.428]  md:text-[16px] md:leading-[1.25] xl:text-[18px] xl:leading-[1.333]">We offer you unforgettable trips to the most beautiful parts of the Carpathians.
                     Enjoy stunning views, exciting expeditions, and the best service!</p>
                  </div> 
                  <Link
                      className='w-full hero-btn 
                      relative h-[53px] flex items-center justify-center font-bold text-lg uppercase leading-[2.666] md:h-[50px] md:leading-normal xl:h-[71px] xl:text-[32px] bg-white/5 hover:bg-white/20 transition-colors duration-300 ease-in-out cursor-pointer'
                      as='button'
                      type='button'
                      to="contacts"
                      smooth={true}
                      duration={500}
                    >
                      JOIN NOW
                       
              
                    </Link>

                </div>

            </div>
                     

        </div> 
    </section>
  )
}

export default Hero