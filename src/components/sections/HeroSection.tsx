
import React, { useState, useEffect } from 'react';
import DecryptText from '../DecryptText';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const profileImageContainer = document.querySelector('.profile-image-container') as HTMLElement;
      if (profileImageContainer) {
        const rect = profileImageContainer.getBoundingClientRect();
        // Adjust center calculation if the image itself is offset within the container
        const imageElement = profileImageContainer.querySelector('.profile-image') as HTMLElement;
        const imageRect = imageElement ? imageElement.getBoundingClientRect() : rect;

        const centerX = imageRect.left + imageRect.width / 2;
        const centerY = imageRect.top + imageRect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.05;
        const deltaY = (e.clientY - centerY) * 0.05;
        
        setMousePosition({ x: deltaX, y: deltaY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Fade-in animations specific to Hero section elements
    const heroElements = document.querySelectorAll('.hero-fade-in');
    heroElements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.2 + 0.6}s`; // Start after DecryptText
    });


    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="top" className="min-h-screen flex items-center gap-12">
      <div className="flex-1">
        <h1 className="text-7xl font-sans font-bold mb-6">
          <DecryptText targetText="Farhan Khan" />
        </h1>
        <div className="hero-fade-in text-[#8E9196] text-xl mb-8 font-mono"> {/* Adjusted delay in useEffect */}
          Designer / Learner / Student
        </div>
        <p className="hero-fade-in max-w-xl text-[#8E9196] mb-12">
          Creating minimal and impactful digital experiences through thoughtful design
          and innovative solutions.
        </p>
        <div className="hero-fade-in">
          <button 
            onClick={scrollToContact}
            className="border border-[#9b87f5] px-8 py-3 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-colors"
          >
            Contact me
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div 
          className="profile-image-container relative transform transition-transform duration-300 ease-out"
          style={{ transform: `translateY(-30px)` }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            className="profile-image w-[26rem] h-[26rem] rounded-full overflow-hidden transition-transform duration-300 ease-out hover:scale-105"
            style={{ 
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              backgroundImage: 'url("/lovable-uploads/0b94a337-800e-46de-a5cf-0d98363f91d5.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className={`absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
            {/* Circle doodle */}
            <div className="absolute w-10 h-10 border-2 border-[#9b87f5] rounded-full -top-4 -left-4 animate-spin-medium"></div>
            {/* Squiggly line */}
            <div className="absolute w-16 h-1 bg-[#9b87f5] top-1/4 -right-8 animate-pulse-strong" 
              style={{clipPath: "path('M0,10 Q5,0 10,10 Q15,20 20,10 Q25,0 30,10 Q35,20 40,10')"}}></div>
            {/* Star doodle */}
            <div className="absolute bottom-10 -left-8 animate-bounce-medium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z" fill="#9b87f5" />
              </svg>
            </div>
            {/* Plus symbol */}
            <div className="absolute -bottom-6 right-10 animate-pulse-strong">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M5 12H19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Dots */}
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
  );
};

export default HeroSection;
