
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#1A1F2C] z-[999] flex items-end justify-start p-12">
      <div className="text-[#9b87f5] font-mono text-xl">
        {progress.toString().padStart(3, '0')}%
      </div>
    </div>
  );
};

export default LoadingScreen;
