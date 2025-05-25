
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;

    if (!cursor || !cursorDot) {
      console.error('Custom cursor elements (.cursor or .cursor-dot) not found in the DOM. This might be why the cursor is not visible.');
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Ensure cursor and cursorDot are not null before accessing style (already checked above, but good practice)
      if (cursor) {
        // The -10px and -10px offsets are to center the 20px x 20px cursor ring around the mouse pointer
        cursor.style.transform = `translate(${clientX - 10}px, ${clientY - 10}px)`;
      }
      if (cursorDot) {
        // The -3px and -3px offsets are to center the 6px x 6px dot around the mouse pointer
        cursorDot.style.transform = `translate(${clientX - 3}px, ${clientY - 3}px)`;
      }
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
