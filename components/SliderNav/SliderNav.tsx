import React from 'react'

import services from '../../data/services.json';

type SliderNavProps = {
    activeSlide: number;
     handleMenuButtonClick: (slideIndex: number) => void;
}

const SliderNav:React.FC<SliderNavProps> = ({activeSlide, handleMenuButtonClick}) => {
  return (
    <ul className="flex flex-col gap-[16px] xl:gap-[24px] xl:w-[244px]">
        {services.map(({title}, index) => (
            <li key={index}>
        <button onClick={()=>{handleMenuButtonClick(index)}} type='button' className={`${index===activeSlide ? 'relative rhombus ml-[14px] opacity-[1] font-medium' : ' opacity-[0.5]'} text-[20px]  whitespace-pre-wrap font-extralight uppercase leading-[0.85] hover:opacity-[1] transition-all duration-300 easy-in-out text-left focus:opacity-[1] md:text-[22px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.857] `}>{title}</button>
    </li>
        ))}
   
   
</ul>
  )
}

export default SliderNav