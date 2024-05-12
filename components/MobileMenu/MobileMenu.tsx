'use client';

import { useEffect } from 'react';

import PageNav from '../PageNav/PageNav';

type MobileMenuProps = {
    closeMenu: () => void;
  };

const MobileMenu: React.FC<MobileMenuProps> = ({closeMenu}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);

      useEffect(()=>{
    const handleEsc =(event: { keyCode: number; })=>{
      if(event.keyCode === 27){
        closeMenu();
      }
    };   
      document.addEventListener('keydown', handleEsc);
  
    return ()=>{
            document.removeEventListener('keydown', handleEsc);
    };
  },[closeMenu])

  return (
    <div className="bg-overlay z-40  overflow-hidden fixed top-0 bottom-0 left-0 right-0  backdrop-blur-[50px]">
        <div className=' relative flex top-0 bottom-0 left-0 right-0 min-h-screen  items-center justify-center'>
        <PageNav closeMenu={closeMenu}/>
    </div> 
    </div>
   
  )
}

export default MobileMenu