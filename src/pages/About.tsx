
const About = () => {
  return (
    <div className="min-h-screen pt-32 px-12 max-w-3xl mx-auto">
      <h1 className="fade-in text-4xl font-sans font-bold mb-12">About Me</h1>
      <div className="space-y-6 text-[#8E9196]">
        <p className="fade-in text-lg leading-relaxed" style={{ animationDelay: "0.2s" }}>
          I'm someone who believes that meaningful tech starts with purpose.
          Whether it's crafting a web app, optimizing data flow, or reimagining everyday experiences with AI, 
          I enjoy turning complex ideas into simple, effective solutions.
        </p>
        <p className="fade-in text-lg leading-relaxed" style={{ animationDelay: "0.4s" }}>
          I've worked on projects ranging from career counseling platforms to athlete performance tracking apps — 
          all with a deep interest in how users interact with technology.
        </p>
        <p className="fade-in text-lg leading-relaxed" style={{ animationDelay: "0.6s" }}>
          I love learning new tech stacks, experimenting with design, and occasionally diving into the world of 
          social media, networking, and storytelling.
        </p>
      </div>
    </div>
  );
};

export default About;
