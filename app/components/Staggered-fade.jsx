'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';

export const StaggeredFade = ({ text, className = '' }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={cn(
        'text-4xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
        className
      )}
    >
      {letters.map((letter, i) => (
        <motion.span key={`${letter}-${i}`} variants={variants} custom={i}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
