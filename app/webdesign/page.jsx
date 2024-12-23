import React from 'react';
import Image from 'next/image';

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};

const CardBody = ({ className = "" }) => (
  <div className={`px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left ${className}`}>
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
);

const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/533708402/vector/responsive-web-design-gadgets-over-white.jpg?s=612x612&w=0&k=20&c=8NBFJu9NSiMWF6i512u3lO14NEKO3EU-ZTOxf785tcM="
      alt="Responsive web design illustration"
      objectFit="cover"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      height={450} 
      width={300}   
      className=''
    />
    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"></div>
    {children}
  </div>
);

function WebDesign() {
  return (
    <div className="min-h-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9">
        <div>
          <h2 className='text-2xl '>Custom Web Design</h2>
        </div>
        <CardWithImageV1>
          <CardBody className="absolute px-4 pb-4 inset-0 flex flex-col justify-end size-full" />
        </CardWithImageV1>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default WebDesign;
