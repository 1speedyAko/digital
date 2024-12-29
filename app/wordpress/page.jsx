import React from 'react'
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import Slider from '../components/Slider';
import Form from '../components/Form';
import { FaCheck } from "react-icons/fa";
import ListHover from '../components/ListHover';


const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};
const wordpressItems = [
  { text: 'Custom WordPress Themes', description: 'Create a unique look and feel for your website with custom themes.' },
  { text: 'SEO Optimized', description: 'Enhance your site’s visibility with SEO-friendly WordPress designs.' },
  { text: 'Responsive Layouts', description: 'Ensure your WordPress site looks great on any device with a responsive layout.' },
  { text: 'Plugin Integration', description: 'Easily extend your site’s functionality with WordPress plugins.' },
  { text: 'Content Management', description: 'Effortlessly manage and update your content with WordPress’s intuitive dashboard.' },
];

const CardBody = ({ className = "" }) => (
  <div className={`px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left ${className}`}>
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
);

const list = [
  {text:"Modern Websites", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Unique Design", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Responsive Websites", icon:<FaCheck style={{color:'green'}}/>},
]


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

function wordpress() {
  return (
    <div className="min-h-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
          <h2 className='text-4xl font-bold heading '>Wordpress Web Design</h2>
          <p className='mt-3 primary'>Work with an industry leading Wordpress web design company to scale and smoothline your online expirience</p>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="flex text-2xl gap-2">
                <span className="relative mt-2 font-bold">{item.icon}</span>
                <span className='primary'>  {item.text} </span>
              </li>
            ))}
          </ul>

        </div>  
        <div>
          <CardWithImageV1>
              <CardBody className="absolute px-4 pb-4 inset-0 flex flex-col justify-end size-full" />
            </CardWithImageV1>
        </div>
        </div>
        <div className='grid md:grid-cols-2 theme'>
          <div className=''>
            <ListHover items={wordpressItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
      <Slider/>
  </div>
  )
}

export default wordpress 