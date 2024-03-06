import React from 'react'
import Logo from '../Logo/Logo'
import PageNav from '../PageNav/PageNav'

export const Header = () => {
  return (
    <header className='absolute top-0 left-0 right-0  z-20'>
       <div className='container'>
       <nav className='flex items-center justify-between py-9 md:py-6'>
        <Logo/>
        <div className="md:hidden">
            <button type="button" className='mb:hidden tracking-[1.4px] text-sm uppercase transition-colors duration-500 ease-in-out hover:bg-white/20'>
                MENU
            </button>
        </div>
        <div className='hidden md:block'>
            <PageNav/> 
        </div>          
        </nav>      
        </div>
    </header>
  )
}
