
import { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import MeOutsideTechSection from '../components/sections/MeOutsideTechSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Define the projects array (could also be fetched or moved to a data file)
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

  useEffect(() => {
    // General reveal logic for sections
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        section.classList.add('reveal');
      });
    };

    // Use IntersectionObserver for scroll animations on sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          // Optionally unobserve after reveal to save resources
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal-section').forEach((section) => {
      observer.observe(section);
    });
    
    if (!isLoading) {
      revealSections(); // Ensure sections are revealed if loading is already complete
    }
    
    // Split text effect for relevant h2 titles
    // This could be a reusable hook or utility if used more widely
    const splitTextElements = document.querySelectorAll('.split-text');
    splitTextElements.forEach(el => {
        const text = el.textContent || "";
        el.innerHTML = ""; // Clear existing content
        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.setProperty('--char-index', index.toString());
            span.classList.add('split-char');
            el.appendChild(span);
        });
    });
    
    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-[#1A1F2C] text-white">
          <CustomCursor />
          <Navbar />
          
          <main className="pt-32 px-12 max-w-7xl mx-auto">
            <HeroSection scrollToContact={scrollToContact} />
            <AboutSection />
            <WorkSection projects={projects} />
            <MeOutsideTechSection />
            <ContactSection />
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
