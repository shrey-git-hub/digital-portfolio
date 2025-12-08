import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, FileText, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "cpl-chatbot",
    title: "IBM–CPS Credit for Prior Learning (CPL) Chatbot",
    role: "Business Analyst | Product Workflow Designer | AI System Designer",
    description: "Designed an AI-driven chatbot for Northeastern University CPS to simplify the Credit for Prior Learning (CPL) submission process. The chatbot uses IBM Watsonx to guide students, extract skills, recommend course equivalencies, and generate structured summaries for advisors.",
    icon: Bot,
    color: "bg-blue-500/10 text-blue-600",
    skills: ["Business Analysis", "Requirements Documentation", "UX Flow Design", "AI Workflow Design", "User Testing"],
  },
  {
    id: "sunnycore",
    title: "SunnyCore Offline AI Assistant",
    role: "Hardware Integration Lead | System Tester",
    description: "Built a fully offline, emotion-aware conversational AI assistant using Whisper (speech-to-text), RoBERTa (emotion detection), and LLaMA-2 (local response generation) optimized to run on a Raspberry Pi.",
    icon: Cpu,
    color: "bg-green-500/10 text-green-600",
    skills: ["Systems Thinking", "AI Integration", "Hardware Configuration", "Troubleshooting", "Technical Documentation"],
  },
  {
    id: "system-design",
    title: "System Design & Requirements Engineering",
    role: "Business Analyst",
    description: "Created a comprehensive System Requirements Specification (SRS) that included workflows, UML diagrams, user flows, and functional/non-functional requirements.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-600",
    skills: ["Requirements Gathering", "UML Design", "System Workflow Mapping", "Documentation", "Stakeholder Communication"],
  },
  {
    id: "analytics",
    title: "Analytics & AI Coursework Project",
    role: "Data Analyst",
    description: "Built dashboards and storytelling insights for a data analysis project demonstrating analytical thinking and insight-driven decision-making.",
    icon: BarChart3,
    color: "bg-orange-500/10 text-orange-600",
    skills: ["Data Visualization", "Insight Communication", "Dashboard Design"],
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Work
            </h1>
            <p className="text-xl text-muted-foreground">
              A collection of projects showcasing my experience in product management, 
              business analysis, AI systems, and technical leadership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block"
              >
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={cn("inline-flex p-4 rounded-xl shrink-0", project.color)}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-accent font-medium mb-3">{project.role}</p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 4 && (
                          <span className="px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs">
                            +{project.skills.length - 4} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-primary text-sm font-medium">
                        View Project Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
