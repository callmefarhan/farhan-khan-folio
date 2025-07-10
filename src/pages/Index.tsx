import { useEffect, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';
import { Card } from '@/components/ui/card';
import { Linkedin, Github, Twitter, Instagram, Upload, X } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

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
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      link: "https://x.com/FarhanK42363",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      link: "https://www.instagram.com/iiamfarhankhann/?next=%2F",
      color: "hover:text-pink-500"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setUploadedImages(prev => [...prev, e.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

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
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 
                    'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 0 0'
                }}
              />
              
              <div className="flex-1 relative z-10">
                <h1 className="blur-reveal text-7xl font-serif italic font-normal mb-6 split-text">
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

              {/* Profile Image Section with doodles behind */}
              <div className="flex-1 flex justify-center items-center relative z-10">
                <div 
                  className="profile-image-container relative"
                  style={{ transform: 'translateY(-2rem)' }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Animated doodles positioned behind the profile image */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
                    {/* Circle doodle */}
                    <div 
                      className={`absolute w-10 h-10 border-2 border-black rounded-full transition-all duration-600 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      style={{ 
                        '--slide-x': '-6rem', 
                        '--slide-y': '-6rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0
                      } as React.CSSProperties}
                    ></div>
                    
                    {/* Squiggly line */}
                    <div 
                      className={`absolute w-16 h-1 bg-black transition-all duration-700 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      style={{ 
                        '--slide-x': '10rem', 
                        '--slide-y': '-4rem',
                        clipPath: "path('M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10')",
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.1s'
                      } as React.CSSProperties}
                    ></div>
                    
                    {/* Star doodle */}
                    <div 
                      className={`absolute transition-all duration-600 ${
                        isHovering ? 'animate-doodle-bounce-slide' : ''
                      }`}
                      style={{ 
                        '--slide-x': '-8rem', 
                        '--slide-y': '8rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.2s'
                      } as React.CSSProperties}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="#000000" />
                      </svg>
                    </div>
                    
                    {/* Plus symbol */}
                    <div 
                      className={`absolute transition-all duration-600 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      style={{ 
                        '--slide-x': '8rem', 
                        '--slide-y': '10rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.15s'
                      } as React.CSSProperties}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {/* Dots */}
                    <div 
                      className={`absolute flex space-x-1 transition-all duration-700 ${
                        isHovering ? 'animate-doodle-bounce-slide' : ''
                      }`}
                      style={{ 
                        '--slide-x': '6rem', 
                        '--slide-y': '-8rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.25s'
                      } as React.CSSProperties}
                    >
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>

                    {/* Floating Triangle */}
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 20 20" 
                      className={`absolute transition-all duration-800 ${
                        isHovering ? 'animate-doodle-spin-slide' : ''
                      }`}
                      style={{ 
                        '--slide-x': '4rem', 
                        '--slide-y': '-10rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.3s'
                      } as React.CSSProperties}
                    >
                      <polygon points="10,0 20,20 0,20" fill="#000000" />
                    </svg>

                    {/* Pulsing Heart */}
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      className={`absolute transition-all duration-600 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      style={{ 
                        '--slide-x': '-10rem', 
                        '--slide-y': '2rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.35s'
                      } as React.CSSProperties}
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#000000"/>
                    </svg>

                    {/* Sparkles */}
                    <div 
                      className={`absolute w-10 h-10 transition-all duration-600 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      style={{ 
                        '--slide-x': '6rem', 
                        '--slide-y': '6rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.4s'
                      } as React.CSSProperties}
                    >
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-0 left-2"></div>
                      <div className="w-2 h-2 bg-black rounded-full absolute top-3 left-5"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full absolute top-5 left-1"></div>
                    </div>

                    {/* Small rotating square */}
                    <div 
                      className={`absolute w-4 h-4 bg-black transition-all duration-700 ${
                        isHovering ? 'animate-doodle-spin-slide' : ''
                      }`}
                      style={{ 
                        '--slide-x': '-6rem', 
                        '--slide-y': '6rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.45s'
                      } as React.CSSProperties}
                    ></div>

                    {/* Zigzag line */}
                    <svg 
                      width="40" 
                      height="20" 
                      className={`absolute transition-all duration-800 ${
                        isHovering ? 'animate-doodle-slide-out' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ 
                        '--slide-x': '-8rem', 
                        '--slide-y': '-2rem',
                        transform: 'translate(0, 0) scale(0.5)',
                        opacity: 0,
                        animationDelay: '0.5s'
                      } as React.CSSProperties}
                    >
                      <path d="M0 10 Q5 0, 10 10 T20 10 Q25 0, 30 10 T40 10" stroke="#000000" strokeWidth="2" fill="transparent"/>
                    </svg>
                  </div>

                  {/* Main profile image */}
                  <div 
                    className="profile-image w-[28rem] h-[28rem] rounded-full overflow-hidden transition-transform duration-300 ease-out hover:scale-105 relative z-20"
                    style={{ 
                      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                      backgroundImage: 'url("/lovable-uploads/0b94a337-800e-46de-a5cf-0d98363f91d5.png")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-serif font-bold mb-12 split-text">About Me</h2>
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
            </section>

            {/* Work Section - Replace with Interactive Gallery */}
            <section id="work" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-serif font-bold mb-12 split-text">My Work</h2>
              
              {/* Upload Area */}
              <div className="mb-12">
                <label htmlFor="image-upload" className="block">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                    <p className="text-lg font-medium text-gray-700 mb-2">Upload your work</p>
                    <p className="text-gray-500">Drag and drop images or click to select</p>
                  </div>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Gallery Grid */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="reveal-text group relative">
                      <Card className="overflow-hidden border border-gray-200 hover:border-black transition-all duration-300">
                        <div className="relative">
                          <img 
                            src={image} 
                            alt={`Uploaded work ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              )}

              {/* Empty State */}
              {uploadedImages.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                  <p>No work uploaded yet. Start by uploading your first image!</p>
                </div>
              )}
            </section>

            {/* Me Outside Tech Section */}
            <section id="outside-tech" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-serif font-bold mb-12 split-text">Me, Outside of Tech</h2>
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
            </section>

            {/* Contact Section with horizontal icons and no bounce */}
            <section id="contact" className="min-h-screen reveal-section py-24">
              <h2 className="text-4xl font-serif font-bold mb-12 split-text">Let's Connect</h2>
              <div className="flex justify-center items-center space-x-12">
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
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
