import { Layout } from "@/components/layout/Layout";
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const email = "wankhade.s@northeastern.edu";
  const subject = "Reaching Out - Opportunity Discussion";
  const body = "Hi Shreyas,\n\nI came across your portfolio and would like to connect regarding...\n\n";
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              I'm actively seeking opportunities in Product Management, Technical Program 
              Management, and Business Analysis. Let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-4">
                    <a
                      href="mailto:wankhade.s@northeastern.edu"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">wankhade.s@northeastern.edu</p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/shreyaswankhade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <p className="font-medium">linkedin.com/in/shreyaswankhade</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Boston, MA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">Open to Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    I'm currently seeking full-time positions in Product Management, 
                    Technical Program Management, Business Analysis, and Project Management roles.
                  </p>
                </div>
              </div>

              {/* Send Message CTA */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
                  <Mail className="w-12 h-12" />
                </div>
                <h2 className="text-xl font-semibold mb-3">Send a Message</h2>
                <p className="text-muted-foreground mb-6">
                  Click below to open your email client with my address pre-filled. 
                  I'd love to hear from you!
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={mailtoLink}>
                    <ExternalLink className="w-5 h-5" />
                    Open Email Client
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Or email me directly at{" "}
                  <a 
                    href={`mailto:${email}`} 
                    className="text-primary hover:underline font-medium"
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
