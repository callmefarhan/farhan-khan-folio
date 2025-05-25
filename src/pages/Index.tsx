
import { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import { Card } from '@/components/ui/card';
import DecryptText from '../components/DecryptText'; // Import the new component

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Define the projects array
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
    // Make sure all sections are visible on load
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        section.classList.add('reveal');
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const profileImage = document.querySelector('.profile-image') as HTMLElement;
      if (profileImage) {
        const rect = profileImage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Make movement more subtle by reducing the factor from 0.1 to 0.05
        const deltaX = (e.clientX - centerX) * 0.05;
        const deltaY = (e.clientY - centerY) * 0.05;
        
        setMousePosition({ x: deltaX, y: deltaY });
      }
    };

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.2}s`;
    });

    // Use IntersectionObserver for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('.reveal-section').forEach((section) => {
      observer.observe(section);
    });

    document.addEventListener('mousemove', handleMouseMove);
    
    // If loading is complete, reveal all sections
    if (!isLoading) {
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach(section => {
        section.classList.add('reveal');
      });
    }
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
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
          
          {/* Hero Section */}
          <main className="pt-32 px-12 max-w-7xl mx-auto">
            <section id="top" className="min-h-screen flex items-center gap-12">
              <div className="flex-1">
                {/* Removed blur-reveal from h1, using DecryptText instead */}
                <h1 className="text-7xl font-sans font-bold mb-6">
                  <DecryptText targetText="Farhan Khan" />
                </h1>
                <div className="fade-in text-[#8E9196] text-xl mb-8 font-mono" style={{ animationDelay: '0.8s' }}> {/* Adjusted delay due to DecryptText */}
                  Designer / Learner / Student
                </div>
                <p className="fade-in max-w-xl text-[#8E9196] mb-12" style={{ animationDelay: '1s' }}>
                  Creating minimal and impactful digital experiences through thoughtful design
                  and innovative solutions.
                </p>
                <div className="fade-in" style={{ animationDelay: '1.2s' }}>
                  <button 
                    onClick={scrollToContact}
                    className="border border-[#9b87f5] px-8 py-3 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-colors"
                  >
                    Contact me
                  </button>
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center"> {/* Container for profile pic */}
                <div 
                  className="profile-image-container relative transform transition-transform duration-300 ease-out" // Added transform for translateY
                  style={{ transform: `translateY(-30px)` }} // Align slightly upper
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Main profile image with smooth transition - increased size */}
                  <div 
                    className="profile-image w-[26rem] h-[26rem] rounded-full overflow-hidden transition-transform duration-300 ease-out hover:scale-105" // Increased from w-96 h-96
                    style={{ 
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      backgroundImage: 'url("/lovable-uploads/0b94a337-800e-46de-a5cf-0d98363f91d5.png")', // Keeping the existing image path as per last update
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  {/* Animated doodles that appear on hover - enhanced animations */}
                  <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Circle doodle - faster spin */}
                    <div className="absolute w-10 h-10 border-2 border-[#9b87f5] rounded-full -top-4 -left-4 animate-spin-medium"></div>
                    
                    {/* Squiggly line - stronger pulse */}
                    <div className="absolute w-16 h-1 bg-[#9b87f5] top-1/4 -right-8 animate-pulse-strong" 
                      style={{clipPath: "path('M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10')"}}></div>
                    
                    {/* Star doodle - bouncier */}
                    <div className="absolute bottom-10 -left-8 animate-bounce-medium">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="#9b87f5" />
                      </svg>
                    </div>
                    
                    {/* Plus symbol - stronger pulse */}
                    <div className="absolute -bottom-6 right-10 animate-pulse-strong">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {/* Dots - bouncier */}
                    <div className="absolute top-10 -right-6 flex space-x-1 animate-bounce-medium">
                      <div className="w-2 h-2 bg-[#9b87f5] rounded-full"></div>
                      <div className="w-2 h-2 bg-[#9b87f5] rounded-full" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-[#9b87f5] rounded-full" style={{animationDelay: '0.2s'}}></div>
                    </div>

                    {/* New Doodle: Triangle */}
                    <div className="absolute w-8 h-8 -bottom-2 -left-12 animate-gentle-rotate">
                       <svg viewBox="0 0 100 100" fill="#9b87f5" xmlns="http://www.w3.org/2000/svg">
                         <polygon points="50,10 90,90 10,90"/>
                       </svg>
                    </div>

                    {/* New Doodle: Sparkle */}
                    <div className="absolute w-6 h-6 top-0 right-0 animate-sparkle-burst" style={{transformOrigin: 'center'}}>
                      <svg viewBox="0 0 24 24" fill="#9b87f5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.2195 7.78049L19 9L13.2195 10.2195L12 16L10.7805 10.2195L5 9L10.7805 7.78049L12 2Z"/>
                        <path d="M19 2L17.6098 5.39024L22 6.5L17.6098 7.60976L19 11L20.3902 7.60976L19 2Z" opacity="0.7"/>
                        <path d="M5 13L6.39024 16.3902L2 17.5L6.39024 18.6098L5 22L3.60976 18.6098L5 13Z" opacity="0.7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
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

            {/* Work Section */}
            <section id="work" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-sans font-bold mb-12 split-text">Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <a 
                    key={index} 
                    href="https://github.com/callmefarhan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block" // Added block to make the whole card clickable, or you can wrap just the title.
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

            {/* Me Outside Tech Section */}
            <section id="outside-tech" className="min-h-screen reveal-section py-24">
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
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-sans font-bold mb-12 split-text">Let's Connect</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a 
                  href="https://www.linkedin.com/in/farhan-khan-00817a296/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">LinkedIn</span>
                  <span className="text-[#8E9196] group-hover:text-white transition-colors">Let's connect professionally</span>
                </a>
                <a 
                  href="https://github.com/callmefarhan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">GitHub</span>
                  <span className="text-[#8E9196] group-hover:text-white transition-colors">Check out my code</span>
                </a>
                <a 
                  href="https://x.com/FarhanK42363" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">Twitter</span>
                  <span className="text-[#8E9196] group-hover:text-white transition-colors">Follow my thoughts</span>
                </a>
                <a 
                  href="https://www.instagram.com/iiamfarhankhann/?next=%2F" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
                >
                  <span className="text-2xl block mb-2">Instagram</span>
                  <span className="text-[#8E9196] group-hover:text-white transition-colors">See my visual side</span>
                </a>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
