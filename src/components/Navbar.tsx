
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-8 px-12 flex justify-between items-center z-50 bg-[#1A1F2C]/80 backdrop-blur-sm">
      <button onClick={() => scrollToSection('top')} className="text-xl font-sans">FK.</button>
      <div className="flex gap-12">
        <button onClick={() => scrollToSection('about')} className="nav-link text-sm hover:text-[#9b87f5] transition-colors">ABOUT</button>
        <button onClick={() => scrollToSection('work')} className="nav-link text-sm hover:text-[#9b87f5] transition-colors">WORK</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link text-sm hover:text-[#9b87f5] transition-colors">CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;
