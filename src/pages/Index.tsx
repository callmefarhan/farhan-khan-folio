import { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import { Card } from '@/components/ui/card';
import { Linkedin, Github, Instagram, Palette } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Define social links
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      link: "https://www.linkedin.com/in/farhan-khan-00817a296/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-8 w-8" />,
      link: "https://github.com/callmefarhan",
      color: "hover:text-gray-600"
    },
    {
      name: "Behance",
      icon: <Palette className="h-8 w-8" />,
      link: "https://behance.net/yourusername",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      link: "https://www.instagram.com/iiamfarhankhann/?next=%2F",
      color: "hover:text-pink-500"
    }
  ];

  // Graphic design works for bento grid
  const designWorks = [
    {
      title: "Sleepy Zoro Character Design",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "large",
    },
    {
      title: "Coffee & Camera Setup",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "medium",
    },
    {
      title: "Typography Design",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "medium",
    },
    {
      title: "Synergy Brand Design",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "large",
    },
    {
      title: "Ambient Car Wallpaper",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "small",
    },
    {
      title: "Japanese Character Art",
      image: "/lovable-uploads/bc9fab5d-225f-4a18-8484-84418dbb2928.png",
      size: "medium",
    }
  ];

  useEffect(() => {
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
      revealSections();
    }
    
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen bg-white text-black scroll-container">
          <CustomCursor />
          <Navbar />
          
          {/* Hero Section with background grid */}
          <main className="pt-32 px-12 max-w-7xl mx-auto">
            <section id="top" className="min-h-screen flex items-center gap-12 relative">
              {/* Background grid for hero section */}
              <div 
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              
              <div className="flex-1 relative z-10">
                <h1 className="blur-reveal text-7xl font-serif italic font-normal mb-6">
                  Farhan Khan
                </h1>
                <div className="fade-in text-gray-600 text-xl mb-8 font-mono">
                  Graphics Designer / UI & UX
                </div>
                <p className="fade-in max-w-xl text-gray-600 mb-12">
                  Creating minimal and impactful digital experiences through thoughtful design
                  and innovative solutions.
                </p>
                <div className="fade-in">
                  <button className="hire-btn px-8 py-3 relative overflow-hidden">
                    <span className="hire-btn-text gradient-text font-semibold">Hire me!</span>
                  </button>
                </div>
              </div>

              {/* Profile Image Section */}
              <div className="flex-1 flex justify-center items-center relative z-10">
                <div 
                  className="profile-image-container relative"
                  style={{ transform: 'translateY(-2rem)' }}
                >
                  <div 
                    className="profile-image w-[28rem] h-[28rem] rounded-full overflow-hidden transition-transform duration-300 ease-out hover:scale-105 relative z-20"
                    style={{ 
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      backgroundImage: 'url("/lovable-uploads/0b94a337-800e-46de-a5cf-0d98363f91d5.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* About Section with background grid */}
            <section id="about" className="min-h-screen reveal-section py-24 relative">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-12">About Me</h2>
                <div className="space-y-6 text-gray-600">
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
            </section>

            {/* Work Section - Bento Grid with background grid */}
            <section id="work" className="min-h-screen reveal-section py-24 relative">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-12">My Work</h2>
                
                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
                  {designWorks.map((work, index) => (
                    <Card 
                      key={index} 
                      className={`reveal-text group relative overflow-hidden border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg ${
                        work.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                        work.size === 'medium' ? 'md:col-span-1 md:row-span-1' : 
                        'md:col-span-1 md:row-span-1'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="h-full relative">
                        <img 
                          src={work.image} 
                          alt={work.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                          <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-serif font-semibold">
                              {work.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Me Outside Tech Section with background grid */}
            <section id="outside-tech" className="min-h-screen reveal-section py-24 relative">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-12">Me, Outside of Tech</h2>
                <div className="space-y-8 text-gray-600">
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
            </section>

            {/* Contact Section with background grid */}
            <section id="contact" className="min-h-screen reveal-section py-24 relative">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-12">Let's Connect</h2>
                <div className="flex flex-col justify-center items-center space-y-8">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={social.name}
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`reveal-text flex flex-col items-center space-y-2 text-black ${social.color} transition-all duration-300 hover:transform hover:translate-y-[-4px]`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {social.icon}
                      <span className="text-sm font-mono">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
