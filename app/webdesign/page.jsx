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
import { ExpandableCard } from '../components/ExpandableCard';

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
    step: "Our first step in the design process is to define objectives of the project,we research on the niche,competitors,and the relevant trends in your field., Duration of the project.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Wireframing & Prototyping",
    id: 2,
    step: " We then sketch the idea,determine the typography,theme,color and get the necessary input.",
  },  
  {
    url: "/imgs/abstract/3.jpg",
    title: "Visual Design",
    id: 3,
    step: "In this phase we establish branding, UI design,  ensure a mobile-first approach.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Development",
    id: 4,
    step: "We then build the frontend, Backend(if needed),and if specified we integrate CMS .",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Testing",
    id: 5,
    step: " Test functionality and bugs, Compatibility, Test performance and loading speed .",
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Deployment",
    id: 6,
    step: "In the phase we set up hosting, Configure the domain(name of the website), optimize for SEO,and launch.",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Post-Launch Support",
    id: 7,
    step: " Finaly we maintain the website, Track analytics, Implement feedback.",
  },
];

const webDesignItems = [
  { text: 'Responsive Design', description: 'We ensure that your custom made website is accesible to users operating on different screen sizes. So as to deliver consistent content accross different devices.' },
  { text: 'UI/UX Optimization', description: 'We use the latest tools to design and craft your website . This ensures easier user interraction and naviagtion within the website.' },
  { text: 'SEO-Friendly Design', description: 'Our custom web design also encompasses search engine optimization  allowing you website rank higher in search engines using the relevant keywords. ' },
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
      src="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
      alt="Responsive web design illustration"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      height={450} 
      width={500}   
      className=''
      
    />
    {/* overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"></div>
    {children} */}
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
    <div className="min-h-full mt-36  theme w-full overflow-hidden block">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
          <h2 className='text-4xl font-bold heading'>Custom Web Design</h2>
          <p className='mt-3 primary'>Work with an industry leading web design agency to scale and smoothline your online expirience</p>
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
          <h2 className='font-bold text-3xl capitalize ml-3'>Custom web Design services</h2>
            <ExpandableCard>
              <p className='primary ml-5'>
              Digital Cheuxes&apos;  Custom Web design is a cheap and affordable service enabling brands and businesses have a digital presence.
              Our team of dedicated web designers will tailor your dream website according to your brand guidlines, industry and current trends. We use various technologies to achieve your custom website
              such as react, nextjs, webflow and so on.Let us help you achieve your dream of scaling up on the digital space.
              </p>
            </ExpandableCard>
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
