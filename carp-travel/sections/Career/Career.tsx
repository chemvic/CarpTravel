

const Career = () => {
  return (
    <section  id="career"
    className="section career">
        <div className="container flex flex-col ">
            <div className="flex flex-col gap-[24px]">
                <h2 className="uppercase text-[40px] font-thin leading-[1.4] tracking-[-1.6px] md:text-justify md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px]">choose <span className="font-medium">us</span></h2>
                <p  className="w-[179px] self-end text-[14px] font-extralight leading-[1.428]  md:text-[16px] md:leading-[1.25] xl:text-[18px] xl:leading-[1.333]">Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission.</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-[36px] md:gap-[56px]">
                    <h3 className="text-[30px] font-extralight uppercase xl:text-[36px] xl:leading-[1.083]">Why us ?</h3>
                    <ul className="flex flex-col w-[181px] gap-[16px] md:gap-[24px]">
                        <li className="flex flex-col text-right xl:flex-row">
                            <p>Professional development</p>
                            <p>We offer growth opportunities and a creative environment to nurture your talents.</p>
                        </li>
                        <li className="flex flex-col text-right xl:flex-row">
                            <p>Teamwork</p>
                            <p>Join our close-knit family, where support and inspiration abound.</p>
                        </li>
                        <li className="flex flex-col text-right xl:flex-row">
                           <p>Stimulating work environment</p>
                           <p>Flexibility and remote options for a comfortable experience.</p> 
                        </li>
                        <li className="flex flex-col text-right xl:flex-row">
                            <p>Exciting challenges</p>
                            <p>Unleash your potential through unforgettable projects showcasing Carpathian beauty.</p>
                        </li>
                    </ul>


                </div>
                <div className="hidden bg-gray-200 md:flex md:w-[463px] md:h-[543px]"></div>
            </div>
        </div>
    </section>
  )
}

export default Career