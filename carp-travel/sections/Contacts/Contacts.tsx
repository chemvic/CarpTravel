
const Contacts = () => {
  return (
    <section  id="contacts"
    className="section background-overlay contacts">
        <div className="container flex flex-col">
            <h2 className="uppercase mb-[36px] text-[40px] font-thin leading-[1.4] tracking-[-1.6px] md:text-justify md:text-[67px] md:leading-[0.985] md:tracking-[-2.68px] xl:text-[98px] xl:leading-[1.21] xl:tracking-[-3.92px] xl:mb-[71px] ">contact <span className="font-medium">us</span></h2>                            

            <address className="flex flex-col md:flex-row md:gap-[90px] md:ml-auto xl:flex-col">
                    <ul className="">
                        <li className="flex flex-row-reverse gap-[20px] mb-[24px]">
                            <p className="text-[12px] font-extralight leading-[1.714] tracking-none xl:leading-[2]">Phone number</p>
                            <ul>
                                <li>
                                    <a href="tel:38 (098) 12 34 567"
                                    className="relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333] text-right">
                                        +38 (098) 12 34 567
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:38 (073) 12 34 567"
                                    className="relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333] text-right">
                                        +38 (073) 12 34 567
                                    </a>
                                </li>
                            </ul>
                            
                        </li>
                        <li className="flex flex-row-reverse gap-[20px]  mb-[24px]">
                            <p className="text-[12px] font-extralight leading-[1.714] align-bottom tracking-none xl:leading-[2] min-w-[81px] text-left">E-mail</p>
                            <a href="mailto:support@carptravel.com"
                            className="relative text-[14px] not-italic leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333] text-right">
                                support@carptravel.com 
                            </a>
                        </li>
                    </ul>
                    <div className="mb-[12px] flex gap-[20px] self-end xl:flex-row-reverse">
                        <p className="text-[12px] font-extralight leading-[1.714] tracking-none xl:leading-[2]">Follow us</p>
                        <ul className="min-w-[81px] text-left md:w-[220px]">
                            <li>
                                <a 
                                    className='relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333]'
                                    href="/"
                                    target="_blank"
                                    rel="nofollow noreferrer noopener"
                                    >                                    
                                   facebook
                                </a>

                            </li>
                            <li>
                                <a 
                                    className='relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333]'
                                    href="/"
                                    target="_blank"
                                    rel="nofollow noreferrer noopener"
                                    >                                    
                                   instagram
                                </a>
                            </li>
                            <li>
                                <a 
                                    className='relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333]'
                                    href="/"
                                    target="_blank"
                                    rel="nofollow noreferrer noopener"
                                    >                                    
                                   youtube
                                </a>                            
                                
                            </li>
                            <li>
                                <a 
                                    className='relative text-[14px] leading-[1.714] align-top md:text-[16px] md:leading-[1.5] xl:text-[18px] xl:leading-[1.333]'
                                    href="/"
                                    target="_blank"
                                    rel="nofollow noreferrer noopener"
                                    >                                    
                                   tiktok
                                </a>
                            </li> 
                        </ul>
                        
                    </div>
            </address>
            <div className="">Form</div>
        </div>
    </section>
  )
}

export default Contacts