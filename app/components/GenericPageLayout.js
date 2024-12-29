// components/GenericPageLayout.js
import React from 'react';
import ListHover from './ListHover';
import Slider from './Slider';
import Form from './Form';
import Image from 'next/image';

const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/533708402/vector/responsive-web-design-gadgets-over-white.jpg?s=612x612&w=0&k=20&c=8NBFJu9NSiMWF6i512u3lO14NEKO3EU-ZTOxf785tcM="
      alt="Responsive web design illustration"
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

const GenericPageLayout = ({ heading, description, list, cardContent, children }) => {
  return (
    <div className="min-h-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div>
          <h2 className="text-4xl font-bold">{heading}</h2>
          <p className="mt-3">{description}</p>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="flex text-2xl gap-2">
                <span className="relative mt-2 font-bold">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <CardWithImageV1>
            <div className="absolute px-4 pb-4 inset-0 flex flex-col justify-end size-full">
              <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
                {cardContent.title}
              </h3>
              <p className="text-sm leading-5">{cardContent.description}</p>
            </div>
          </CardWithImageV1>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div>
          <ListHover />
        </div>
        <div className="grid place-content-center">
          <Form />
        </div>
      </div>
      <Slider />
      {children && <div>{children}</div>}
    </div>
  );
};

export default GenericPageLayout;
