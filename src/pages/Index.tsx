import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsPreview />
      <SkillsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
