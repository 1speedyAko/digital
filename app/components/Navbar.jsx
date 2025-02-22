"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoLinkOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [openFlyout, setOpenFlyout] = useState(null);
  const [openAbout, setOpenAbout] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFlyout = (menu) => {
    if (isTablet) {
      setOpenFlyout((prev) => (prev === menu ? null : menu));
    }
  };

  const handleMouseEnter = (menu) => {
    if (!isTablet) setOpenFlyout(menu);
  };

  const handleMouseLeave = () => {
    if (!isTablet) setOpenFlyout(null);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 shadow-md z-50 theme"
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image src="/cover.png" width={150} height={89} alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 justify-center w-full">
          <NavLink href="/" className="text-gray-200">
            Home
          </NavLink>
          <NavLink
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleFlyout("about")}
          >
            <div className="relative">
              <button className="relative">About</button>
              <HoverLine active={openFlyout === "about"} />
              <AnimatePresence>{openFlyout === "about" && <AboutFlyout />}</AnimatePresence>
            </div>
          </NavLink>
          <NavLink
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleFlyout("services")}
          >
            <div className="relative">
              <button className="relative">Services</button>
              <HoverLine active={openFlyout === "services"} />
              <AnimatePresence>{openFlyout === "services" && <ServicesFlyout />}</AnimatePresence>
            </div>
          </NavLink>
          <NavLink href="/contact" className="text-gray-200">
            Contact
          </NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden min-w-max">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-gray-50">
                <AiOutlineMenu className="text-2xl cursor-pointer" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              
              <div className="mt-6 flex flex-col space-y-4">
                <Link href="/" className="text-gray-800 hover:bg-gray-100 p-2 rounded">
                  Home
                </Link>

                <div>
                  <div 
                    className="flex items-center justify-between text-gray-800 hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={() => setOpenAbout(!openAbout)}
                  >
                    <span>About</span>
                    {openAbout ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  
                  {openAbout && (
                    <div className="mt-2 grid grid-cols-2 gap-2 p-2">
                      <Link href="/about" className="p-2 bg-gray-100 rounded-md">
                        <h4 className="font-semibold text-sm">Commitment</h4>
                      </Link>
                      <Link href="/about" className="p-2 bg-gray-100 rounded-md">
                        <h4 className="font-semibold text-sm">About Us</h4>
                      </Link>
                      <Link href="/about" className="p-2 bg-gray-100 rounded-md">
                        <h4 className="font-semibold text-sm">Team</h4>
                      </Link>
                      <Link href="/about" className="p-2 bg-gray-100 rounded-md">
                        <h4 className="font-semibold text-sm">Partners</h4>
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <div 
                    className="flex items-center justify-between text-gray-800 hover:bg-gray-100 p-2 rounded cursor-pointer"
                    onClick={() => setOpenServices(!openServices)}
                  >
                    <span>Services</span>
                    {openServices ? <FaAngleUp /> : <FaAngleDown />}
                  </div>
                  
                  {openServices && (
                    <div className="mt-2 space-y-4 p-2">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Branding</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link href="/bcards" className="text-sm text-gray-600 hover:text-indigo-500">
                              Business Cards
                            </Link>
                          </li>
                          <li>
                            <Link href="/logo" className="text-sm text-gray-600 hover:text-indigo-500">
                              Logo Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/gdesign" className="text-sm text-gray-600 hover:text-indigo-500">
                              Graphic Design
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Web Design</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link href="/webdesign" className="text-sm text-gray-600 hover:text-indigo-500">
                              Custom Website Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/wordpress" className="text-sm text-gray-600 hover:text-indigo-500">
                              WordPress Website Design
                            </Link>
                          </li>
                          <li>
                            <Link href="/ecommerce" className="text-sm text-gray-600 hover:text-indigo-500">
                              eCommerce Website Design
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Marketing</h3>
                        <ul className="space-y-2">
                          <li>
                            <Link href="/seo" className="text-sm text-gray-600 hover:text-indigo-500">
                              Search Engine Optimization
                            </Link>
                          </li>
                          <li>
                            <Link href="/social_media" className="text-sm text-gray-600 hover:text-indigo-500">
                              Social Media Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="/digitalm" className="text-sm text-gray-600 hover:text-indigo-500">
                              Social Media Branding
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/contact" className="text-gray-800 hover:bg-gray-100 p-2 rounded">
                  Contact
                </Link>
                
                <Link href="/blog" className="text-gray-800 hover:bg-gray-100 p-2 rounded">
                  Blog
                </Link>

                <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
                  Request Quote
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children, onMouseEnter, onMouseLeave, onClick }) => (
  <a
    href={href}
    className="relative text-gray-50 hover:text-gray-200 transition-colors"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {children}
    <HoverLine />
  </a>
);

const HoverLine = ({ active }) => (
  <span
    style={{
      transform: active ? "scaleX(1)" : "scaleX(0)",
    }}
    className="absolute -bottom-2 left-0 right-0 h-1 origin-left scale-x-0 bg-amber-100 transition-transform duration-300 ease-out"
  />
);

const AboutFlyout = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-[-630%] transform -translate-x-1/2 top-full mt-6 w-[600px] bg-white shadow-lg z-50"
      >
        <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
        <div className="bg-transparent absolute -top-6 left-0 right-0 h-6 z-10"></div>
        <div className="grid grid-cols-2">
          <div className="flex-1 bg-amber-200 p-5 z-30">
            <h3 className="font-semibold text-gray-800">About Us</h3>
            <p className="text-sm text-gray-600 mt-2">
              We are a team of passionate individuals dedicated to bringing the best services to our clients.
            </p>
            <Button className="mt-3">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          <div className="space-y-4 p-5 bg-slate-900 z-30">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <Link href="/about">
                  <h4 className="font-semibold text-gray-800">Features</h4>
                </Link>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-800">commitement</h4>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-800">Vison</h4>
              </div>
              <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                <h4 className="font-semibold text-gray-800">Mission</h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesFlyout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute left-[-480%] top-full mt-6 w-[600px] bg-white shadow-lg p-0 z-50 transform -translate-x-1/2"
    >
      <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
      <div className="bg-transparent absolute -top-6 left-0 right-0 h-6"></div>
      <div className="grid grid-cols-3 relative justify-center gap-y-0">
        <div className="text-white bg-amber-200 p-5">
          <h3 className="font-semibold text-gray-800">Branding</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="bcards" className="text-sm text-gray-600 hover:text-indigo-500">
                Business Cards
              </Link>
            </li>
            <li>
              <Link href="gdesign" className="text-sm text-gray-600 hover:text-indigo-500">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link href="logo" className="text-sm text-gray-600 hover:text-indigo-500">
                Logo Design
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-amber-100 p-5">
          <h3 className="font-semibold text-gray-800">Web development</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/webdesign" className="text-sm text-gray-600 hover:text-indigo-500">
                Custom Website Design
              </Link>
            </li>
            <li>
              <Link href="/wordpress" className="text-sm text-gray-600 hover:text-indigo-500">
                WordPress Web Design
              </Link>
            </li>
            <li>
              <Link href="ecommerce" className="text-sm text-gray-600 hover:text-indigo-500">
                eCommerce Web Design
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5">
          <h3 className="font-semibold text-gray-800">Marketing</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/social_media" className="text-sm text-gray-600 hover:text-indigo-500">
                Social Media Marketing
              </Link>
            </li>
            <li>
              <Link href="/seo" className="text-sm text-gray-600 hover:text-indigo-500">
                Search Engine Optimization
              </Link>
            </li>
            <li>
              <Link href="/digitalm" className="text-sm text-gray-600 hover:text-indigo-500">
                Brand Marketing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;