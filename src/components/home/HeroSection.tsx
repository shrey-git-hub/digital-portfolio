import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              Open to Opportunities
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up stagger-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Shreyas Wankhade</span>
          </h1>

          <p className="opacity-0 animate-fade-up stagger-2 text-xl md:text-2xl text-muted-foreground mb-4">
            Product Manager • Technical Program Manager • Business Analyst
          </p>

          <p className="opacity-0 animate-fade-up stagger-3 text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Graduate student at Northeastern University with 5+ years of experience 
            leading Salesforce and cloud transformation projects. Passionate about 
            AI, automation, and human-centered design.
          </p>

          <div className="opacity-0 animate-fade-up stagger-4 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>

          <div className="opacity-0 animate-fade-up stagger-5 mt-12 flex items-center gap-8 text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">5+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">15+</span>
              <span className="text-sm">Projects Delivered</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground">6+</span>
              <span className="text-sm">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
