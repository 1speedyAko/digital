'use client'
import React,{useEffect} from "react";
import Intro from "../intro/Intro";
import Texts from "../text/Info";
import Image from "next/image";
import HoverDevCards from "../Nutshel";
import { useRouter } from "next/navigation";
import { useLoading } from "../LoadingContext";
import Faqs from "../Faqs";


const faqsHome = [
    {
      text: "What is web design, and why is it important for my business?",
      description: "Web design involves creating the layout, visual appearance, and usability of a website. A well-designed website ensures your brand looks professional, attracts visitors, and converts them into customers."
    },
    {
      text: "How much does your web design service cost?",
      description: "Our web design pricing depends on the complexity of your project, the number of pages, and the features required. We offer affordable packages tailored to small businesses, startups, and enterprises. Contact us for a free quote!"
    },
    {
      text: "What is a domain, and do I need one for my website?",
      description: "A domain is the unique address where your website is found online (e.g., yourcompany.com). It’s essential for establishing your online presence, and we can help you purchase and set it up."
    },
    {
      text: "How do you ensure a good relationship with your customers?",
      description: "We prioritize transparency, open communication, and ongoing support. From the first consultation to post-launch services, we work closely with you to ensure your needs are met and your expectations are exceeded."
    },
    {
      text: "Do you offer hosting services along with web design?",
      description: "Yes, we provide reliable hosting solutions to ensure your website runs smoothly and stays online. Our hosting plans include regular backups, updates, and technical support."
    },
    {
      text: "Can you redesign my existing website?",
      description: "Absolutely! Whether your current website is outdated or needs a new look, we can revamp it to align with modern design trends and improve its performance."
    },
    {
      text: "How long does it take to design a website?",
      description: "The timeline depends on the project's scope and complexity. Typically, a standard website takes 4-6 weeks, while larger projects may require more time. We'll provide a detailed timeline during our initial consultation."
    },
    {
      text: "Do you offer SEO services as part of web design?",
      description: "Yes, we integrate basic SEO practices during the design process to ensure your website is optimized for search engines. Advanced SEO services are also available upon request."
    },
  ];

function Body() {
    const router = useRouter()
    const { setIsLoading } = useLoading();
    
      useEffect(() => {
        setIsLoading(true);
    
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Simulate loading for 2 seconds
    
        return () => clearTimeout(timer);
      }, [setIsLoading]);
    const cards = [
        {
            title: "Web Design",
            description: "Custom Web Design , tailored for your specific needs and brand guidelines.",
            imageURL: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
            buttonText: "See More",
            route:"/webdesign",
            instruction:"touch here"
        },
        {
            title: "Email Marketing",
            description: "Create engaging email campaigns that connect with your audience and drive results.",
            imageURL: "https://plus.unsplash.com/premium_photo-1721910821661-e3cd6b53b61d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVtYWlsJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
            buttonText: "Explore",
            instruction:"touch here",
            route:"/email"
        },
        {
          title: "SEO",
          description: "Enhance your website’s visibility and rank higher on search engines to attract more traffic.",
          imageURL: "https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.webp?a=1&b=1&s=612x612&w=0&k=20&c=icUfwJYefPLxioStRtEdLOKClOQQK4Ztm6zHvcC6uoI=",
          buttonText: "Explore",
          instruction:"touch here",
          route:'/seo'
      },
    ];

    return (
        <div>


        <Intro/>

        <div className="flex min-h-screen   items-center justify-center relative w-full pt-64 ">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {cards.map((card, index) => (
                    <div key={index} className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow md:py-8 md:mb-4">
                        <div className="h-96 w-72">
                            <Image
                                className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                                src={card.imageURL}
                                alt={card.title}
                                fill // Use the fill attribute
                                sizes="(max-width: 768px) 100vw, 
                                    (max-width: 1200px) 50vw, 
                                    33vw" // Optional for better optimization
                            />
                        </div>
                        <div className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                        <span className="grid place-content-center rounded-full  border mr-2 mt-4 font-bold primary text-3xl">{card.instruction}</span>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                            <h1 className="font-dmserif text-3xl font-bold text-white">{card.title}
                              
                            </h1>
                            <p className="text-lg italic text-white mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{card.description}</p>
                            <button
                                className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-10 px-3.5 text-sm capitalize text-white hover:bg-neutral-800 active:bg-neutral-700 active:scale-95 transition transform duration-150"
                                onClick={() => router.push(card.route)}
                            >
                                {card.buttonText}
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Texts/>
        <HoverDevCards/>
        <Faqs
        title="FAQS"
        faqs={faqsHome}
        />
        </div>
        
    );
}

export default Body;
