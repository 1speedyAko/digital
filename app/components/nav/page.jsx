'use client'

import Link from 'next/link'
import HamburgerMenuIcon from "@/app/menu/humbergure"
import React,{Children, useState} from 'react'
import CloseIcon from "@/app/menu/close"
import Image from "next/image"


export default function Navbar({}) {
  const [isOpen, setIsOpen]  = useState(false)
  const FlyoutLink = ({children, href , FlyoutContent}) =>{
    
  }

  function getMenuClasses() {
    let menuClasses = []

    if(isOpen){
      menuClasses = [
        "flex",
        "absolute",
        'top-[60px]',
        'w-full',
        "p-4",
        "left-0",
        "gap-6",
        "flex-col",
        "md:gap-4",
        "lg:gap-4",
        "hover:gray-700"
      ]
    }else{
      menuClasses.push("hidden", "md:flex", "md:gap-4", "lg:gap-4")
    }
    return menuClasses.join(" ")
  }
  return (
   <nav className="fixed top-0  w-full text-black font-semibold text-lg p-5 sm:p-4 md:flex md:justify-between md:items-center z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/logo.png"
          width={50}
          height={30}
          alt="logo"
        />
        <span></span>
        <div className={getMenuClasses()}>
          <Link href="/" className="hover:text-gray-200">
          Home
          </Link>
          <Link href="/about" className="hover:text-gray-200">
          About
          </Link>
          <Link href="/services" className="hover:text-gray-200">
          Services
          </Link>
          <Link href="/contact" className="hover:text-gray-200">
          Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
           onClick={()=>{
            setIsOpen(!isOpen)
           }}
          >
            {isOpen ? <CloseIcon/> : <HamburgerMenuIcon/>}

          </button>

          
        </div>

       </div>
      </nav>
      )}
 