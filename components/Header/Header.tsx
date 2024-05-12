'use client';

import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo/Logo';
import PageNav from '../PageNav/PageNav';
import MobileMenu from '../MobileMenu/MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  };
  const closeMenu = (): void => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  const isMobile = useMediaQuery({
    query: '(max-width: 767.99px)',
  });
  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  return (
    <header className="absolute top-0 left-0 right-0  z-20">
      <div className="container">
        <nav className="flex items-center justify-between py-9 md:py-6">
          <Logo />
          <button
            type="button"
            onClick={toggle}
            aria-label="turn menu"
            className="relative z-40 md:hidden tracking-[1.4px] text-[14px] uppercase transition-colors duration-300 ease-in-out hover:bg-white/20 focus:bg-white/20"
          >
            {!isOpen ? 'MENU' : 'CLOSE'}
          </button>

          <div className="hidden md:block">
            <PageNav />
          </div>
        </nav>
      </div>

      {isMobile && isOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};
