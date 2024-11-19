'use client';

import Link from 'next/link';
import HamburgerMenuIcon from '@/app/menu/humbergure';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@/app/menu/close';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pathname, setPathname] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Set the pathname after the component has mounted
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to get dynamic navbar classes based on scroll
  const navbarClasses = `fixed top-0 w-full z-50 transition-colors duration-300 ${
    isScrolled ? ' text-black' : 'text-white'
  }`;

  // Function to get active link classes
  const linkClasses = (href) =>
    pathname === href
      ? 'text-gray-200' // Active link style
      : 'hover:text-gray-200';

  function getMenuClasses() {
    let menuClasses = [];

    if (isOpen) {
      menuClasses = [
        'flex',
        'absolute',
        'top-[60px]',
        'w-full',
        'p-4',
        'left-0',
        'gap-6',
        'flex-col',
        'md:gap-4',
        'lg:gap-4',
        'hover:gray-700',
        'theme',
      ];
    } else {
      menuClasses.push('hidden', 'md:flex', 'md:gap-4', 'lg:gap-4');
    }
    return menuClasses.join(' ');
  }

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex justify-between items-center p-4 sm:p-4 md:flex md:justify-between md:items-center">
        <Image
          src="/logo.png"
          width={50}
          height={30}
          alt="logo"
        />
          <span className="ml-2 text-xl font-semibold text-gray-100">Digital Flex</span>
        <div className={getMenuClasses()}>
          <Link href="/" className={linkClasses('/')}>
            Home
          </Link>
          <Link href="/about" className={linkClasses('/about')}>
            About
          </Link>
          <Link href="/services" className={linkClasses('/services')}>
            Services
          </Link>
          <Link href="/contact" className={linkClasses('/contact')}>
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
