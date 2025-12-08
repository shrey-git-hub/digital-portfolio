import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const technicalSkills = [
  "Conversational AI (LLMs, RAG)",
  "Requirements Documentation",
  "System Workflow Design & UML",
  "Salesforce (Admin, Developer)",
  "Data Analysis & Visualization",
  "Jira, Confluence, Figma",
];

const professionalSkills = [
  "Product Thinking",
  "Business Analysis",
  "Project Management",
  "Stakeholder Communication",
  "Cross-Functional Leadership",
  "Executive Presentations",
];

export function SkillsPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical proficiency and professional capabilities 
            that drive successful project outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-card">
            <h3 className="text-lg font-semibold mb-4 text-accent">Professional Skills</h3>
            <div className="flex flex-wrap gap-2">
              {professionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/skills">
              View All Skills & Certifications
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
