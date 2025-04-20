
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full py-8 px-12 flex justify-between items-center z-50 bg-[#1A1F2C]/80 backdrop-blur-sm">
      <Link to="/" className="text-xl font-sans">FK.</Link>
      <div className="flex gap-12">
        <Link to="/about" className="nav-link text-sm hover:text-[#9b87f5] transition-colors">ABOUT</Link>
        <Link to="/work" className="nav-link text-sm hover:text-[#9b87f5] transition-colors">WORK</Link>
        <Link to="/contact" className="nav-link text-sm hover:text-[#9b87f5] transition-colors">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
