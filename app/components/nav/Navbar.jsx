"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoLinkOutline } from "react-icons/io5";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFlyout, setOpenFlyout] = useState(null);
  const [openArrow, setOpenArrow] = useState(false)
  const [open, setOpen] = useState(false)

  const handleMouseEnter = (menu) => setOpenFlyout(menu);
  const handleMouseLeave = () => setOpenFlyout(null);

  const dropdown = () => {
    setOpenArrow((prev)=>!prev)
  }
  
  const serviceDropDown = () =>{
    setOpen((prev)=>!prev)
  }

  return (
    <nav className="relative  shadow-md z-50 ">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-200">MyBrand</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 justify-center w-full ">
          <NavLink href="/" className="text-gray-200">Home</NavLink>
          <NavLink href="/about" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}
           className='relative'>
            About
           
            <HoverLine active={openFlyout === "about"} />
            <AnimatePresence>
              {openFlyout === "about" && <AboutFlyout />}
            </AnimatePresence>
          </NavLink>
          <NavLink href='/services'>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
             >
              <button className="relative  ">
                Services
                <HoverLine active={openFlyout === "services"} />
              </button>
              <AnimatePresence>
                {openFlyout === "services" && <ServicesFlyout />}
              </AnimatePresence>
            </div>
          </NavLink>
          <NavLink href="/contact" className="text-gray-200">Contact</NavLink>
          
          <NavLink href="/contact">Blog</NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <AiOutlineMenu
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-64 h-screen bg-white shadow-lg z-50"
          >
            <div className="p-4">
              <button
                className="text-gray-800 font-bold text-lg mb-4"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineClose />
              </button>
              <a href="/" className="block py-2 text-gray-800 hover:bg-gray-100 rounded">
                Home
              </a>
              <div className="flex items-center justify-between py-2 text-gray-800 hover:bg-gray-100 rounded">
                <a href="/about" className="text-gray-800">
                  About
                </a>
                <div onClick={dropdown} className="cursor-pointer ml-2">
                  {openArrow ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {openArrow && (
                <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                  <Link href="/features">
                    <h4 className="font-semibold text-gray-800">Features</h4>
                  </Link>
                </div>
      
                  <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                    <h4 className="font-semibold text-gray-800">Testimonials</h4>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                    <h4 className="font-semibold text-gray-800">Team</h4>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-md shadow-sm">
                    <h4 className="font-semibold text-gray-800">Partners</h4>
                  </div>
                </div>
              </div>
              )}


              <div className="flex items-center justify-between py-2 text-gray-800 hover:bg-gray-100 rounded">
                <a href="#" className=" text-gray-800 ">
                  Services
                </a>
                <div onClick={serviceDropDown}>
                    {open ? <FaAngleUp/>  : <FaAngleDown/> }
                </div>
              </div>
              {open&&(
                <div className="grid grid-cols-3 gap-6 relative text-center">
                <div>
                  <h3 className="font-semibold text-gray-800">Graphic design</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Business Cards
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Flyers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Posters
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Web development</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        SEO
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Ads and content marketing
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Branding</h3>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Logo Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Brand Guidelines
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
                        Social Media Branding
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              )}
              
              <a href="/blog" className="block py-2 text-gray-800 hover:bg-gray-100 rounded">
                Blog
              </a>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children, onMouseEnter, onMouseLeave }) => (
  <a
    href={href}
    className="relative text-gray-50 hover:text-gray-200 transition-colors"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
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
      className="absolute left-[-630%] transform -translate-x-1/2 top-full mt-8  w-[600px] bg-white shadow-lg p-6 z-50  "
      // style={{ left: "translateX(-20px)" }}
    >
      {/* Arrow pointing to the button */}
      <div className="absolute left-1/2  top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />

      <div className="grid grid-cols-2 gap-6 ">
        {/* Left Section - About Us */}
        <div className="flex-1 bg-amber-100">
          <h3 className="font-semibold text-gray-800">About Us</h3>
          <p className="text-sm text-gray-600 mt-2">
            We are a team of passionate individuals dedicated to bringing the best services to our clients.
          </p>
        </div>

        {/* Right Section - Small Boxes */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-md shadow-sm">
            <Link href="/features">
              <h4 className="font-semibold text-gray-800">Features</h4>
            </Link>
          </div>

            <div className="p-4 bg-gray-100 rounded-md shadow-sm">
              <h4 className="font-semibold text-gray-800">Testimonials</h4>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-md shadow-sm">
              <h4 className="font-semibold text-gray-800">Team</h4>
            </div>
            <div className="p-4 bg-gray-100 rounded-md shadow-sm">
              <h4 className="font-semibold text-gray-800">Partners</h4>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
        Learn More About Us
      </button>
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
      className="absolute left-[-480%] top-full mt-8 w-[600px] bg-white shadow-lg p-6 z-50 transform -translate-x-1/2"
    >
      {/* Arrow pointing to the button */}
      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />

      <div className="grid grid-cols-3 gap-6 relative ml-14">
      <div>
        <h3 className="font-semibold text-gray-800">Graphic design</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Business Cards
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Flyers
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Posters
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">Web development</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Web Design
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              SEO
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Ads and content marketing
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">Branding</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Logo Design
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Brand Guidelines
            </a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">
              Social Media Branding
            </a>
          </li>
        </ul>
      </div>
    </div>

      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
        Explore Services
      </button>
    </motion.div>
  );
};

export default Navbar;
