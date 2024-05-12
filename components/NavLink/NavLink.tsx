'use client';

import { Link } from 'react-scroll';

type NavLinkProps = {
    link: string;
    text: string;
    closeMenu?: () => void;
  };
  
const NavLink: React.FC<NavLinkProps> = ({link , text, closeMenu}) => {
  return (
    
    <Link
                   className='social relative inline-block cursor-pointer  capitalize tracking-[1.4px] font-inter text-white text-[18px] md:text-[14px]'
                   to={link}
                   onClick={closeMenu}
                   smooth={true}
                   duration={500}
                   tabIndex={0}
                  >
                   {text}
    </Link>
 )
}

export default NavLink