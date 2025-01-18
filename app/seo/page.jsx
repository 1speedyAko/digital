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

const SeoItems = [
  { text: 'Key Word research And optimization', description: "We conduct extensive research on the relevant keywords pertaining our clients' website, competiton and industry trends. " },
  { text: 'Content Marketing', description: 'Digital Cecara offers content marketing solutions to brands that generates leads.By providing SEO optimized content that generates traffic to your website. ' },
  { text: 'Technical Seo Services', description: 'Our Technical SEO services focus on optimizing your website’s infrastructure for better performance and search engine visibility. We address critical factors such as site speed, mobile responsiveness, crawlability, indexation, and site architecture to improve your rankings and user experience.'},
  { text: 'Link building', description: '   Our team uses social media plaforms to execute acivities and command a strong social media presence. We focus on building high quality' },
  { text: 'Content Marketing', description: 'Digital Cecara provides online marketing services to enable brands sell their products and services. Using well structured marketing campaings we connect customers to your services' },
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
  {text:"Increase site Authority", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Attract Organic Leads", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Increase Organic Leads", icon:<FaCheck style={{color:'green'}}/>},
]


const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1385957068/photo/seo-search-engine-optimization-marketing-ranking-traffic-website-internet-business-technology.jpg?s=612x612&w=0&k=20&c=1IDmzJNcAl_ttoIIYE4AbXe98MKL02EiFs5b9hJnqrc="
      alt="Responsive web design illustration"
      placeholder="blur"
      blurDataURL="https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ="
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
          <h2 className='text-4xl font-bold heading'>SEO Services</h2>
          <p className='mt-3 primary'>Work with an industry leading  SEO  company to scale and boost your following.</p>
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
            <h2 className='font-bold text-3xl capitalize ml-3'>SEO Services</h2>
            <ExpandableCard>
            <p className='primary ml-5'>
              
              Our team of passionate designers will work with you every step of the way to ensure your business card design aligns perfectly with your brand guidelines. Our design process is centered around our clients, ensuring a collaborative experience that brings your vision to life. From concept creation to the final design, we focus on delivering business cards that are not only visually stunning but also professionally crafted to leave a lasting impression. Whether you need a sleek, minimalist design or something bold and creative, we&apos;ve got you covered.
            </p>
            </ExpandableCard>
            <ListHover items={SeoItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        {/* <Slider 
        
        title="Social Media Marketing Best Practices"
        processSteps={SocialMediaMarketingProcess}
        FooterText="Social Media Marketing Best Practices"
        /> */}
        <Faqs
        title='FAQS'
        faqs={SeoFaqs}
        />
    </div>
  );
}

export default SocialMediaMarketing;

const SeoFaqs = [
  {
    text: "What is your SEO process?",
    description: "Our SEO process includes four key steps: Website Audit & Analysis, Keyword Research & Strategy, On-Page & Off-Page Optimization, and Performance Tracking & Reporting. We ensure your website aligns with search engine algorithms to improve rankings and drive organic traffic."
  },
  {
    text: "How long does it take to see results from SEO?",
    description: "SEO is a long-term strategy, and results can vary based on your industry and competition. Generally, noticeable improvements in rankings and traffic occur within 3 to 6 months, with sustained efforts leading to significant long-term growth."
  },
  {
    text: "Can I provide input during the SEO process?",
    description: "Absolutely! Your input is vital. We collaborate with you to understand your business goals, target audience, and preferred keywords. Your insights help us craft a strategy tailored to your specific needs."
  },
  {
    text: "Will my SEO strategy align with my brand identity?",
    description: "Yes, we ensure that all SEO efforts, including content creation and optimization, align with your brand identity. We maintain consistency in tone, style, and messaging to reflect your brand's values and appeal to your audience."
  },
  {
    text: "What types of reports will I receive for my SEO campaigns?",
    description: "You’ll receive comprehensive reports that include metrics such as keyword rankings, organic traffic, backlink profiles, and conversion rates. These reports provide actionable insights to track progress and refine your SEO strategy."
  }
];
