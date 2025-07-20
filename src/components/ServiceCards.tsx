"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Database,
  LineChart,
  Palette,
  ShoppingBag,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

interface ServiceCardProps extends Service {
  ctaText?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  slug,
  ctaText = "Learn More",
}: ServiceCardProps) => {
  return (
    <Card className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter>
        <Link href={`/services/${slug}`} className="w-full">
          <Button variant="outline" className="w-full group">
            {ctaText}{" "}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const ServiceCards = () => {
  const serviceCategories = {
    "Design Services": [
      {
        title: "Logo Design",
        description:
          "Professional and memorable logo designs that capture your brand's essence and values.",
        icon: <Palette className="h-6 w-6 text-primary" />,
        slug: "logo-design",
      },
      {
        title: "Poster Design",
        description:
          "Eye-catching poster designs for events, promotions, and marketing campaigns.",
        icon: <Palette className="h-6 w-6 text-primary" />,
        slug: "poster-design",
      },
      {
        title: "Graphic Design",
        description:
          "Creative visual solutions for print and digital media to enhance your brand presence.",
        icon: <Palette className="h-6 w-6 text-primary" />,
        slug: "graphic-design",
      },
    ],
    "Web Development": [
      {
        title: "E-commerce Development",
        description:
          "Custom online stores with seamless checkout experiences and product management.",
        icon: <ShoppingBag className="h-6 w-6 text-primary" />,
        slug: "ecommerce-development",
      },
      {
        title: "Corporate Web Design",
        description:
          "Professional websites that establish credibility and effectively communicate your brand message.",
        icon: <Code className="h-6 w-6 text-primary" />,
        slug: "corporate-web-design",
      },
      {
        title: "Portfolio Web Design",
        description:
          "Showcase your work with a custom portfolio website that highlights your skills and achievements.",
        icon: <Code className="h-6 w-6 text-primary" />,
        slug: "portfolio-web-design",
      },
    ],
    "Data Services": [
      {
        title: "Data Analysis",
        description:
          "Transform your raw data into actionable insights with comprehensive data analysis services.",
        icon: <Database className="h-6 w-6 text-primary" />,
        slug: "data-analysis",
      },
      {
        title: "Data Visualization",
        description:
          "Clear and compelling visual representations of complex data to aid decision-making.",
        icon: <LineChart className="h-6 w-6 text-primary" />,
        slug: "data-visualization",
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of design and development services to
            help bring your vision to life.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(serviceCategories).map(([category, services]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    slug={service.slug}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
