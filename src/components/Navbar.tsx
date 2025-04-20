
import { useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Apply animation to nav links when component mounts
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('animated');
      }, index * 150);
    });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full py-8 px-12 flex justify-between items-center z-50 bg-[#1A1F2C]/80 backdrop-blur-sm">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="text-xl font-sans hover:text-[#9b87f5] transition-all duration-300 relative nav-glow"
      >
        FK.
      </button>
      <div className="flex gap-12">
        {['about', 'work', 'outside-tech', 'contact'].map((item, index) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item)} 
            className="nav-link text-sm relative group overflow-hidden"
          >
            <span className="relative z-10 text-white group-hover:text-[#9b87f5] transition-colors duration-300">
              {item.toUpperCase().replace('-', ' ')}
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9b87f5]/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
