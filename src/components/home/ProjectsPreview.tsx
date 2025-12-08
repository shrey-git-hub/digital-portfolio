import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "cpl-chatbot",
    title: "IBM–CPS CPL Chatbot",
    role: "Business Analyst | AI System Designer",
    description: "AI-driven chatbot for Credit for Prior Learning submission using IBM Watsonx",
    icon: Bot,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: "sunnycore",
    title: "SunnyCore AI Assistant",
    role: "Hardware Integration Lead",
    description: "Offline emotion-aware AI assistant on Raspberry Pi using Whisper, RoBERTa, LLaMA-2",
    icon: Cpu,
    color: "bg-green-500/10 text-green-600",
  },
  {
    id: "system-design",
    title: "System Design & Requirements",
    role: "Business Analyst",
    description: "Comprehensive SRS with UML diagrams, workflows, and requirement specifications",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: "analytics",
    title: "Analytics & AI Project",
    role: "Data Analyst",
    description: "Dashboards and storytelling insights for data-driven decision making",
    icon: BarChart3,
    color: "bg-orange-500/10 text-orange-600",
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my experience in product management, 
            business analysis, and AI-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group"
            >
              <div className="h-full bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className={cn("inline-flex p-3 rounded-lg mb-4", project.color)}>
                  <project.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{project.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
