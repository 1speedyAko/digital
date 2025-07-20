import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Target } from "lucide-react";
import Link from "next/link";

const stats = [
  { name: "Years of Experience", value: "2+", icon: Clock },
  { name: "Projects Completed", value: "15+", icon: Target },
  { name: "Happy Clients", value: "20+", icon: Users },
  // { name: "Awards Won", value: "12", icon: Award },
];

const team = [
  {
    name: "Charles Ako",
    role: "Creative Director & Founder",
    // image:
    //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "With over 3 years in design and development, Charles leads our creative vision and ensures every project exceeds expectations.",
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and data analysts
            dedicated to transforming your vision into digital reality.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              We believe that great design and powerful technology should work
              hand in hand to create experiences that not only look beautiful
              but also drive real business results.
            </p>
            <p className="text-lg mb-4 text-muted-foreground">
              Our mission is to bridge the gap between creative vision and
              technical execution, delivering solutions that are both visually
              stunning and functionally superior.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Every project we undertake is an opportunity to push boundaries,
              challenge conventions, and create something truly exceptional.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1634937734976-7b0432527d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW5zJTIwaW4lMjBhJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Team collaboration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These numbers represent the trust our clients place in us and the
              results we deliver together.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.name} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.name}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind every successful project, bringing
              diverse skills and perspectives to create exceptional results.
            </p>
          </div>
          <div className="flex justify-center">
            {team.map((member) => (
              <Card key={member.name} className="w-72 text-center">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    {/* <img
                      // src={member.image}
                      // alt={member.name}
                      className="object-cover w-full h-full"
                    /> */}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We never settle for good enough. Every project is an
                  opportunity to exceed expectations and deliver exceptional
                  results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe the best solutions come from working closely with
                  our clients, understanding their needs, and building together.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of technology and design trends to
                  ensure our clients always have a competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life and achieve
            your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
