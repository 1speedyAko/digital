"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import Slider from '../components/Slider';
import Form from '../components/Form';
import { FaCheck } from "react-icons/fa";
import ListHover from '../components/ListHover';
import { useLoading } from '../components/LoadingContext';
import Faqs from '../components/Faqs';

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};

const webDesignProcess  = [
  {
    heading:"Custom Web Design Process",
    url: "/imgs/abstract/1.jpg",
    title: "Discovery & Planning",
    id: 1,
    step: " Define objectives, analyze competitors, and plan the project scope.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Wireframing & Prototyping",
    id: 2,
    step: " Sketch ideas, make basic models, and get input.",
  },  
  {
    url: "/imgs/abstract/3.jpg",
    title: "Visual Design",
    id: 3,
    step: "Establish branding, UI design, and ensure a mobile-first approach.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Development",
    id: 4,
    step: " Build the frontend, backend, and integrate CMS if needed.",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Testing",
    id: 5,
    step: " Test functionality, compatibility, performance, and accessibility.",
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Deployment",
    id: 6,
    step: " Set up hosting, configure the domain, optimize for SEO, and launch.",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Post-Launch Support",
    id: 7,
    step: " Maintain the website, track analytics, and implement feedback.",
  },
];

const webDesignItems = [
  { text: 'Responsive Design', description: 'This is about responsive design' },
  { text: 'UI/UX Optimization', description: 'This is about UI/UX' },
  { text: 'SEO-Friendly Design', description: 'This is about SEO-friendly design' },
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

function WebDesign() {
  const {setIsLoading} =useLoading()
   useEffect(() => {
      // Set loading state when the component mounts
      setIsLoading(true);
  
      // Mimic actual loading tasks
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Replace with actual loading time if needed
  
      return () => clearTimeout(timer); // Cleanup timer
    }, [setIsLoading]);
  return (
    <div className="min-h-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
          <h2 className='text-4xl font-bold heading'>Custom Web Design</h2>
          <p className='mt-3 primary'>Work with an industry leading web design company to scale and smoothline your online expirience</p>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="flex text-2xl gap-2">
                <span className="relative mt-2 font-bold">{item.icon}</span>
                <span className='primary'>{item.text} </span> 
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
            <ListHover items={webDesignItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Our Custom Web Design Process"
        processSteps={webDesignProcess}
        FooterText="Our Custom Web Design Process"
        />
        <Faqs
        title='FAQS'
        faqs={customWebDesignFaqs}
        />
    </div>
  );
}

export default WebDesign;

const customWebDesignFaqs = [
  {
    text: "What is the custom web design process, and how does it work?",
    description: "Our custom web design process includes several phases: Discovery & Planning, Wireframing & Prototyping, Visual Design, Development, Testing, Deployment, and Post-Launch Support. We work closely with you to ensure that your vision is realized at every step."
  },
  {
    text: "How long will it take to complete my custom web design project?",
    description: "The timeline for a custom web design project depends on factors like the complexity of the design, the number of pages, and any special features. Typically, a custom website can take anywhere from 4 to 12 weeks to complete, with a more detailed timeline provided at the start of the project."
  },
  {
    text: "Can I provide input during the design process?",
    description: "Absolutely! We encourage your input throughout the process. After the initial discovery phase, we present design concepts, and you can provide feedback. We want to ensure the design aligns with your brand and meets your goals."
  },
  {
    text: "Will my website be mobile-friendly and responsive?",
    description: "Yes! Every custom website we design is fully responsive, meaning it will look great and work smoothly on all devices, from desktop computers to smartphones and tablets."
  },
  {
    text: "Do you provide ongoing support after my website is launched?",
    description: "Yes, we offer ongoing maintenance and support after your website is launched. This includes updates, troubleshooting, and making necessary changes to ensure your website remains functional, secure, and up-to-date."
  }
];
