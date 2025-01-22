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
import RateCard from '../components/RateCard';

const cardContent = {
  title: "Lorem ipsum dolor",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};

const SocialMediaMarketingProcess  = [
  {
   
    url: "/imgs/abstract/1.jpg",
    title: "Planning",
    id: 1,
    step: " Define your goals (e.g., brand awareness, engagement, sales).Identify your target audience and choose the right platforms.Develop a content strategy and create a posting schedule.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Create",
    id: 2,
    step: " Design visually appealing and engaging content (images, videos, captions).Tailor content to each platform and use trending formats (Reels, Stories, etc.).Focus on consistency and aligning content with your brand voice.",
  },  
  {
    url: "/imgs/abstract/3.jpg",
    title: "Engage",
    id: 3,
    step: "Post content and actively interact with your audience (comments, messages, mentions).Build relationships, encourage user-generated content, and foster community loyalty.Respond to feedback and stay connected with your followers.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Analyze and Optimize",
    id: 4,
    step: " Track key metrics (reach, engagement, conversions) using analytics tools.Assess what works and refine your strategy accordingly.Test new content, posting times, and ad strategies for continuous improvement",
  },
  
];

const SocialMediaMarketingItems = [
  {
    text: 'Social Media Strategy Development',
    description: 'Crafting tailored strategies that maximize your social media presence and engagement. We focus on understanding your brand’s goals to develop a responsive design that resonates with your audience.'
  },
  {
    text: 'Content Creation',
    description: 'We specialize in creating high-quality, engaging content that tells your brand story. Our team ensures your content is not only visually appealing but also optimized for an intuitive UI/UX experience.'
  },
  {
    text: 'Social Media Analytics and Reporting',
    description: 'We provide in-depth social media analytics and performance reporting to help you track the success of your campaigns. Our approach ensures that your strategy is informed by data and aligns with SEO-friendly design principles.'
  },
  {
    text: 'Social Media Management',
    description: 'Our team handles everything from content scheduling to community engagement, ensuring your social media accounts run smoothly and consistently. We apply SEO-friendly practices to your posts for maximum reach and visibility.'
  }
  // { text: 'Content Creation', description: 'This is about SEO-friendly design' },
];

const CardBody = ({ className="" }) => (
  <div className={`px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left ${className}`}>
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
);

const list = [
  {text:"Social Media Management", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Social Media Advertising", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Digital Business Cards", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/470606179/photo/social-media-cubes-on-a-blackboard.jpg?s=612x612&w=0&k=20&c=xJxwbdgw-1byfgXSvGO2nSHkTHTJtAaz8YyZgTciDEc="
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

function SocialMediaMarketing() {
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
          <h2 className='text-4xl font-bold heading'>Social Media Marketing Agency</h2>
          <p className='mt-3 primary'>Work with an industry leading  Social Media Marketing  agency to scale and get a wider audience and online following.</p>
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
            <h2 className='font-bold text-3xl capitalize ml-3'>Social Media Marketing Services</h2>
            <ExpandableCard>
            <p className='primary ml-5'>
                Our social media services are designed to help you grow your online presence, engage with your audience, and drive meaningful results. 
                From content creation and scheduling to analytics and campaign management, we provide tailored strategies for platforms like Facebook, Instagram, Twitter, and LinkedIn.
            </p>

            </ExpandableCard>
            <ListHover items={SocialMediaMarketingItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider 
        
        title="Social Media Marketing Best Practices"
        processSteps={SocialMediaMarketingProcess}
        FooterText="Social Media Marketing Best Practices"
        />
         <RateCard details={details}/>
        <Faqs
        title='FAQS'
        faqs={SocialMediaMarketingFaqs}
        />
    </div>
  );
}

export default SocialMediaMarketing;

const SocialMediaMarketingFaqs = [
  {
    text: "What is your social media marketing process?",
    description: "Our social media marketing process includes four key steps: Discovery & Strategy Development, Content Creation, Campaign Management, and Performance Analysis. We work closely with you at every stage to create campaigns that effectively engage your target audience and align with your brand goals."
  },
  {
    text: "How long does it take to see results from social media marketing?",
    description: "The timeline for seeing results depends on your goals and the platforms used. On average, clients start noticing engagement improvements within the first month, while significant growth and conversions typically occur over 3 to 6 months with consistent effort."
  },
  {
    text: "Can I provide input during the campaign process?",
    description: "Absolutely! Your input is crucial. We collaborate with you to understand your goals, preferences, and target audience during the strategy phase, and we regularly share updates for your feedback throughout the campaign."
  },
  {
    text: "Will my social media content match my brand identity?",
    description: "Yes, all content we create is custom-made to reflect your brand identity. We ensure consistency with your logo, color palette, tone of voice, and overall brand style to create a cohesive online presence."
  },
  {
    text: "What types of reports will I receive for my campaigns?",
    description: "You’ll receive detailed reports that include key metrics such as engagement rates, follower growth, website traffic, and conversions. We provide insights and recommendations to help you understand the performance of your campaigns and refine your strategy."
  }
];

const details = [
  {
    title: 'Basic Package',
    description: 'This package is ideal for businesses starting out and aiming to enhance their online visibility.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Standard Package',
    description: 'Perfect for growing businesses that need more advanced tools.',
    features: ['Feature A', 'Feature B', 'Feature C'],
  },
  {
    title: 'Premium Package',
    description: 'Designed for established businesses looking for maximum impact.',
    features: ['Feature X', 'Feature Y', 'Feature Z'],
  },
];
