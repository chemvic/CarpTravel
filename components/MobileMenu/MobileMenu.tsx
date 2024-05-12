'use client';

import { useEffect } from 'react';

import { motion } from 'framer-motion';

import PageNav from '../PageNav/PageNav';

const variants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.3,
      x: { duration: 1 },
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeMenu]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className="bg-overlay-menu z-10  overflow-hidden fixed top-0 bottom-0 left-0 right-0  backdrop-blur-[50px]"
    >
      <div className="flex top-0 bottom-0 left-0 right-0 min-h-screen  items-center justify-center">
        <PageNav closeMenu={closeMenu} />
      </div>
    </motion.nav>
  );
};

export default MobileMenu;
