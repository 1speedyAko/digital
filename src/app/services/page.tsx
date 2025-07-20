import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Palette,
  Code,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Create stunning visual identities that capture your brand's essence and resonate with your audience.",
    features: [
      "Logo Design & Branding",
      "Print Design (Brochures, Flyers)",
      "Digital Graphics & Social Media",
      "Packaging Design",
      "Brand Guidelines",
    ],
    price: "Starting at $500",
    popular: false,
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build modern, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Integration",
      "Performance Optimization",
    ],
    price: "Starting at $500",
    popular: true,
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Transform your data into actionable insights that drive informed business decisions and growth.",
    features: [
      "Business Intelligence Dashboards",
      "Data Visualization",
      "Predictive Analytics",
      "Performance Metrics",
      "Custom Reports",
    ],
    price: "Starting at $3,000",
    popular: false,
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Design intuitive mobile experiences that engage users and drive conversions across all devices.",
    features: [
      "Mobile App UI/UX Design",
      "Responsive Web Design",
      "User Experience Optimization",
      "Prototype Development",
      "Cross-platform Compatibility",
    ],
    price: "Starting at $1,000",
    popular: false,
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description:
      "Develop comprehensive digital strategies that align with your business goals and market opportunities.",
    features: [
      "Digital Marketing Strategy",
      "SEO Optimization",
      "Content Strategy",
      "Social Media Planning",
      "Conversion Optimization",
    ],
    price: "Starting at $2,000",
    popular: false,
  },
  {
    icon: Zap,
    title: "Consulting",
    description:
      "Get expert guidance on technology decisions, design direction, and business growth strategies.",
    features: [
      "Technology Consulting",
      "Design System Development",
      "Process Optimization",
      "Team Training",
      "Strategic Planning",
    ],
    price: "$150/hour",
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges through detailed consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive strategy tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Our team creates beautiful, functional designs that align with your brand and user needs.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "We bring designs to life with clean, efficient code and robust functionality.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We ensure a smooth launch and provide ongoing support to maximize your success.",
  },
];

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Comprehensive design and development solutions to help your business
            thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we provide end-to-end solutions that
              drive results and exceed expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold">
                          {service.price}
                        </span>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project is
              delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-2" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Services?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our team combines years of experience with cutting-edge
                    skills to deliver exceptional results.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">
                    We've helped over 20 businesses achieve their goals with
                    measurable, impactful solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    End-to-End Support
                  </h3>
                  <p className="text-muted-foreground">
                    From initial consultation to ongoing maintenance, we're with
                    you every step of the way.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden fees or surprises. We provide clear, upfront
                    pricing for all our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1656517046917-e25f39660254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Team working together"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your project and how we can help you achieve your
            goals. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
