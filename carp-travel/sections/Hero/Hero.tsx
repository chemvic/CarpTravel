'use client';
import { Link } from "react-scroll"

const Hero = () => {
  return (
    <section className='background-overlay section-hero hero'>
        <div className="container flex flex-col items-center">
            <div className="grid">
                <div className="flex flex-col days">
                   <p className=" text-[98px] uppercase font-thin "><span className="tracking-normal font-medium">7</span>days</p>
                   <p className=" text-8xl uppercase font-thin "><span className="tracking-normal font-medium">7</span>days</p>
                   <p className="uppercase font-light text-xs">JOURNEY</p> 
                </div>
                <div className="title">
                    <p className="font-thin text-[98px]"><span>uncover</span>Carpathian’s Secrets</p>
                    <div className="flex flex-col md:flex-row">
                      <p>Hoverla / Yaremche / Zakarpattia / </p>
                      <p>Vorokhta / Synevyr Lake / Bukovel</p>
                    </div>
                </div>
                <div className="description flex flex-col items-center w-full md:w-[230px] xl:w-[294px]">
                 <div className="mb-12"><p className=" text-sm ">We offer you unforgettable trips to the most beautiful parts of the Carpathians.
                     Enjoy stunning views, exciting expeditions, and the best service!</p>
                  </div> 
                  <Link
                      className='w-full text-lg py-4 md:py-[14px] md:w-[230px] xl:py-4 xl:w-[293px] xl:text-[32px] bg-white/5 cursor-pointer'
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