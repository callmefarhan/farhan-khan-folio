
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen reveal-section py-24">
      <h2 className="text-4xl font-sans font-bold mb-12 split-text">Let's Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a 
          href="https://www.linkedin.com/in/farhan-khan-00817a296/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
        >
          <span className="text-2xl block mb-2">LinkedIn</span>
          <span className="text-[#8E9196] group-hover:text-white transition-colors">Let's connect professionally</span>
        </a>
        <a 
          href="https://github.com/callmefarhan" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
        >
          <span className="text-2xl block mb-2">GitHub</span>
          <span className="text-[#8E9196] group-hover:text-white transition-colors">Check out my code</span>
        </a>
        <a 
          href="https://x.com/FarhanK42363" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
        >
          <span className="text-2xl block mb-2">Twitter</span>
          <span className="text-[#8E9196] group-hover:text-white transition-colors">Follow my thoughts</span>
        </a>
        <a 
          href="https://www.instagram.com/iiamfarhankhann/?next=%2F" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="reveal-text group p-8 border border-[#9b87f5] hover:bg-[#9b87f5] transition-all duration-300"
        >
          <span className="text-2xl block mb-2">Instagram</span>
          <span className="text-[#8E9196] group-hover:text-white transition-colors">See my visual side</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
