
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-8 px-12 flex justify-between items-center z-50 bg-[#1A1F2C]/80 backdrop-blur-sm">
      <button 
        onClick={() => scrollToSection('top')} 
        className="text-xl font-sans hover:text-[#9b87f5] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#9b87f5] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
      >
        FK.
      </button>
      <div className="flex gap-12">
        {['ABOUT', 'WORK', 'CONTACT'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())} 
            className="nav-link text-sm relative group overflow-hidden"
          >
            <span className="relative z-10 text-white group-hover:text-[#9b87f5] transition-colors duration-300">
              {item}
            </span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#9b87f5]/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
