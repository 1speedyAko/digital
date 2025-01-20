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
import { HoverImageLinks } from '../components/Links';

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};

const BusinessCardDesignProcess  = [
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

const BusinessCardItems = [
  { text: 'Custom Business Card Design', description: 'This is about responsive design' },
  { text: 'Premium Finishes and Print-Ready Files', description: 'This is about UI/UX' },
  { text: 'Digital Business Cards', description: 'This is about SEO-friendly design' },
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
  {text:"Search Engine Optimization (SEO)", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Content Marketing and Strategy", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Social Media Marketing (SMM)", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA="
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

function DigitalMarketing() {
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
          <h2 className='text-4xl font-bold heading'>Digital Marketing Agency</h2>
          <p className='mt-3 primary'>Work with an industry leading digital marketing agency to scale and smoothline your online expirience.We create apealing solutions that resonates and satisfies your clients needs.</p>
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
            <h2 className='font-bold text-3xl capitalize ml-3'>Digital Marketing Agency</h2>
            <ExpandableCard>
            <p className='primary ml-5'>
                At Digital Cecara, we help businesses grow their online presence with tailored digital marketing solutions. From search engine optimization (SEO) to social media campaigns and content marketing, we craft strategies designed to connect with your audience and drive real results. Our team works closely with you to understand your brand and create campaigns that align with your goals. Whether it’s improving search rankings, increasing engagement, or boosting conversions, we deliver strategies that make a measurable impact.
            </p>
            </ExpandableCard>
            {/* <ListHover items={BusinessCardItems}/> */}
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <HoverImageLinks/>
        <Faqs
        title='FAQS'
        faqs={BusinessCardFaqs}
        />
    </div>
  );
}

export default DigitalMarketing;

const BusinessCardFaqs = [
  {
    text: "What is your business card design process?",
    description: "Our business card design process includes four key steps: Discovery & Consultation, Concept Development, Refinement, and Finalization. We collaborate closely with you at every stage to create a professional and impactful design that represents your brand effectively."
  },
  {
    text: "How long does it take to design a business card?",
    description: "The timeline for business card design depends on the complexity of the design and the number of revisions. On average, it takes about 2 to 5 business days to complete a high-quality design, including time for feedback and refinement."
  },
  {
    text: "Can I provide input during the design process?",
    description: "Absolutely! Your input is essential. We gather your preferences and brand guidelines during the consultation phase and provide design concepts for your feedback, ensuring the final design aligns perfectly with your vision."
  },
  {
    text: "Will my business card design match my brand identity?",
    description: "Yes, every business card design we create is custom-made to reflect your brand identity. We ensure consistency with your logo, color scheme, and overall style to maintain a cohesive brand image."
  },
  {
    text: "What formats will I receive for my business card design?",
    description: "You’ll receive your finalized business card design in multiple formats, including print-ready PDF, PNG, and editable source files, making it easy to use with any professional printing service."
  }
];
