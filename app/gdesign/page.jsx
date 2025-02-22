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
import { TextFade } from '../components/TextFade';

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};

const GraphicDesignProcess  = [
  {
   
    url: "/imgs/abstract/1.jpg",
    title: "Discovery & Consultation",
    id: 1,
    step: " We first understand your brand guidelines and target audience. , We understand prefered styles and essential elements. ,    We then gather necessary content e.g social media handles and logo .",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Concept Development",
    id: 2,
    step: " We then create an initial sample based on your concept. , Adjust specific details,color and  typography, Ensure the design is appealing and aligned with your guidlines",
  },  
  {
    url: "/imgs/abstract/3.jpg",
    title: "Refinement",
    id: 3,
    step: "Here we incoporate feedback so as to refine the final design. , Adjust details like typography,color and themes .",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Delivery",
    id: 4,
    step: " We finalize the design and prepare print ready files in high resolution. , Deliver files in multiple formats for both printing and digital sharing(PDF,PNG,AI). , We then provide guidance on printing options including premium finishes like foil stamping.",
  },
  
];

const GraphicDesignItems = [
  { 
    text: '3D Typography', 
    description: 'Creating eye-catching designs with bold, three-dimensional text that adds depth and realism to your visuals.' 
  },
  { 
    text: 'Retro Futurism', 
    description: 'Blending nostalgic retro styles with futuristic elements to produce unique and engaging graphic art.' 
  },
  { 
    text: 'Sustainable Design', 
    description: 'Focusing on eco-friendly visuals and designs that promote environmental awareness and responsibility.' 
  },
  { 
    text: 'Motion Graphics and Micro-Animations', 
    description: 'Enhancing user experience with subtle animations and dynamic motion graphics that bring your designs to life.' 
  },
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
  {text:"Custom Business Card Design", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Premium Finishes and Print-Ready Files", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Digital Business Cards", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1367997545/vector/abstract-arrow-template.jpg?s=612x612&w=0&k=20&c=bM2nGY4lu9xQWBJ556rRTg3X51UYjYXvKSsd_QXpCNU="
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

function GraphicDesign() {
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
    <div className="min-h-full mt-36 w-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
        <TextFade>
          <h2 className='text-4xl font-bold heading'>Graphic Design Agency</h2>
        </TextFade>  
          <p className='mt-3 primary'>Work with an industry leading Graphic Design  Agency to scale and smoothline your online expirience.We create apealing designs that echo your identity.</p>
          <ul>
            {list.map((item, index) => (
              <li key={index} className="flex text-2xl gap-2">
               <TextFade><span className="relative mt-2 font-bold">{item.icon}</span></TextFade> 
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
            <TextFade>
               <h2 className='font-bold text-3xl capitalize ml-3'>Graphic Design  services</h2>
            </TextFade>
            
            <ExpandableCard>
            <p className='primary ml-5'>
              Elevate your brand with our expert graphic design services. Our talented team specializes in creating custom designs that capture your unique style and resonate with your audience. From logos and business cards to marketing materials and digital graphics, we craft visually striking designs tailored to your needs. Let us help you make a bold statement with professional and creative designs that leave a lasting impact.
            </p>

            </ExpandableCard>
            <ListHover items={GraphicDesignItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Our Graphic  Design Process"
        processSteps={GraphicDesignProcess}
        FooterText="Our Graphic  Design Process"
        />
        <Faqs
        title='FAQS'
        faqs={GraphicDesignFaqs}
        />
    </div>
  );
}

export default GraphicDesign;

const GraphicDesignFaqs = [
  {
    text: "What services do you offer in graphic design?",
    description: "Our graphic design services include logo design, branding, social media graphics, marketing materials, web graphics, and more. We aim to create visually compelling designs that effectively communicate your brand’s message."
  },
  {
    text: "How long does it take to complete a graphic design project?",
    description: "The timeline varies depending on the project’s scope and complexity. Typically, smaller projects like social media graphics can take 1-3 days, while larger projects like branding can take 1-2 weeks or more."
  },
  {
    text: "Can I provide input and feedback during the design process?",
    description: "Of course! Your input is highly valued. We work closely with you at each stage of the design process, from initial concepts to revisions, ensuring the final product meets your expectations."
  },
  {
    text: "How do you ensure the designs align with my brand identity?",
    description: "We begin every project with a discovery phase to understand your brand’s values, target audience, and style preferences. This ensures that every design is cohesive and aligns seamlessly with your brand identity."
  },
  {
    text: "What file formats will I receive for my design projects?",
    description: "You will receive your final designs in multiple formats, such as high-resolution PNG, JPEG, and vector files like AI or EPS. For print projects, we provide print-ready PDFs to ensure professional-quality output."
  }
];
