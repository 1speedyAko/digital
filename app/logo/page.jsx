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

const LogoDesignProcess  = [
  {
   
    url: "/imgs/abstract/1.jpg",
    title: "Research and Discovery",
    id: 1,
    step: " We first understand your brand guidelines and target audience, Then we identify the current trends and analyze the competition so as to give you a seemles intergration into the market ",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Concept Development",
    id: 2,
    step: " We then sketch the ideas.,Create multiple logo components to while experimenting  with differnt shapes and typography",
  },  
  {
    url: "/imgs/abstract/3.jpg",
    title: "Visual Design and refinement",
    id: 3,
    step: "We use special tools and software to bring the ideas to life, We collaborate with the client to get feedback based on the design.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Delivery",
    id: 4,
    step: " Our team ensures that the logo is exported to our client and intergrated on various platforms.",
  },
  
];

const LogoDesignItems = [
  {
    text: "Logo Design",
    description:
      "Create a strong visual identity with a custom logo designed to reflect your brand’s values and mission. Our logo designs are crafted to be versatile, scalable, and impactful, ensuring your brand stands out across all platforms."
  },
  {
    text: "Logo Re-Design",
    description:
      "Give your brand a fresh new look with a logo re-design. We refine and modernize your existing logo to align with current design trends and better represent your evolving brand identity."
  },
  {
    text: "Brand Guidelines",
    description:
      "Ensure consistency across all your branding materials with comprehensive brand guidelines. These guidelines include logo usage, color palettes, typography, and more, providing clear direction for your brand’s visual communication."
  }
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
  {text:"Brand Guidelines", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Custom Logo Design", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Responsive Websites", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1483745473/photo/graphic-designer-works-on-computer-laptop-with-digital-pen-scrutinize.jpg?s=612x612&w=0&k=20&c=8MDBMQ3UNT4hsp0zMNwRpRqYxBEGWHWfKFuaYCG_YCQ="
      alt="Responsive web design illustration"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      height={450} 
      width={600}   
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
    <div className="min-h-full mt-36">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
          <h2 className='text-4xl font-bold heading'>Logo Design</h2>
          <p className='mt-3 primary'>Work with an industry leading Logo design agency to scale and smoothline your online expirience</p>
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
            <h2 className='font-bold text-3xl capitalize ml-3'>logo design services</h2>
            <ExpandableCard>
            <p className='primary ml-5'>At Digital Cecara, we&apos;re passionate about helping brands stand out with logos that truly represent their vision. Our team doesn&apos;t just design; we dive deep into understanding your brand&apos;s personality and guidelines. Whether you need something bold, minimalist, or completely unique, we work closely with you to bring it to life. It&apos;s not just about creating a logo—it&apos;s about crafting a symbol that resonates with your audience and builds trust in your brand. </p>
            </ExpandableCard>
            <ListHover items={LogoDesignItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Our Logo Design Process"
        processSteps={LogoDesignProcess}
        FooterText="Our Logo Design Process"
        />
        <Faqs
        title='FAQS'
        faqs={LogoDesignFaqs}
        />
    </div>
  );
}

export default WebDesign;

const LogoDesignFaqs = [
    {
      text: "What is your logo design process?",
      description: "Our logo design process involves four key steps: Research & Discovery, Concept Development, Design & Refinement, and Delivery. We collaborate with you throughout each phase to create a logo that aligns perfectly with your brand."
    },
    {
      text: "How long does it take to design a logo?",
      description: "The timeline for logo design varies depending on the complexity and the number of revisions. On average, it takes about 1 to 3 weeks to complete a professional logo, ensuring enough time for brainstorming, feedback, and refinement."
    },
    {
      text: "Can I provide input during the logo design process?",
      description: "Absolutely! Your input is vital. We start by understanding your brand, preferences, and goals. We then present initial concepts for feedback and refine the design until you’re completely satisfied."
    },
    {
      text: "Will my logo be unique and tailored to my brand?",
      description: "Yes, every logo we create is custom-made and designed specifically for your brand. We don’t use templates, ensuring your logo stands out and authentically represents your business."
    },
    {
      text: "What formats will I receive for my logo?",
      description: "You’ll receive your finalized logo in multiple formats, including PNG, JPEG, SVG, and PDF, suitable for both digital and print use. We also provide brand guidelines for consistent logo usage."
    }
  ];
  