"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";

interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  detailedDescription?: string;
  clientName?: string;
  projectDate?: string;
  projectUrl?: string;
  onClick?: () => void;
}

const PortfolioItem = ({
  id = "1",
  title = "Project Title",
  category = "Web Design",
  description = "A brief description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  detailedDescription = "This project involved creating a responsive website with modern design principles. The client needed a platform that would showcase their services in a single page ali.",
  clientName = "Client Name",
  projectDate = "January 2023",
  projectUrl = "#",
  onClick,
}: PortfolioItemProps) => {
  const [showDetails, setShowDetails] = React.useState(false);

  const handleViewDetails = () => {
    setShowDetails(true);
    if (onClick) onClick();
  };

  return (
    <>
      <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <AspectRatio ratio={ 3/ 2} className="w-full h-44 ">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-md bg-no-repeat mt-6"
            />
          </AspectRatio>
          <Badge className="absolute top-3 right-3">{category}</Badge>
        </div>

        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>

        <CardFooter className="pt-0">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleViewDetails}
          >
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              <Badge className="mt-2">{category}</Badge>
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4 md:grid-cols-2">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src={imageUrl}
                alt={title}
                className="rounded-md  object-contain object-right  "
                width={800}
                height={600}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Project Description</h4>
                <p className="text-sm text-muted-foreground">
                  {detailedDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Client</h4>
                  <p className="text-sm text-muted-foreground">{clientName}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Date</h4>
                  <p className="text-sm text-muted-foreground">{projectDate}</p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            {projectUrl && (
              <Button asChild>
                <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                </Link>
              </Button>
            )}
            <Button variant="outline" onClick={() => setShowDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioItem;
