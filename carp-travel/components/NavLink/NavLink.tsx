'use client';
import { Link } from 'react-scroll';
type NavLinkProps = {
    link: string;
    text: string;
    closeMenu?: () => void;
  };
  
const NavLink: React.FC<NavLinkProps> = ({link , text, closeMenu}) => {
  return (
    <div >
    <Link
                   className='md:ml-6 xl:ml-14 cursor-pointer transition-colors duration-500 ease-in-out hover:bg-white/20 capitalize tracking-[1.4px] font-inter text-white text-lg md:text-sm'
                   to={link}
                   onClick={closeMenu}
                   smooth={true}
                   duration={500}
                   tabIndex={0}
                  >
                   {text}
    </Link>
   </div>  )
}

export default NavLink