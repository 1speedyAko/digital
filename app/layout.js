'use client'

import "./globals.css";
import Navbar from "./components/nav/Navbar";
// import Body from "./components/Body/page";
import Footer from "./components/footer/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FramerLoader from "./components/Framerloader";
import { LoadingProvider } from "./components/LoadingContext";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  const pathName = usePathname()
  const[ loading, setLoading] = useState(false)


  useEffect (()=>{
    const handleStart =()=> setLoading(true)
    const handleComplete = ()=> setLoading(false)

    if (pathName) {
      handleStart()
      setTimeout(handleComplete,400)
    }
    return ()=>{
      handleComplete()
    }
  },[pathName])
  return (
    <html lang="en">
      <body
        className={` antialiased theme`}
      >
      <Analytics/>
        <LoadingProvider>
          <FramerLoader/>
          <Navbar/>
          {children}
          <Footer/>
        </LoadingProvider>
       
      </body>
    </html>
  );
}
