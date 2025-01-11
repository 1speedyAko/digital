import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-200 p-4 md:p-8">
        <h2 className="text-4xl font-bold flex justify-center text-neutral-950">At a glance</h2>
      <div className="mx-auto max-w-5xl">
       
       
<Link
  heading="Web Design"
  subheading="Creating visually stunning and user-friendly websites"
  imgSrc="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=612x612&w=0&k=20&c=LLywtLnfu5FETIvkaFjy_xcHnaIGmaKZYxcPKAoyPcA="
  href="/webdesign"
/>
<Link
  heading="SEO"
  subheading="Optimizing your website to rank higher and drive traffic"
  imgSrc="https://media.istockphoto.com/id/1408944678/vector/social-media-marketing-flat-illustration-isometric-illustration-flat-design.jpg?s=612x612&w=0&k=20&c=7I0qfnr77kIbYoRIPvFEAKwv1wn4HpIg3ZuR7aANHYk="
  href="/seo"
/>
<Link
  heading="Content Marketing"
  subheading="Crafting engaging content that resonates with your audience"
  imgSrc="https://media.istockphoto.com/id/1007848764/vector/video-on-mobile-screen-video-sharing-and-marketing-flat-vector-concept-with-icons.jpg?s=612x612&w=0&k=20&c=iu263H6ut0ejQEt6ue9fzIX4XKQRGzPXKhDyZh7xp-M="
  href="/social_media"
/>
<Link
  heading="Social Media Marketing"
  subheading="Building your brand's presence across social platforms"
  imgSrc="https://media.istockphoto.com/id/1393258521/photo/social-media-application-tiktok-on-the-smartphone-screen.jpg?s=612x612&w=0&k=20&c=PIN-qSfgCKsZmHsJ_IxgbqEFqVcMBuD4XUOFRXXpElg="
  href="/social_media"
/>
<Link
  heading="Email Marketing"
  subheading="Connecting with your audience through personalized campaigns"
  imgSrc="https://media.istockphoto.com/id/1450220273/vector/email-service-with-correspondence-delivery-electronic-mail-message-and-business-marketing-in.jpg?s=612x612&w=0&k=20&c=-FSrRSxoFbo8breKzAt-ZS9ZjNEe7rYDL30AY3Wt9Rg="
  href="#"
/>

        
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-2xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-800">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-950" />
      </motion.div>
    </motion.a>
  );
};