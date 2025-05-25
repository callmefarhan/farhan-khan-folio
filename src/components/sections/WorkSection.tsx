
import React from 'react';
import { Card } from '@/components/ui/card'; // Ensure Card is correctly imported

interface Project {
  title: string;
  description: string;
  tech: string;
}

interface WorkSectionProps {
  projects: Project[];
}

const WorkSection: React.FC<WorkSectionProps> = ({ projects }) => {
  return (
    <section id="work" className="min-h-screen reveal-section py-24">
      <h2 className="text-4xl font-sans font-bold mb-12 split-text">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href="https://github.com/callmefarhan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="reveal-text group p-8 border border-[#9b87f5]/20 hover:border-[#9b87f5] bg-transparent transition-all duration-300 h-full">
              <h3 className="text-2xl font-sans mb-4 text-[#9b87f5]">{project.title}</h3>
              <p className="text-[#8E9196] mb-4">{project.description}</p>
              <p className="text-sm text-[#8E9196]/70">{project.tech}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
