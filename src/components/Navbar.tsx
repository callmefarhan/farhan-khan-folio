
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={`relative transition-all duration-300 ease-in-out border-2 border-white rounded-full bg-transparent backdrop-blur-sm ${
          isHovered ? 'px-8 py-3' : 'px-6 py-3'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* FK. Logo - always visible */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-white font-sans hover:text-[#9b87f5] transition-colors duration-300 text-lg font-medium"
        >
          FK.
        </button>

        {/* Expanded menu items */}
        <div className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-4 flex gap-6 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}>
          {['about', 'work', 'outside-tech', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-sm text-white hover:text-[#9b87f5] transition-colors duration-300 whitespace-nowrap"
            >
              {item.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
