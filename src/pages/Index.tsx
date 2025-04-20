
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';

const Index = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-32 px-12 max-w-7xl mx-auto">
        <div className="h-screen flex flex-col justify-center">
          <h1 className="fade-in text-7xl font-sans font-bold mb-6">
            Farhan Khan
          </h1>
          <div className="fade-in text-[#8E9196] text-xl mb-8 font-mono">
            Designer / Learner / Student
          </div>
          <p className="fade-in max-w-xl text-[#8E9196] mb-12">
            Creating minimal and impactful digital experiences through thoughtful design
            and innovative solutions.
          </p>
          <div className="fade-in">
            <button className="border border-[#9b87f5] px-8 py-3 text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
