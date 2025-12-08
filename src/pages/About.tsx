import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bridging Technology & Strategy
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Hi, I'm Shreyas Wankhade, a graduate student in the Master of Professional Studies 
                in Informatics at Northeastern University, focusing on product management, business 
                analysis, and user-centered systems design.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">5+ Years Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Leading Salesforce and cloud transformation projects across Healthcare, 
                    Public Sector, BFSI, Insurance, IoT, and Construction industries.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 text-accent mb-4">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Master's at Northeastern</h3>
                  <p className="text-muted-foreground text-sm">
                    MPS in Informatics with focus on product management, business analysis, 
                    and user-centered systems design.
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I come with extensive experience working closely with users, simplifying complex 
                workflows, and aligning technical and non-technical teams around clear goals. 
                Over time, I realized I deeply enjoy roles where I can bridge the gap between 
                business needs and technical solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                During my master's program, I transitioned into Product/Project/Program Management–style 
                roles, where I led requirements gathering, UX flows, AI-assisted system design, 
                prototyping, and stakeholder communication across multiple academic and experiential projects.
              </p>

              <div className="bg-secondary/50 rounded-xl p-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What I'm Looking For</h3>
                    <p className="text-muted-foreground">
                      I'm now seeking opportunities where technology, strategy, and user experience 
                      come together to create high-impact solutions. I'm especially passionate about 
                      how AI, automation, and human-centered design can improve real-world workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-card mb-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What Drives Me</h3>
                    <p className="text-muted-foreground">
                      I enjoy bringing clarity to ambiguity, designing scalable processes, and 
                      helping teams move from idea to execution. My approach combines strategic 
                      thinking with hands-on technical understanding to deliver solutions that 
                      truly meet user needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/projects">
                    View My Projects
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/experience">
                    See Experience
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
