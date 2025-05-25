
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen reveal-section py-24">
      <h2 className="text-4xl font-sans font-bold mb-12 split-text">About Me</h2>
      <div className="space-y-6 text-[#8E9196]">
        <p className="text-lg leading-relaxed reveal-text">
          I'm someone who believes that meaningful tech starts with purpose.
          Whether it's crafting a web app, optimizing data flow, or reimagining everyday experiences with AI, 
          I enjoy turning complex ideas into simple, effective solutions.
        </p>
        <p className="text-lg leading-relaxed reveal-text">
          I've worked on projects ranging from career counseling platforms to athlete performance tracking apps — 
          all with a deep interest in how users interact with technology.
        </p>
        <p className="text-lg leading-relaxed reveal-text">
          I love learning new tech stacks, experimenting with design, and occasionally diving into the world of 
          social media, networking, and storytelling.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
