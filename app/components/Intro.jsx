'use client';

import React, { useState} from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { TextFade } from './TextFade';
import { StaggeredFade } from './Staggered-fade';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


function Intro(
  
) {
  const [speed, setSpeed] = useState(150);
  const ref = React.useRef(null);
  


   

  return (
    <div className="font-bold relative mt-36 min-h-full">
      <div className="">
      <StaggeredFade text={"We help elevate small and medium brands in the digital space"}/> 
         
        <div className="pt-2 text-2xl mt-2 md:min-h-max">
        
          <div className='grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 sm:gap-3 px-5 text-xl text-center mt-7 min-h-max'>
          <div className="">
            <TextFade>
              <p className="block w-full  text-balance primary text-center">
              Digital Cheuxes is an online marketing agency dedicated to delivering top-quality services to online brands. Our team of digital marketing experts collaborates closely with clients to boost brand growth and ensure clients meet their objectives and targets. We specialize in creating custom web designs and digital marketing solutions tailored for optimal results.              </p>
            </TextFade>
            <div className="mt-2">
              <Link href="/quote">
                <Button className="relative overflow-hidden bg-blue-600 text-white px-6 py-3 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-blue-700">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 blur-md transition-all duration-500 group-hover:opacity-100"></span>
                  <span className="relative">Request Quote</span>
                </Button>
              </Link>
            </div>


          </div>

            <div className=' grid place-content-center ml-20  sm:block mt-5'>
              <TextFade>
              <Image
                className='hidden md:block'
                alt='Description'
                src='data:image/jpeg;base64,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'
                width={300}
                height={400}
              />                
              </TextFade>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Intro;
