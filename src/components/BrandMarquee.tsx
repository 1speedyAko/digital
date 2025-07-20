"use client";

import React from "react";

interface BrandMarqueeProps {
  brands?: {
    name: string;
    logo: string;
  }[];
}

export default function BrandMarquee({
  brands = [
    {
      name: "West K9",
      logo: "brands/profile.png",
    },
    {
      name: "Thrice Pets",
      logo: "brands/thricePets black.png",
    },
    {
      name: "Winrova",
      logo: "brands/winrova black.png",
    },
    {
      name: "Mosev-X",
      logo: "brands/mosev.png",
    },
    {
      name: "classic stats",
      logo: "brands/classicstats.png",
    },
    // {
    //   name: "NextGen",
    //   logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&q=80",
    // },
    // {
    //   name: "SmartSolutions",
    //   logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&q=80",
    // },
    // {
    //   name: "FutureWorks",
    //   logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&q=80",
    // },
  ],
}: BrandMarqueeProps) {
  const duplicatedBrands = [...brands, ...brands, ...brands]; // Duplicate brands for seamless looping

  return (
    <div className="w-full overflow-hidden bg-background py-8 border-y border-border">
      <div className="container mx-auto">
        <h3 className="text-center text-xl font-medium mb-6 text-foreground">
          Trusted by Industry Leaders
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center animate-marquee hover:pause">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex flex-col items-center justify-center mx-8 flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow-sm border border-border flex items-center justify-center p-2">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="mt-2 text-xs text-muted-foreground font-medium">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
