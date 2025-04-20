
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';

const Index = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.2}s`;
    });

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-32 px-12 max-w-7xl mx-auto">
        <div className="h-screen flex flex-col justify-center">
          <h1 className="blur-reveal text-7xl font-sans font-bold mb-6">
            Farhan Khan
          </h1>
          <div className="fade-in text-[#8E9196] text-xl mb-8 font-mono">
            Designer / Learner / Student
          </div>
          <p className="fade-in max-w-xl text-[#8E9196] mb-12">
            Creating minimal and impactful digital experiences through thoughtful design
            and innovative solutions.
          </p>
          <div className="fade-in">
            <button className="border border-[#9b87f5] px-8 py-3 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-colors">
              View Portfolio
            </button>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="min-h-screen reveal-section">
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
        </div>

        {/* Me Outside Tech Section */}
        <div id="outside-tech" className="min-h-screen reveal-section">
          <h2 className="text-4xl font-sans font-bold mb-12 split-text">Me, Outside of Tech</h2>
          <div className="space-y-8 text-[#8E9196]">
            <div className="reveal-text flex items-start gap-6">
              <span className="text-3xl">🎬</span>
              <p className="text-lg leading-relaxed">
                Love movies that mess with time, tech, and the mind (minus the horror).
              </p>
            </div>
            <div className="reveal-text flex items-start gap-6">
              <span className="text-3xl">🎧</span>
              <p className="text-lg leading-relaxed">
                Big fan of Hindi music — my background playlist while coding.
              </p>
            </div>
            <div className="reveal-text flex items-start gap-6">
              <span className="text-3xl">👀</span>
              <p className="text-lg leading-relaxed">
                Always thinking of the next big thing — even if it starts as a random idea at 2 AM.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="min-h-screen reveal-section">
          <h2 className="text-4xl font-sans font-bold mb-12 split-text">Let's Connect</h2>
          <div className="grid grid-cols-2 gap-8">
            <a href="#" className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300">
              <span className="text-2xl block mb-2">LinkedIn</span>
              <span className="text-[#8E9196] group-hover:text-white transition-colors">Let's connect professionally</span>
            </a>
            <a href="#" className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300">
              <span className="text-2xl block mb-2">GitHub</span>
              <span className="text-[#8E9196] group-hover:text-white transition-colors">Check out my code</span>
            </a>
            <a href="#" className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300">
              <span className="text-2xl block mb-2">Twitter</span>
              <span className="text-[#8E9196] group-hover:text-white transition-colors">Follow my thoughts</span>
            </a>
            <a href="#" className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300">
              <span className="text-2xl block mb-2">Instagram</span>
              <span className="text-[#8E9196] group-hover:text-white transition-colors">See my visual side</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
