

const Career = () => {
  return (
    <section  id="career"
    className="section career">
        <div className="container flex flex-col gap-[36px] md:gap-[12px] xl:gap-[24px] ">
            <div className="flex flex-col gap-[24px] md:flex-row justify-between">
                <h2 className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px] md:text-justify md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px]">choose <span className="font-medium">us</span></h2>
                <p  className="w-[179px] self-end text-[14px] font-extralight leading-[1.428]  md:text-[16px] md:leading-[1.25] md: text-justify md:w-[221px] xl:text-[18px] xl:leading-[1.333] xl:w-[293px] ">Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between ">
                <div className="flex flex-col gap-[36px] md:gap-[56px] xl:gap-[45px] ">
                    <h3 className="text-[30px] font-extralight uppercase text-left w-[179px] self-end md:w-[221px] md:self-start md:text-right xl:w-[317px] xl:text-[36px] xl:leading-[1.083]">Why us ?</h3>
                    <ul className="flex flex-col w-[181px] gap-[16px] md:w-[221px] md:gap-[24px] xl:w-[616px] ">
                        <li className="flex flex-col gap-[8px] text-right xl:flex-row xl:justify-between ">
                            <p className="text-[14px] font-regular tracking-normal leading-[1.429] md:text-[16px] md:leading-[1.25] xl:w-[317px] xl:text-[18px] xl:leading-[1.333] ">Professional development</p>
                            <p className="text-[12px] font-extralight leading-[1.667]  xl:leading-[2] xl:w-[285px] xl:text-left ">We offer growth opportunities and a creative environment to nurture your talents.</p>
                        </li>
                        <li className="flex flex-col gap-[8px] text-right xl:flex-row xl:justify-between ">
                            <p  className="text-[14px] font-regular tracking-normal leading-[1.429] md:text-[16px] md:leading-[1.25] xl:w-[317px] xl:text-[18px] xl:leading-[1.333] ">Teamwork</p>
                            <p className="text-[12px] font-extralight leading-[1.667]  xl:leading-[2] xl:w-[285px] xl:text-left ">Join our close-knit family, where support and inspiration abound.</p>
                        </li>
                        <li className="flex flex-col gap-[8px] text-right xl:flex-row xl:justify-between ">
                           <p  className="text-[14px] font-regular tracking-normal leading-[1.429] md:text-[16px] md:leading-[1.25] xl:w-[317px] xl:text-[18px] xl:leading-[1.333] ">Stimulating work environment</p>
                           <p className="text-[12px] font-extralight leading-[1.667]  xl:leading-[2] xl:w-[285px] xl:text-left ">Flexibility and remote options for a comfortable experience.</p> 
                        </li>
                        <li className="flex flex-col gap-[8px] text-right xl:flex-row xl:justify-between ">
                            <p  className="text-[14px] font-regular tracking-normal leading-[1.429] md:text-[16px] md:leading-[1.25] xl:w-[317px] xl:text-[18px] xl:leading-[1.333] ">Exciting challenges</p>
                            <p className="text-[12px] font-extralight leading-[1.667]  xl:leading-[2] xl:w-[285px] xl:text-left ">Unleash your potential through unforgettable projects showcasing Carpathian beauty.</p>
                        </li>
                    </ul>


                </div>
                <div className="hidden bg-gray-200 md:flex md:w-[463px] md:h-[543px] xl:w-[608px] xl:h-[466px] "></div>
            </div>
        </div>
    </section>
  )
}

export default Career