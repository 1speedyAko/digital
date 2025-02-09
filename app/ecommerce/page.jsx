"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
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

const ecommerceItems = [
  { text: 'Custom Store Design', description: 'Create a unique and engaging look for your eCommerce store with custom designs.' },
  { text: 'Product Management', description: 'Easily manage your products, inventory, and categories in your eCommerce store.' },
  { text: 'Secure Payment Integration', description: 'Ensure safe and reliable payment methods for your customers.' },
  { text: 'SEO Optimized for Products', description: 'Improve your store’s visibility and ranking with SEO-friendly product pages.' },
  { text: 'Mobile-Responsive Layout', description: 'Make sure your store looks great and works smoothly on mobile devices.' },
  { text: 'Customer Management', description: 'Manage customer accounts, orders, and profiles efficiently.' },
  { text: 'Order Tracking', description: 'Allow customers to track their orders easily with real-time updates.' },
  { text: 'Multi-Currency Support', description: 'Sell globally with support for multiple currencies and languages.' },
];

const ecommerceProcess = [
  {
    heading: "E-Commerce Development Process",
    url: "/imgs/ecommerce/1.jpg",
    title: "Research & Planning",
    id: 1,
    step: "Analyze target audience, competitors, and market trends. Define goals and platform requirements.",
  },
  {
    url: "/imgs/ecommerce/2.jpg",
    title: "Wireframing & Prototyping",
    id: 2,
    step: "Create wireframes for key pages like home,product,and checkout., Build prototypes for user testing.",
  },
  {
    url: "/imgs/ecommerce/3.jpg",
    title: "Design",
    id: 3,
    step: "Develop a visually appealing UI/UX with branding elements., Focus on mobile-first design principles.",
  },
  {
    url: "/imgs/ecommerce/4.jpg",
    title: "Development",
    id: 4,
    step: "Set up the e-commerce platform, configure payment gateways, and build custom features.",
  },
  {
    url: "/imgs/ecommerce/5.jpg",
    title: "Product Management",
    id: 5,
    step: "Add and organize product listings, including images, descriptions, and pricing.",
  },
  {
    url: "/imgs/ecommerce/6.jpg",
    title: "Testing & Optimization",
    id: 6,
    step: "Test for usability,speed,and compatibility., Optimize SEO,page load time,and navigation.",
  },
  {
    url: "/imgs/ecommerce/7.jpg",
    title: "Launch & Growth",
    id: 7,
    step: "Go live and implement marketing strategies. Track analytics, improve user experience, and scale operations.",
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
  {text:"Modern Websites", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Unique Design", icon:<FaCheck style={{color:'green'}}/>},
  {text:"Responsive Websites", icon:<FaCheck style={{color:'green'}}/>},
]



const CardWithImageV1 = ({ children }) => (
  <div className="relative rounded-2xl aspect-w-4 aspect-h-3 overflow-hidden group">
    <Image
      src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE="
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

  
function Ecommerce() {
  const { setIsLoading } = useLoading();

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
          <h2 className='text-4xl font-bold heading'>eCommerce Web Design</h2>
          <p className='mt-3 primary'>Work with an industry leading eCommerce wed design agency to scale and smoothline your online expirience. Enjoy the benefit of further outreach and be able to explore new markets.</p>
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
                  At Digital Cheuxes, we help businesses grow their online presence with tailored digital marketing solutions. From search engine optimization (SEO) to social media campaigns and content marketing, we craft strategies designed to connect with your audience and drive real results. Our team works closely with you to understand your brand and create campaigns that align with your goals. Whether it’s improving search rankings, increasing engagement, or boosting conversions, we deliver strategies that make a measurable impact.
              </p>
              </ExpandableCard>
            <ListHover items={ecommerceItems}/>
          </div>
          <div className='grid place-content-center'>
            <Form/>
          </div>
        </div>
        <Slider
        title="Our Ecommerce Web design Process"
        processSteps={ecommerceProcess}
        />
        <Faqs
        title='e-commerce FAQS'
        faqs={ecommerceFaqs}
        />
    </div>
  );
}

export default Ecommerce;

const ecommerceFaqs = [
  {
    text: "How much does it cost to design an e-commerce website?",
    description: "The cost depends on the complexity, number of pages, and features you require. We offer customized packages to fit various budgets. Contact us for a detailed quote."
  },
  {
    text: "Can you integrate payment gateways into my e-commerce website?",
    description: "Yes, we can integrate popular payment gateways like PayPal, Stripe, and others to ensure seamless and secure transactions for your customers."
  },
  {
    text: "How long does it take to design and launch an e-commerce website?",
    description: "The timeline varies based on the project scope and requirements. Typically, it takes 4-8 weeks, but we’ll provide a clear timeline after the initial consultation."
  },
  {
    text: "Will my e-commerce website be mobile-friendly?",
    description: "Absolutely! We prioritize responsive design, ensuring your website looks and functions perfectly on desktops, tablets, and mobile devices."
  },
  {
    text: "Do you offer ongoing support after the website is launched?",
    description: "Yes, we provide post-launch support to address any issues, perform updates, and offer guidance to help you manage your website effectively."
  }
];
