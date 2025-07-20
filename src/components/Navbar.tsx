"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 relative z-10">
            <Image 
              src="/images/lgray.png"
              alt="Logo"
              width={150}
              height={100}
              className="h-12 w-auto"
              priority
              quality={100}
              style={{
                filter: 'none',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
              }}
            />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-md">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm p-6">
              <div className="flex flex-col gap-6 h-full justify-center items-center">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-6 w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA on desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
