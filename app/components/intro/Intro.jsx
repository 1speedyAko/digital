'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

function Intro() {
  

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const phrases = ['custom websites', 'graphic design', 'Digital marketing'];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[index % phrases.length];
     
      setText(
        isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed, phrases]);

  return (
    <div className="font-bold relative mt-14">
      <div className="h-[50vh] flex flex-col ">
       <div
  ref={ref}
  className="text-center text-gray-100 px-4 sm:px-8"
>
  <AnimatePresence>
    {['LET\'S BUILD, IMPROVE,', 'AND SCALE YOUR BRAND'].map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex justify-center flex-wrap "
          >
            {line.split('').map((char, i) => (
              <motion.span
                key={`${lineIndex}-${i}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.05,
                  delay: (lineIndex * line.length + i) * 0.05,
                }}
                className="inline-block text-2xl sm:text-4xl md:text-5xl font-bold"
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.span>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>

        <div className="pt-2 text-2xl mt-2 ">
          <span className="text-gray-100 ml-12 mb-4">
            {text}
            <span className="animate-blink">|</span>
          </span>
          <p className="text-sm text-center mx-4 mt-2 text-gray-200 lg:mt-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ratione dignissimos tempora facilis recusandae ad error voluptate earum voluptatum cumque mollitia rem itaque velit natus ut provident dolorem, deleniti soluta doloribus excepturi, sapiente cupiditate. Saepe incidunt ut eligendi, voluptate autem sit nulla sunt error accusamus. Doloremque at voluptatem modi accusamus dolorem inventore tempora veniam voluptatum velit, temporibus veritatis maxime minima perspiciatis et aspernatur corporis, architecto ipsum dignissimos. Quibusdam quod cupiditate quo adipisci? Esse, sit saepe delectus voluptas voluptatibus, accusamus soluta quas doloribus adipisci exercitationem, fugit optio quo veniam hic perspiciatis?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
