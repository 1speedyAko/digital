import React from "react";
import Intro from "../intro/Intro";
import Texts from "../text/Info";
import Image from "next/image";

function Body() {
    // JSON data directly within the component
    const cards = [
        {
            title: "Web Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati?",
            imageURL: "https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
            buttonText: "See More"
        },
        {
            title: "Email Marketing",
            description: "Explore the beauty of nature with breathtaking views.",
            imageURL: "https://plus.unsplash.com/premium_photo-1721910821661-e3cd6b53b61d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVtYWlsJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
            buttonText: "Explore"
        },
        {
          title: "Content Marketing",
          description: "Explore the beauty of nature with breathtaking views.",
          imageURL: "https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.webp?a=1&b=1&s=612x612&w=0&k=20&c=icUfwJYefPLxioStRtEdLOKClOQQK4Ztm6zHvcC6uoI=",
          buttonText: "Explore"
      },
    ];

    return (
        <div>


        <Intro/>

        <div className="flex min-h-screen   items-center justify-center relative w-full pt-64">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {cards.map((card, index) => (
                    <div key={index} className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow md:py-8 md:mb-4">
                        <div className="h-96 w-72">
                            <Image
                                className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                                src={card.imageURL}
                                alt={card.title}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                            <h1 className="font-dmserif text-3xl font-bold text-white">{card.title}</h1>
                            <p className="text-lg italic text-white mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{card.description}</p>
                            <button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                                {card.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Texts/>

        </div>
        
    );
}

export default Body;
