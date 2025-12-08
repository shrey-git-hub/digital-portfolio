import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Great Together
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          I'm currently seeking opportunities in Product Management, Technical Program Management, 
          and Business Analysis. Let's connect and discuss how I can contribute to your team.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              <Mail className="w-5 h-5" />
              Get in Touch
            </Link>
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link to="/experience">
              View Experience
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
