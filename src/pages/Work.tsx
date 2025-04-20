
import { Card, CardContent } from "@/components/ui/card";

const Work = () => {
  const projects = [
    {
      title: "Career Counseling Platform",
      description: "A platform helping students find their career path",
      tech: "React, TypeScript, Tailwind"
    },
    {
      title: "Athlete Performance Tracker",
      description: "Real-time performance analytics for athletes",
      tech: "React, Firebase, D3.js"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform",
      tech: "Next.js, Supabase, Tailwind"
    },
    {
      title: "AI Learning Assistant",
      description: "Personalized learning companion",
      tech: "React, OpenAI, Node.js"
    }
  ];

  return (
    <div className="min-h-screen pt-32 px-12">
      <h1 className="fade-in text-4xl font-sans font-bold mb-12">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="fade-in bg-[#1A1F2C]/50 border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-all duration-300 hover:scale-[1.02]" 
            style={{ animationDelay: `${index * 0.2}s` }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-sans font-semibold mb-2 text-[#9b87f5]">{project.title}</h3>
              <p className="text-[#8E9196] mb-4">{project.description}</p>
              <p className="text-sm text-[#8E9196]/70">{project.tech}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
