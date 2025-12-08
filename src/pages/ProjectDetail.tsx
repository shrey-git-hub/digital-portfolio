import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, Bot, Cpu, FileText, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectsData = {
  "cpl-chatbot": {
    title: "IBM–CPS Credit for Prior Learning (CPL) Chatbot",
    role: "Business Analyst | Product Workflow Designer | AI System Designer",
    icon: Bot,
    color: "bg-blue-500/10 text-blue-600",
    overview: "Designed an AI-driven chatbot for Northeastern University CPS to simplify the Credit for Prior Learning (CPL) submission process. The chatbot uses IBM Watsonx to guide students, extract skills, recommend course equivalencies, and generate structured summaries for advisors.",
    responsibilities: [
      "Led requirements gathering and stakeholder interviews",
      "Designed conversation flows and evaluation logic",
      "Conducted user research and competitive analysis",
      "Created BRDs, workflow diagrams, and documentation",
      "Guided RAG-based search and backend logic alignment",
      "Led user testing and implemented improvements (terminology clarity, progress indicators, upload feedback)",
    ],
    skills: ["Business Analysis", "Requirements Documentation", "UX Flow Design", "AI Workflow Design (LLMs, RAG)", "User Testing", "Stakeholder Communication"],
    reflection: "This project strengthened my ability to design AI-assisted workflows, translate user needs into actionable requirements, and deliver a human-centered prototype aligned with academic and technical stakeholders.",
  },
  "sunnycore": {
    title: "SunnyCore Offline AI Assistant",
    role: "Hardware Integration Lead | System Tester",
    icon: Cpu,
    color: "bg-green-500/10 text-green-600",
    overview: "Built a fully offline, emotion-aware conversational AI assistant using Whisper (speech-to-text), RoBERTa (emotion detection), and LLaMA-2 (local response generation) optimized to run on a Raspberry Pi.",
    responsibilities: [
      "Integrated AI models into resource-constrained hardware",
      "Configured Raspberry Pi OS, storage, and environment",
      "Tested performance, latency, and reliability",
      "Troubleshot Whisper, RoBERTa, and LLaMA-2 integration",
      "Helped refine model optimization and inference speed",
      "Documented system challenges and performance metrics",
    ],
    skills: ["Systems Thinking", "AI Integration", "Hardware Configuration", "Experimentation", "Troubleshooting", "Technical Documentation"],
    reflection: "This project improved my understanding of deploying AI models offline, balancing performance with hardware limitations, and working closely with technical teams to deliver functional prototypes.",
  },
  "system-design": {
    title: "System Design & Requirements Engineering",
    role: "Business Analyst",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-600",
    overview: "Created a comprehensive System Requirements Specification (SRS) that included workflows, UML diagrams, user flows, and functional/non-functional requirements.",
    responsibilities: [
      "Gathered and documented business and technical requirements",
      "Created detailed UML diagrams and system workflows",
      "Defined functional and non-functional requirements",
      "Aligned stakeholders on system specifications",
      "Designed scalable system architecture documentation",
    ],
    skills: ["Requirements Gathering", "UML Design", "System Workflow Mapping", "Documentation", "Stakeholder Communication"],
    reflection: "This project reinforced strong BA fundamentals and improved my ability to structure requirements, align stakeholders, and design scalable system solutions.",
  },
  "analytics": {
    title: "Analytics & AI Coursework Project",
    role: "Data Analyst",
    icon: BarChart3,
    color: "bg-orange-500/10 text-orange-600",
    overview: "Built dashboards and storytelling insights for a data analysis project demonstrating analytical thinking and insight-driven decision-making.",
    responsibilities: [
      "Analyzed datasets to extract meaningful insights",
      "Built interactive dashboards for data visualization",
      "Created compelling data stories for stakeholders",
      "Applied analytical frameworks for decision support",
    ],
    skills: ["Data Visualization", "Insight Communication", "Dashboard Design"],
    reflection: "This project enhanced my ability to communicate complex data insights effectively and create actionable recommendations for stakeholders.",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return <Navigate to="/projects" replace />;
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <div className={cn("inline-flex p-4 rounded-xl mb-6", project.color)}>
                <project.icon className="w-10 h-10" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-accent font-medium">{project.role}</p>
            </div>

            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl font-semibold mb-4">My Responsibilities</h2>
                <ul className="space-y-3">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl font-semibold mb-4">Skills Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{project.reflection}"
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Discuss This Project
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/projects">
                  View Other Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
