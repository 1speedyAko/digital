'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { TextFade } from './textfade';
import Image from 'next/image';

function Texts() {
  return (
    <div className="space-y-10 bg-white">
      <h1 className="font-bold text-center mt-3 text-3xl">Let's walk you through</h1>

      <div className="space-y-10">
        {/* First Section */}
        <div className="grid lg:grid-cols-[1fr_3fr] bg-white p-6">
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <TextFade>
              <h2 className="text-2xl font-semibold">Digital Marketing</h2>
            </TextFade>
            <TextFade>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolore impedit facilis assumenda minima officia quod reprehenderit rem fugiat consequatur adipisci nemo voluptatem ea recusandae quis tenetur, velit iusto fuga?
              </p>
            </TextFade>
          </div>
          <div className="text-center flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VvfGVufDB8fDB8fHww"
              alt="Digital Marketing"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Second Section with Image on Left */}
        <div className="grid lg:grid-cols-[3fr_1fr] bg-white p-6">
          <div className="text-center flex items-center justify-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661281312741-531b9e37b756?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt="Custom Web Design"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <TextFade>
              <h2 className="text-2xl font-semibold sm:mt-3">Custom Web Design</h2>
            </TextFade>
            <TextFade>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates error placeat saepe laboriosam praesentium excepturi veritatis. Eos omnis tempore maiores sed, perferendis earum excepturi laboriosam quis libero alias quo repellat.
              </p>
            </TextFade>
          </div>
        </div>

        {/* Third Section with Text on Left */}
        <div className="grid lg:grid-cols-[1fr_3fr] bg-white p-6">
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <TextFade>
              <h2 className="text-2xl font-semibold">Graphic Design</h2>
            </TextFade>
            <TextFade>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt vel nulla autem odit id iste asperiores sunt dolor ad suscipit tempora sed, quis quos, cupiditate dolore accusamus at ab?
              </p>
            </TextFade>
          </div>
          <div className="text-center flex items-center justify-center">
            <Image
              src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=ozNLFU8-irHrvD3w2fxIOOmCzHRuxkyhYiFaTw8-tB0="
              alt="Graphic Design"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Texts;
