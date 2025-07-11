
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset to account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
      <div 
        className={`relative transition-all duration-300 ease-in-out border-2 border-black rounded-full bg-transparent backdrop-blur-sm ${
          isHovered ? 'px-10 py-4' : 'px-7 py-4'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* FK. Logo - always visible */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="text-black font-sans hover:text-gray-600 transition-colors duration-300 text-xl font-medium cursor-pointer"
          type="button"
        >
          FK.
        </button>

        {/* Left side menu items */}
        <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-5 flex gap-7 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}>
          {['about', 'work'].map((item) => (
            <button 
              key={item}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(item);
              }} 
              className="text-base text-black hover:text-gray-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
              type="button"
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Right side menu items */}
        <div className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-5 flex gap-7 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}>
          {['outside-tech', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection(item);
              }} 
              className="text-base text-black hover:text-gray-600 transition-colors duration-300 whitespace-nowrap cursor-pointer"
              type="button"
            >
              {item.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Invisible hover area to prevent menu retraction */}
        <div 
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered ? 'w-[336px] h-[72px] -left-[168px] -top-[18px]' : 'w-full h-full'
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
