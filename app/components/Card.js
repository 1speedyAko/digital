import React from "react";
import Image from "next/image";
function Card({ title, description, imageURL, buttonText }) {
    return (
        <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
            <div className="h-96 w-72">
                <Image className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" src={imageURL} alt={title} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-dmserif text-3xl font-bold text-white">{title}</h1>
                <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
                <button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Card;
