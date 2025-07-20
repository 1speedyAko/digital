"use client";

import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";

interface PortfolioItemType {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl?: string; // Optional URL for the project
  detailedDescription?: string; // Optional detailed description
  clientName?: string; // Add client name
  projectDate?: string; // Add project date
}

interface PortfolioGridProps {
  items?: PortfolioItemType[];
}

export default function PortfolioGrid({ items = [] }: PortfolioGridProps) {
  const defaultItems: PortfolioItemType[] = [
    {
      id: "1",
      title: "Modern E-commerce Website",
      category: "web-design",
      description:
        "A fully responsive e-commerce platform with custom product filtering.",
      imageUrl:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      projectUrl: "https://example-ecommerce.com", // Add project URL
      clientName: "TechCorp Solutions",
      projectDate: "March 2024",
      detailedDescription: "Built a modern e-commerce platform with advanced filtering, payment integration, and mobile-first design approach."
    },
    {
      id: "2",
      title: "Brand Identity Design",
      category: "graphic-design",
      description:
        "Complete brand identity including logo, color palette, and typography.",
      imageUrl: "/images/westk9.png",
      projectUrl: "https://westk9.co.ke", // Already has project URL
      clientName: "West K9 Training",
      projectDate: "April 2024",
      detailedDescription: "Comprehensive brand identity design including logo creation, brand guidelines, and marketing materials for a professional dog training service."
    },
    {
      id: "3",
      title: "Sales Data Analysis",
      category: "data-analysis",
      description:
        "Comprehensive analysis of quarterly sales data with actionable insights.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      projectUrl: "https://dashboard.example.com", // Add project URL
      clientName: "DataCorp Analytics",
      projectDate: "January 2024",
      detailedDescription: "Performed in-depth analysis of sales trends, customer behavior, and market opportunities with interactive dashboard visualization."
    },
    {
      id: "4",
      title: "Corporate Website Redesign",
      category: "web-design",
      description:
        "Modern redesign of a corporate website with improved UX/UI.",
      imageUrl:
        "/images/winrova.png",
      projectUrl: "www.winrova.com", // Add project URL
      clientName: "Winrova Tech",
      projectDate: "January 2024",
      detailedDescription: "Complete website overhaul focusing on user experience, accessibility, and modern design principles with CMS integration."
    },
    {
      id: "5",
      title: "Event Poster Series",
      category: "graphic-design",
      description: "Series of promotional posters for a music festival.",
      imageUrl:
        "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=800&q=80",
      projectUrl: "https://musicfest.example.com", // Add project URL
      clientName: "Summer Music Festival",
      projectDate: "November 2023",
      detailedDescription: "Created a cohesive visual identity for a 3-day music festival including posters, digital assets, and merchandise designs."
    },
    {
      id: "6",
      title: "Market Trend Analysis",
      category: "data-analysis",
      description: "Analysis of market trends with predictive modeling.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      projectUrl: "https://trends.example.com", // Add project URL
      clientName: "Market Insights Pro",
      projectDate: "October 2023",
      detailedDescription: "Developed predictive models to forecast market trends using machine learning algorithms and statistical analysis."
    },
  ];

  const portfolioItems = items.length > 0 ? items : defaultItems;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Work" },
    { id: "web-design", name: "Web Design" },
    { id: "graphic-design", name: "Graphic Design" },
    { id: "data-analysis", name: "Data Analysis" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Portfolio
        </h2> */}

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              imageUrl={item.imageUrl}
              projectUrl={item.projectUrl} 
              detailedDescription={item.detailedDescription} 
              clientName={item.clientName} 
              projectDate={item.projectDate} 
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No portfolio items found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}