import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Briefcase, Award, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Tech Lead",
    company: "Extentia Information Technology",
    duration: "2 years 9 months",
    type: "Full-time",
    highlights: [
      "Led cross-functional teams to design & implement Salesforce solutions across major industries including Healthcare, BFSI, Insurance, and Public Sector",
      "Delivered patient support programs and digital transformation solutions",
      "Collaborated with product owners, BAs, and developers to align technical solutions with business needs",
      "Spearheaded DevOps practices using GitLab, CI/CD pipelines",
      "Received multiple awards and recognition for leadership and delivery excellence",
    ],
  },
  {
    title: "Software Professional",
    company: "Extentia Information Technology",
    duration: "Previous Role",
    type: "Full-time",
    highlights: [
      "Developed and maintained Salesforce applications across multiple client projects",
      "Participated in requirements gathering and solution design",
      "Contributed to code reviews and knowledge sharing within the team",
    ],
  },
  {
    title: "Cloud Analyst",
    company: "Arxxus Technology Partners",
    duration: "Previous Role",
    type: "Full-time",
    highlights: [
      "Analyzed and implemented cloud solutions for enterprise clients",
      "Supported Salesforce implementation and customization projects",
      "Collaborated with stakeholders to understand business requirements",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Over 5 years of experience leading cloud transformation and Salesforce 
              projects across diverse industries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                    
                    <div className="md:ml-16 bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-xl font-semibold">{exp.title}</h2>
                          <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                            <Briefcase className="w-3 h-3" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                Education
              </h2>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Master of Professional Studies in Informatics</h3>
                    <p className="text-accent font-medium">Northeastern University</p>
                    <p className="text-muted-foreground mt-2">
                      Focus: Product Management, Business Analysis, User-Centered Systems Design
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-sm">
                    <MapPin className="w-3 h-3" />
                    Boston, MA
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
