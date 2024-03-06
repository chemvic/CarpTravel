import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className='about section'>
        <div className='container'>
              <div className='grid-1'>
                <div>
                    <h2 className='text-[40px] font-thin uppercase leading-[1.4] tracking-[-1.6px] md:text-[67px] md:leading-normal md:tracking-[-2.68px] xl:text-[98px] xl:tracking-[-3.92px]  text-left'>who <span className='font-medium'>we are</span></h2>
                </div>
                <div className='max-w-[180px] md:max-w-[221px] xl:max-w-[292px] flexColumn gap-6'>
                    <p className=''><span>a team of enthusiasts</span>who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere.</p>
                    <p><span>We believe</span> that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories.</p>
                </div>
                <div>
                    <p>From vacationers</p> 
                    <p>to active travelers</p> 
                    <p>we have a tour for everyone.</p> 
                </div>
                <div>
                    <p><span>We use methods</span>that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.</p>
                </div>
              </div>
  
        </div>
    </section>
  )
}

export default About