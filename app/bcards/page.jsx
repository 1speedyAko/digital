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
  {
    text: "Custom Business Card Design",
    description:
      "Stand out with professionally designed custom business cards tailored to reflect your unique brand identity. From sleek minimalist designs to bold and creative layouts, we craft cards that make a lasting impression."
  },
  {
    text: "Premium Finishes and Print-Ready Files",
    description:
      "Elevate your business cards with premium finishes like foil stamping, embossing, or matte coating. Receive high-resolution, print-ready files optimized for professional printing services."
  },
  {
    text: "Digital Business Cards",
    description:
      "Embrace the future of networking with digital business cards that integrate QR codes, interactive links, and contactless sharing. Designed to be visually appealing and highly functional across devices."
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
  {text:"Custom Business Card Design", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Premium Finishes and Print-Ready Files", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Digital Business Cards", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1344870754/photo/shot-of-two-businesspeople-exchanging-business-cards-at-a-conference.jpg?s=612x612&w=0&k=20&c=PjVLw7W2wmaTWa7kMeuKgl-7SKejkKXlL9k0569VDXc="
      alt="Responsive web design illustration"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      height={350} 
      width={600}   
      className=''
      
    />
    {/* overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"></div>
    {children} */}
  </div>
);

function BusinessCards() {
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
        <h2 className="text-4xl font-bold heading">Business Card Design</h2>
          <p className="mt-3 primary">
            Partner with an industry-leading Business Card design agency that transforms your traditional card into a dynamic brand asset. Our approach scales your business presence by integrating innovative digital cues—such as QR codes, NFC-enabled features, and interactive elements—that bridge the gap between physical and digital experiences. We focus on a seamless design that not only streamlines your online presence but also reinforces your brand identity, ensuring every card delivers a lasting digital impression.
          </p>

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
            <h2 className='font-bold text-3xl capitalize ml-3'>Business Card Design services</h2>
            <ExpandableCard>
            <p className='primary ml-5'>
              
              Our team of passionate designers will work with you every step of the way to ensure your business card design aligns perfectly with your brand guidelines. Our design process is centered around our clients, ensuring a collaborative experience that brings your vision to life. From concept creation to the final design, we focus on delivering business cards that are not only visually stunning but also professionally crafted to leave a lasting impression. Whether you need a sleek, minimalist design or something bold and creative, we&apos;ve got you covered.
            </p>
            </ExpandableCard>
            <ListHover items={BusinessCardItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Our Business Card Design Process"
        processSteps={BusinessCardDesignProcess}
        FooterText="Our Business Card Design Process"
        />
        <Faqs
        title='FAQS'
        faqs={BusinessCardFaqs}
        />
    </div>
  );
}

export default BusinessCards;

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
