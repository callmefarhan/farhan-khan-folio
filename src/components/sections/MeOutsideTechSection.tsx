
import React from 'react';

const MeOutsideTechSection: React.FC = () => {
  return (
    <section id="outside-tech" className="min-h-screen reveal-section py-24">
      <h2 className="text-4xl font-sans font-bold mb-12 split-text">Me, Outside of Tech</h2>
      <div className="space-y-8 text-[#8E9196]">
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
  );
};

export default MeOutsideTechSection;
