
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cursor.style.transform = `translate(${clientX - 10}px, ${clientY - 10}px)`;
      cursorDot.style.transform = `translate(${clientX - 2}px, ${clientY - 2}px)`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor" />
      <div className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
