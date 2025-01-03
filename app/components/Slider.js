'use client';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Slider = ({ title, processSteps, FooterText }) => {
  return (
    <div className="bg-neutral-200">
      <div className="flex h-11 items-center justify-center">
        <span className="font-bold uppercase text-xl mt-20 ">{title}</span>
      </div>
      <HorizontalScrollCarousel cards={processSteps} />
      <div className="flex h-11 items-center justify-center">
        <span className="font-semibold uppercase bg-transparent">
          {FooterText}
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden theme p-4 space-y-2"
    >
      {/* Card ID */}
      <div className="flex justify-center">
        <span className="text-center text-2xl font-bold bg-neutral-200 rounded-full w-14 h-14 flex items-center justify-center">
          {card.id}
        </span>
      </div>

      {/* Title */}
      <div className="flex justify-center">
        <h2 className="text-xl font-bold text-center heading">{card.title}</h2>
      </div>

      {/* Steps as a List */}
      <div className="mt-4 space-y-2 primary">
        {card.step.split(", ").map((line, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-lg text-neutral-500">➤</span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default Slider;
