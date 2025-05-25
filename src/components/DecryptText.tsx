
import React, { useState, useEffect, useRef } from 'react';

interface DecryptTextProps {
  targetText: string;
  className?: string;
  decryptionChars?: string;
  cycleSpeed?: number;
  revealSpeed?: number; 
}

const defaultChars = "!<>-_\\/[]{}—=+*^?#________";

const DecryptText: React.FC<DecryptTextProps> = ({
  targetText,
  className,
  decryptionChars = defaultChars,
  cycleSpeed = 50, // Speed of character cycling
  revealSpeed = 70, // Speed of revealing each character
}) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef<number | null>(null);
  const charRevealTimeoutsRef = useRef<number[]>([]);
  // Using an array of refs to track individual character revealed state
  const revealedCharsRef = useRef<boolean[]>(Array(targetText.length).fill(false));

  useEffect(() => {
    revealedCharsRef.current = Array(targetText.length).fill(false);
    // Initialize with random characters
    setDisplayText(
      targetText
        .split('')
        .map(() => decryptionChars[Math.floor(Math.random() * decryptionChars.length)])
        .join('')
    );

    const clearTimers = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      charRevealTimeoutsRef.current.forEach(clearTimeout);
      charRevealTimeoutsRef.current = [];
    };
    clearTimers(); // Clear any existing timers on re-render

    // Interval to scramble non-revealed characters
    intervalRef.current = window.setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split('')
          .map((char, index) => {
            if (revealedCharsRef.current[index]) {
              return targetText[index];
            }
            return decryptionChars[Math.floor(Math.random() * decryptionChars.length)];
          })
          .join('')
      );
    }, cycleSpeed);

    // Schedule reveal for each character
    targetText.split('').forEach((_, index) => {
      const timeoutId = window.setTimeout(() => {
        revealedCharsRef.current[index] = true;
        // Force a final update to ensure the correct character is set
        setDisplayText(currentText => {
            const newTextArray = currentText.split('');
            newTextArray[index] = targetText[index];
            // If this is the last character, clear interval
            if (revealedCharsRef.current.every(r => r)) {
                 if (intervalRef.current) clearInterval(intervalRef.current);
            }
            return newTextArray.join('');
        });

      }, (index + 1) * revealSpeed + 200); // Add a small initial delay before decryption starts
      charRevealTimeoutsRef.current.push(timeoutId);
    });

    return clearTimers; // Cleanup on unmount
  }, [targetText, decryptionChars, cycleSpeed, revealSpeed]);

  return <span className={className}>{displayText}</span>;
};

export default DecryptText;
