'use client';
import classes from './Header.module.css';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import Link from 'next/link';
import { Exo } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Toggle from './Toggle';

const exo = Exo({
  variable: '--exo',
  weight: '800',
  subsets: ['latin'],
});

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Scroll down
      } else {
        setShowHeader(true); // Scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getLinkClass = (path) => {
    return pathname === path ? 'text-[#ff7500]' : 'text-white';
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-transform duration-500
        ${showHeader ? 'translate-y-0' : '-translate-y-[200px]'}
        ${classes.header}
      `}
    >
      <nav
        aria-label="Global"
        className={`mx-auto flex flex-row md:flex-row-reverse lg:flex-row items-center justify-between md:justify-end lg:justify-end p-6 lg:px-8 ${classes.nav}`}
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className={`-m-1.5 p-1.5 ${classes.logostyle}`}>
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="/logo.gif"
              width={80}
              height={70}
              className={`h-8 w-auto ${classes.imgresponsive}`}
            />
          </Link>
        </div>

        {/* Toggle for mobile */}
        {!mobileMenuOpen && (
          <div className="flex lg:hidden ">
            <Toggle
              onClick={() => setMobileMenuOpen(true)}
              expanded={false}
            />
          </div>
        )}

        {/* Desktop Nav Links */}
        <PopoverGroup
          className={`hidden lg:flex lg:gap-x-6 text-white ${classes.a} ${exo.className}`}
          style={{ width: '60%' }}
        >
          <Link href="/players" className={`text-sm/6 font-semibold ${getLinkClass('/players')}`}>
            Players
          </Link>
          <Link href="/puneriworld" className={`text-sm/6 font-semibold ${getLinkClass('/puneriworld')}`}>
            Paltan World
          </Link>
          <Link href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank" className="text-sm/6 font-semibold text-white">
            Tickets
          </Link>
        </PopoverGroup>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-black opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-transparent px-6 py-6">
          <div className={`flex items-center mt-[10px] justify-end md:justify-between lg:justify-between z-30`}>
            <Link href="/" className={`-m-1.5 p-1.5 hidden lg:block ${classes.mobileHeader}`}>
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo"
                src="/logo.gif"
                className={`h-8 w-auto ${classes.imgresponsive}`}
              />
            </Link>

            <Toggle onClick={() => setMobileMenuOpen(false)} expanded={true} />
          </div>

          <div className={`mt-6 flow-root bg-black text-center ${classes.mobilenav}`}>
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="/players" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${getLinkClass('/players')}`}>
                  Players
                </Link>
                <Link href="/puneriworld" className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${getLinkClass('/puneriworld')}`}>
                  Paltan World
                </Link>
                <Link href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white">
                  Tickets
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
