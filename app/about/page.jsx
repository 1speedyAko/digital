'use client'

import React, { useRef,useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useLoading } from "../components/LoadingContext";

const TextParallaxContentExample = () => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, [setIsLoading]);
  return (
    <div className="mt-36">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1585229259126-8e72b0f28f98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViZGVzaWdufGVufDB8fDB8fHww"
        subheading="Digital Cheuxes"
        heading="About Us"
      >
        <ExampleContent
          title="Who are we?"
          text="We are a team of passionate professionals committed to helping businesses thrive in the digital space. From digital marketing to web development and graphic design, we provide tailored solutions that elevate your brand and drive measurable results."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="commitment"
      >
        <ExampleContent
          title="Our Commitment"
          text="We prioritize quality in everything we do. From the design process to implementation, our goal is to deliver excellence and ensure your business stands out in the competitive digital landscape."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="why choose us"
      >
        <ExampleContent
          title="Why Choose Us?"
          text="We combine modern aesthetics with advanced technology to create solutions that reflect your brand's vision and resonate with your audience."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1633432695542-b2c8e2b8a26c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYmRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
        subheading=""
        heading="Our Vision"
      >
        <ExampleContent
          title="Vision"
          text="Our vision at Digital Cheuxes is to revolutionize digital marketing by seamlessly integrating innovation, strategy, and technology. We strive to create impactful digital experiences that empower brands, foster meaningful connections, and drive long-term success in the ever-evolving digital landscape."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1585229259079-05ab82f93c7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYmRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
        subheading=""
        heading="Mission"
      >
        <ExampleContent
          title="Our Mission?"
          text="At Digital Cheuxes, our mission is to blend cutting-edge digital marketing strategies with creativity and technology to elevate your brand. We craft data-driven solutions that amplify your online presence, engage your audience, and drive meaningful results."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, text }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-16 md:grid-cols-12 mt-36">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 heading">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl primary md:text-2xl">{text}</p>
    </div>
  </div>
);


export default TextParallaxContentExample;
