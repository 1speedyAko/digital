'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Slider = ({ title, processSteps, FooterText }) => {
  return (
    <div className="bg-neutral-200">
      <div className="flex h-11 items-center justify-center">
        <span className="font-bold uppercase text-xl mt-10 ">{title}</span>
      </div>
      <div className="p-4">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-7xl mx-auto relative"
        >
          <CarouselContent className="-ml-4">
            {processSteps.map((card) => (
              <CarouselItem key={card.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="theme inline-flex static transform-none" />
            <CarouselNext className="theme inline-flex static transform-none" />
          </div>
        </Carousel>
      </div>
      <div className="flex h-11 items-center justify-center">
        <span className="font-semibold uppercase bg-transparent">
          {FooterText}
        </span>
      </div>
    </div>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-full overflow-hidden theme p-4 space-y-2">
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