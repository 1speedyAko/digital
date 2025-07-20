import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Database,
  LineChart,
  Palette,
  ShoppingBag,
  Star,
} from "lucide-react";
import { notFound } from "next/navigation";

interface ServiceData {
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
  features: string[];
  process: string[];
  pricing: {
    basic: { price: string; features: string[] };
    premium: { price: string; features: string[] };
  };
  testimonial: {
    text: string;
    author: string;
    company: string;
  };
}

const servicesData: Record<string, ServiceData> = {
  "logo-design": {
    title: "Logo Design",
    description:
      "Professional and memorable logo designs that capture your brand's essence and values.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    longDescription:
      "Your logo is the face of your brand. We create distinctive, memorable logos that communicate your brand's personality and values at first glance. Our design process ensures your logo works across all mediums and stands the test of time.",
    features: [
      "Custom logo concepts",
      "Multiple design variations",
      "Vector files for scalability",
      "Brand guidelines document",
      "Unlimited revisions",
      "Commercial usage rights",
    ],
    process: [
      "Brand discovery and research",
      "Concept development",
      "Initial design presentations",
      "Refinement and revisions",
      "Final delivery with all formats",
    ],
    pricing: {
      basic: {
        price: "$299",
        features: [
          "3 logo concepts",
          "2 revisions",
          "Basic file formats",
          "7-day delivery",
        ],
      },
      premium: {
        price: "$599",
        features: [
          "5 logo concepts",
          "Unlimited revisions",
          "All file formats",
          "Brand guidelines",
          "3-day delivery",
        ],
      },
    },
    testimonial: {
      text: "The logo perfectly captures our brand essence. It's been instrumental in establishing our market presence.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
    },
  },
  "poster-design": {
    title: "Poster Design",
    description:
      "Eye-catching poster designs for events, promotions, and marketing campaigns.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    longDescription:
      "Make a bold statement with our custom poster designs. Whether for events, promotions, or brand awareness, we create visually striking posters that capture attention and communicate your message effectively.",
    features: [
      "Custom poster layouts",
      "High-resolution designs",
      "Print-ready files",
      "Multiple size formats",
      "Brand consistency",
      "Fast turnaround",
    ],
    process: [
      "Brief and requirements gathering",
      "Concept and layout design",
      "Content integration",
      "Review and refinements",
      "Final delivery in all formats",
    ],
    pricing: {
      basic: {
        price: "$149",
        features: [
          "Single poster design",
          "2 revisions",
          "Standard resolution",
          "5-day delivery",
        ],
      },
      premium: {
        price: "$299",
        features: [
          "Multiple variations",
          "Unlimited revisions",
          "High resolution",
          "Multiple formats",
          "2-day delivery",
        ],
      },
    },
    testimonial: {
      text: "Our event attendance doubled thanks to the eye-catching poster design. Absolutely fantastic work!",
      author: "Mike Chen",
      company: "EventPro",
    },
  },
  "graphic-design": {
    title: "Graphic Design",
    description:
      "Creative visual solutions for print and digital media to enhance your brand presence.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    longDescription:
      "From business cards to social media graphics, we provide comprehensive graphic design services that maintain brand consistency across all your marketing materials and digital presence.",
    features: [
      "Brand identity systems",
      "Marketing collateral",
      "Social media graphics",
      "Print design",
      "Digital assets",
      "Brand guidelines",
    ],
    process: [
      "Brand audit and strategy",
      "Design system development",
      "Asset creation",
      "Quality assurance",
      "Final delivery and guidelines",
    ],
    pricing: {
      basic: {
        price: "$199/month",
        features: [
          "10 design assets",
          "2 revisions per asset",
          "Standard formats",
          "Email support",
        ],
      },
      premium: {
        price: "$399/month",
        features: [
          "Unlimited designs",
          "Priority support",
          "All file formats",
          "Brand consultation",
          "Same-day delivery",
        ],
      },
    },
    testimonial: {
      text: "Their graphic design work transformed our brand image. We've seen a 40% increase in engagement.",
      author: "Lisa Rodriguez",
      company: "Creative Solutions",
    },
  },
  "ecommerce-development": {
    title: "E-commerce Development",
    description:
      "Custom online stores with seamless checkout experiences and product management.",
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    longDescription:
      "Build a powerful online presence with our custom e-commerce solutions. We create user-friendly, conversion-optimized online stores that drive sales and provide excellent customer experiences.",
    features: [
      "Custom e-commerce platform",
      "Payment gateway integration",
      "Inventory management",
      "Mobile-responsive design",
      "SEO optimization",
      "Analytics integration",
    ],
    process: [
      "Requirements analysis",
      "Platform selection and setup",
      "Custom development",
      "Testing and optimization",
      "Launch and ongoing support",
    ],
    pricing: {
      basic: {
        price: "$2,999",
        features: [
          "Up to 100 products",
          "Basic customization",
          "Standard integrations",
          "30-day support",
        ],
      },
      premium: {
        price: "$5,999",
        features: [
          "Unlimited products",
          "Full customization",
          "Advanced integrations",
          "90-day support",
          "Performance optimization",
        ],
      },
    },
    testimonial: {
      text: "Our online sales increased by 300% within the first month of launching our new e-commerce site.",
      author: "David Park",
      company: "RetailMax",
    },
  },
  "corporate-web-design": {
    title: "Corporate Web Design",
    description:
      "Professional websites that establish credibility and effectively communicate your brand message.",
    icon: <Code className="h-8 w-8 text-primary" />,
    longDescription:
      "Establish your corporate presence with a professional website that builds trust and credibility. Our corporate web designs focus on clear communication, user experience, and conversion optimization.",
    features: [
      "Professional design",
      "Content management system",
      "SEO optimization",
      "Mobile responsiveness",
      "Contact forms",
      "Analytics setup",
    ],
    process: [
      "Discovery and planning",
      "Design and wireframing",
      "Development and testing",
      "Content integration",
      "Launch and training",
    ],
    pricing: {
      basic: {
        price: "$1,999",
        features: [
          "5-page website",
          "Basic customization",
          "Contact forms",
          "30-day support",
        ],
      },
      premium: {
        price: "$3,999",
        features: [
          "Unlimited pages",
          "Custom functionality",
          "Advanced SEO",
          "90-day support",
          "Performance optimization",
        ],
      },
    },
    testimonial: {
      text: "Our new corporate website has significantly improved our professional image and lead generation.",
      author: "Jennifer White",
      company: "Corporate Solutions Ltd.",
    },
  },
  "portfolio-web-design": {
    title: "Portfolio Web Design",
    description:
      "Showcase your work with a custom portfolio website that highlights your skills and achievements.",
    icon: <Code className="h-8 w-8 text-primary" />,
    longDescription:
      "Stand out from the competition with a stunning portfolio website that showcases your best work. We create visually appealing, user-friendly portfolios that help you attract clients and opportunities.",
    features: [
      "Custom portfolio layout",
      "Project galleries",
      "Contact integration",
      "Blog functionality",
      "SEO optimization",
      "Mobile responsiveness",
    ],
    process: [
      "Portfolio audit and strategy",
      "Design and layout creation",
      "Development and optimization",
      "Content organization",
      "Launch and optimization",
    ],
    pricing: {
      basic: {
        price: "$1,499",
        features: [
          "Portfolio showcase",
          "Contact form",
          "Basic customization",
          "30-day support",
        ],
      },
      premium: {
        price: "$2,999",
        features: [
          "Advanced galleries",
          "Blog integration",
          "Custom animations",
          "90-day support",
          "SEO optimization",
        ],
      },
    },
    testimonial: {
      text: "My new portfolio website has helped me land three major clients in just two months!",
      author: "Alex Thompson",
      company: "Freelance Designer",
    },
  },
  "data-analysis": {
    title: "Data Analysis",
    description:
      "Transform your raw data into actionable insights with comprehensive data analysis services.",
    icon: <Database className="h-8 w-8 text-primary" />,
    longDescription:
      "Unlock the power of your data with our comprehensive analysis services. We help businesses make data-driven decisions by transforming raw data into meaningful insights and actionable recommendations.",
    features: [
      "Statistical analysis",
      "Data cleaning and preparation",
      "Trend identification",
      "Predictive modeling",
      "Custom reports",
      "Ongoing consultation",
    ],
    process: [
      "Data assessment and planning",
      "Data collection and cleaning",
      "Analysis and modeling",
      "Insights generation",
      "Report delivery and presentation",
    ],
    pricing: {
      basic: {
        price: "$999",
        features: [
          "Basic analysis",
          "Standard report",
          "Email support",
          "7-day delivery",
        ],
      },
      premium: {
        price: "$2,499",
        features: [
          "Advanced analysis",
          "Custom dashboard",
          "Ongoing consultation",
          "Priority support",
          "3-day delivery",
        ],
      },
    },
    testimonial: {
      text: "The data analysis revealed insights that helped us increase our revenue by 25% in just one quarter.",
      author: "Robert Kim",
      company: "DataDriven Corp",
    },
  },
  "data-visualization": {
    title: "Data Visualization",
    description:
      "Clear and compelling visual representations of complex data to aid decision-making.",
    icon: <LineChart className="h-8 w-8 text-primary" />,
    longDescription:
      "Make complex data easy to understand with our professional data visualization services. We create interactive dashboards, charts, and infographics that help you communicate insights effectively.",
    features: [
      "Interactive dashboards",
      "Custom charts and graphs",
      "Infographic design",
      "Real-time data integration",
      "Mobile-responsive design",
      "Export capabilities",
    ],
    process: [
      "Data source identification",
      "Visualization strategy",
      "Design and development",
      "Testing and refinement",
      "Deployment and training",
    ],
    pricing: {
      basic: {
        price: "$799",
        features: [
          "Static visualizations",
          "Basic charts",
          "PDF export",
          "Email support",
        ],
      },
      premium: {
        price: "$1,999",
        features: [
          "Interactive dashboards",
          "Real-time data",
          "Custom design",
          "Training included",
          "Ongoing support",
        ],
      },
    },
    testimonial: {
      text: "The data visualizations made our quarterly reports so much more engaging and easier to understand.",
      author: "Maria Garcia",
      company: "Analytics Pro",
    },
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Our Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Pricing Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Basic Package</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {service.pricing.basic.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.pricing.basic.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Premium Package
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      Popular
                    </span>
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {service.pricing.premium.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.pricing.premium.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">
                  &quot;{service.testimonial.text}&quot;
                </blockquote>
                <div>
                  <div className="font-semibold">
                    {service.testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service.testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and see how we can help
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
              </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}
