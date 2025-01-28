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

const EmailMarketingProcess = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Discovery & Strategy",
    id: 1,
    step: "We begin by understanding your business goals, target audience, and brand voice. , Conduct a detailed analysis of your current email marketing efforts. , Develop a strategy tailored to your objectives and audience needs.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Content & Design Creation",
    id: 2,
    step: "We create engaging email content that resonates with your audience. , Design visually appealing email templates aligned with your brand identity. , Optimize content for readability, responsiveness, and conversions.",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Execution & Testing",
    id: 3,
    step: "We set up your campaigns, including audience segmentation and scheduling. , Test emails for performance across different devices and email clients. , Ensure all links, visuals, and CTAs are functioning correctly.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Analysis & Optimization",
    id: 4,
    step: "Monitor campaign performance using key metrics like open and click-through rates. , Analyze results to identify areas for improvement. , Optimize future campaigns based on data-driven insights to ensure continued success.",
  },
];


const EmailMarketingItems = [
  { 
    text: 'Custom Email Campaign Design', 
    description: 'We create tailored email campaigns designed to connect with your audience and reflect your unique brand identity, ensuring maximum engagement.' 
  },
  { 
    text: 'Targeted Audience Segmentation', 
    description: 'Our strategies include advanced audience segmentation to ensure your emails reach the right people at the right time, boosting open rates and conversions.' 
  },
  { 
    text: 'Engaging Content and Visuals', 
    description: 'We craft compelling email copy and stunning visuals that capture attention, keep your audience engaged, and drive measurable results.' 
  },
  { 
    text: 'Detailed Performance Tracking', 
    description: 'Track the success of your campaigns with in-depth analytics, providing insights into open rates, click-through rates, and overall campaign performance.' 
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
  { text: "Custom Email Campaign Design", icon: <FaCheck style={{ color: "green" }} /> },
  { text: "Targeted Audience Segmentation", icon: <FaCheck style={{ color: "green" }} /> },
  { text: "Performance Tracking and Analytics", icon: <FaCheck style={{ color: "green" }} /> },
];



const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1303742901/vector/email-marketing-message-concept.jpg?s=612x612&w=0&k=20&c=qQIuqm_xHVMMN-HWy7it-Mw62oNVppQe2ImmoJP499U="
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
    <div className="min-h-full">
      <div className="grid md:grid-cols-2 gap-4 mt-10 px-9 mb-10">
        <div className=''>
        <h2 className="text-4xl font-bold heading">Email Marketing Agency</h2>
          <p className="mt-3 primary">
            Partner with a leading Email Marketing Agency to enhance and streamline your online presence. We design compelling email campaigns that not only reflect your brand identity but also engage your audience effectively. From personalized messaging to visually appealing designs, we ensure every email resonates with your customers and drives meaningful results.
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
          <h2 className="font-bold text-3xl capitalize ml-3">Email Marketing Services</h2>
            <ExpandableCard>
              <p className="primary ml-5">
                Our team of experienced marketers works closely with you to create email campaigns that align seamlessly with your brand and business goals. From crafting engaging content to designing visually stunning templates, we focus on delivering emails that capture your audience&apos;s attention and drive action. Our process is collaborative,
                 ensuring your input shapes every step, from strategy to execution. Whether you&apos;re looking to nurture leads, boost conversions, or strengthen customer relationships, we deliver email marketing solutions that leave a lasting impact.
              </p>
            </ExpandableCard>

            <ListHover items={EmailMarketingItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Our Email Marketing Process"
        processSteps={EmailMarketingProcess}
        FooterText="Our Email Marketing Process"
        />
        <Faqs
        title='FAQS'
        faqs={EmailMarketingFaqs}
        />
    </div>
  );
}

export default GraphicDesign;

const EmailMarketingFaqs = [
  {
    text: "What is your email marketing process?",
    description: "Our email marketing process involves four stages: Discovery & Strategy, Content & Design Creation, Campaign Execution & Testing, and Analysis & Optimization. We work collaboratively to ensure your campaigns deliver measurable results and align with your goals."
  },
  {
    text: "How long does it take to launch an email marketing campaign?",
    description: "The timeline for launching a campaign depends on its complexity and your requirements. On average, it takes 5 to 7 business days to plan, design, and test a high-quality campaign."
  },
  {
    text: "Can I provide input on email content and design?",
    description: "Absolutely! Your input is valuable to us. We gather your feedback at every stage of the process, ensuring the email content, design, and messaging align with your brand and objectives."
  },
  {
    text: "How do you ensure emails reach the intended audience?",
    description: "We use advanced audience segmentation techniques and implement best practices for email deliverability. Our campaigns are designed to target specific audience groups, ensuring your emails are relevant and impactful."
  },
  {
    text: "What analytics do you provide after a campaign is launched?",
    description: "We provide detailed analytics, including open rates, click-through rates, conversion metrics, and engagement statistics. These insights help us refine future campaigns for even better performance."
  },
];
