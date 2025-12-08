import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Code, 
  Users, 
  Award, 
  Cloud, 
  Truck,
  Brain,
  FileText,
  GitBranch,
  BarChart3,
  Target,
  MessageSquare,
  Presentation
} from "lucide-react";
import { Button } from "@/components/ui/button";

const technicalSkills = [
  { name: "Conversational AI (LLMs, RAG, Watsonx)", icon: Brain },
  { name: "Requirements Documentation (BRD, SRS, User Stories)", icon: FileText },
  { name: "System Workflow Design & UML", icon: GitBranch },
  { name: "Salesforce (Admin, Developer), Cloud Solutions, APIs", icon: Cloud },
  { name: "Data Analysis & Visualization", icon: BarChart3 },
  { name: "Jira, Confluence, Figma, GitLab, FastAPI, Python, Raspberry Pi", icon: Code },
];

const professionalSkills = [
  { name: "Product Thinking & Prioritization", icon: Target },
  { name: "Business Analysis & Process Mapping", icon: FileText },
  { name: "Project Management (Agile/Scrum)", icon: GitBranch },
  { name: "Technical Program Management", icon: Code },
  { name: "Stakeholder & Cross-Functional Communication", icon: MessageSquare },
  { name: "Executive Presentations & Reporting", icon: Presentation },
];

const certifications = [
  {
    category: "Cloud, CRM & Digital Transformation",
    icon: Cloud,
    items: [
      "Salesforce Certified Administrator (SCA)",
      "Salesforce Platform Developer I",
      "Conga Level 1 Composer",
    ],
  },
  {
    category: "Logistics & Supply Chain",
    icon: Truck,
    items: [
      "International Logistics — LinkedIn",
      "Understanding Logistics — LinkedIn",
      "Supply Chain Foundations — NASBA",
    ],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Skills & Certifications
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expertise & Credentials
            </h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive overview of my technical capabilities, professional skills, 
              and industry certifications.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Technical Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code className="w-5 h-5" />
                </div>
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {technicalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card rounded-xl p-4 shadow-card flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-secondary text-primary shrink-0">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Users className="w-5 h-5" />
                </div>
                Professional Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {professionalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-card rounded-xl p-4 shadow-card flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                  <Award className="w-5 h-5" />
                </div>
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.category}
                    className="bg-card rounded-xl p-6 shadow-card"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                        <cert.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold">{cert.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {cert.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Award className="w-4 h-4 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/experience">
                View Work Experience
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
