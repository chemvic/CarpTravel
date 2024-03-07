import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className='about section'>
        <div className='container'>
              <div className='grid-1'>
                <div className='about-title mb-[14px]'>
                    <h2 className='text-[40px] font-thin uppercase leading-none tracking-[-1.6px] md:text-[67px]
                     md:leading-none md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]
                       text-left'>who <span className='font-medium'>we are</span></h2>
                </div>
                <div className='about-text max-w-[180px]  md:max-w-[221px] xl:max-w-[292px] '>
                    <p className='text-[14px] font-extralight tracking-normal leading-[1.25]  mb-[14px] md:text-[16px] md:mb-[16px] xl:text-[18px] xl:leading-[1.333] xl:mb-[24px]'><span className='font-normal'>a team of enthusiasts</span> who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>
                    <p className='text-[14px] font-extralight tracking-normal leading-[1.25] md:text-[16px] xl:text-[18px] xl:leading-[1.333] xl:mb-[72px]'><span className='font-normal'>We believe</span> that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
                </div>
                <div className='about-slogan flex items-end'>
                    <div className='ml-auto max-w-[180px] my-[40px] md:mx-0 md:my-0 md:max-w-[221px] xl:max-w-[296px]'>
                        <p className='text-left text-[14px] uppercase font-normal tracking-normal leading-[1.25]  md:text-[16px] xl:text-[18px] xl:leading-[1.333]'>From vacationers</p> 
                        <p className='text-right text-[14px] uppercase font-normal tracking-normal leading-[1.25]  md:text-[16px] xl:text-[18px] xl:leading-[1.333]'>to active travelers</p> 
                        <p className='text-justify text-[14px] font-extralight tracking-[-0.14px] leading-[1.25]  md:text-[16px] md:tracking-[0.32px] xl:text-[18px] xl:tracking-[2.1px] xl:leading-[1.333]'>we have a tour for everyone.</p> 
                    </div>                    
                </div>
                <div className='about-methods  max-w-[480px] md:max-w-[463px] md:mt-[64px] xl:max-w-[605px]'>
                    <p className='text-justify text-[14px] font-extralight tracking-normal leading-[1.25] md:text-[16px] xl:text-[18px] xl:leading-[1.333]'><span className='font-normal'>We use methods </span>that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.</p>
                </div>
              </div>
  
        </div>
    </section>
  )
}

export default About