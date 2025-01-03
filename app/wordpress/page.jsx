"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';
import Slider from '../components/Slider';
import Form from '../components/Form';
import { FaCheck } from "react-icons/fa";
import ListHover from '../components/ListHover';
import { useLoading } from '../components/LoadingContext';
import Faqs from '../components/Faqs';


const wordpressProcess = [
  {
    heading: "WordPress Web Design Process",
    url: "/imgs/abstract/1.jpg",
    title: "Discovery & Research",
    id: 1,
    step: "Understand client goals, audience, and brand. Research competitors and industry trends.",
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Planning & Strategy",
    id: 2,
    step: "Create a site map outlining the structure. Define key features and functionalities.",
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Wireframing & Prototyping",
    id: 3,
    step: "Sketch low-fidelity layouts of pages. Build clickable prototypes for user feedback.",
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Design",
    id: 4,
    step: "Develop a visual style guide with colors, fonts, and imagery. Create high-fidelity mockups for desktop and mobile views.",
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Development",
    id: 5,
    step: "Set up WordPress with the chosen theme or custom build. Code custom functionalities, plugins, and features.",
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Testing & Refinement",
    id: 6,
    step: "Test for responsiveness, speed, and SEO compliance. Fix bugs and refine based on user feedback.",
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Launch & Maintenance",
    id: 7,
    step: "Publish the website and configure hosting and domain. Provide ongoing updates, analytics, and support.",
  },
];


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

function Wordpress() {
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
      <Slider
      title="Wordpress Web Design Process"
      processSteps={wordpressProcess}
      FooterText="Wordpress Web Design Process"
      />
      <Faqs
      title='FAQS'
      faqs={wordpressFaqs}
      />
  </div>
  )
}

export default Wordpress 

const wordpressFaqs = [
  {
    text: "What is WordPress, and why should I use it for my website?",
    description: "WordPress is a powerful content management system (CMS) that allows you to easily manage and update your website. It's highly customizable, SEO-friendly, and widely used for building all types of websites, including blogs, e-commerce stores, and portfolios."
  },
  {
    text: "Will my WordPress website be mobile-friendly?",
    description: "Yes! All WordPress websites we design are fully responsive, meaning they will look and function great on desktops, tablets, and smartphones. Mobile optimization is a key focus of our design process."
  },
  {
    text: "Can you customize the design of my WordPress website?",
    description: "Absolutely! We create custom WordPress themes and templates tailored to your brand. Whether you need a simple redesign or a complete overhaul, we will ensure your website is unique and suits your business needs."
  },
  {
    text: " How much does it cost?",
    description: "Well, it depends on the scale and complexity of your website. We generaly start out at ksh 30,000"
  },
  {
    text: "Will my WordPress website be secure?",
    description: "Yes, security is a priority. We implement best practices to secure your WordPress website, including setting up strong passwords, installing security plugins, and keeping your WordPress core, themes, and plugins up to date."
  },
  {
    text: "Can I easily update and manage my website content on WordPress?",
    description: "Yes! WordPress makes it easy for you to update your website’s content, from adding new pages to changing text or images. We’ll provide training and guidance so you can confidently manage your site after launch."
  }
];
