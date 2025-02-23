'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { TextFade } from './TextFade';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowBigRight } from 'lucide-react';

function Texts() {
  return (
    <div className="space-y-10 bg-white ">
      <TextFade>
          <h2 className="font-bold text-center mt-3 pt-4 text-3xl">Let&apos;s walk you through</h2>              
      </TextFade>


      <div className="space-y-10">
        {/* First Section */}
        <div className="grid lg:grid-cols-[1fr_3fr] bg-white p-6 sm:gap-4">
          <div className="text-center flex flex-col items-center justify-center space-y-4 p-3">
            <TextFade>
              <h2 className="text-2xl font-semibold">Digital Marketing</h2>
            </TextFade>
            <TextFade>
              <p>
              At Digital Cheuxes, we specialize in elevating your brand to new heights through strategic digital marketing. By utilizing advanced marketing tools and harnessing the power of social media, we create impactful online campaigns that boost visibility, engage audiences, and drive measurable growth for your business.
              </p>
              <Button className='mt-2 '>
                <ArrowBigRight/>
                <Link href="/digitalm">
                Read More
                </Link>
              </Button>
            </TextFade>
          </div>
          <div className="text-center flex items-center justify-center">
            <TextFade>
              <Image
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VvfGVufDB8fDB8fHww"
                alt="Digital Marketing"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </TextFade>
           
          </div>
        </div>

        {/* Second Section with Image on Left */}
        <div className="grid lg:grid-cols-[3fr_1fr] bg-white p-6">
          <div className="text-center flex items-center justify-center">
            <TextFade>
              <Image
                src="https://plus.unsplash.com/premium_photo-1661281312741-531b9e37b756?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                alt="Custom Web Design"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </TextFade>
            
          </div>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <TextFade>
              <h2 className="text-2xl font-semibold sm:mt-3">Custom Web Design</h2>
            </TextFade>
            <TextFade>
              <p>
              We collaborate closely with our clients to deliver modern, custom-designed websites that align seamlessly with your brand guidelines. By enhancing your digital presence, we help you connect with a broader audience and create a lasting impact online              </p>
            </TextFade>
            <Button className='mt-2'>
              <ArrowBigRight />
                <Link href="/webdesign">
               Visit Web Design
                </Link>
              </Button>
          </div>
        </div>

        {/* Third Section with Text on Left */}
        <div className="grid lg:grid-cols-[1fr_3fr] bg-white p-6">
          <div className="text-center flex flex-col items-center justify-center space-y-4 p-3">
            <TextFade>
              <h2 className="text-2xl font-semibold">Graphic Design</h2>
            </TextFade>
            <TextFade>
              <p>
              Our team of experienced graphic designers is dedicated to creating unique and impactful brand identities tailored to your vision. By engaging you in the design process, we ensure your branding aligns with your goals, enhancing recognition and driving success.              </p>
            </TextFade>
               <Button className='mt-2'>
                <ArrowBigRight />
                <Link href="/gdesign">
               Visit  Graphic Design
                </Link>
              </Button>
          </div>
          <div className="text-center flex items-center justify-center">
            <TextFade>
            <Image
              src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=ozNLFU8-irHrvD3w2fxIOOmCzHRuxkyhYiFaTw8-tB0="
              alt="Graphic Design"
              width={600}
              height={400}
              className="rounded-lg"
            />
            </TextFade>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Texts;
