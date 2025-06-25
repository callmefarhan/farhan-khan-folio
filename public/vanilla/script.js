
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    // Custom cursor functionality
    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        // Cursor hover effects
        document.querySelectorAll('a, button, .hire-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
            });
        });
    }

    // Initialize split text effects
    function initSplitText() {
        const splitTextElements = document.querySelectorAll('.split-text');
        
        splitTextElements.forEach((element, index) => {
            const text = element.textContent;
            element.setAttribute('data-text', text);
            
            // Add delay for staggered animation
            element.style.animationDelay = `${index * 0.2}s`;
        });
    }

    // Initialize all effects
    initSplitText();

    console.log('Vanilla JavaScript loaded for portfolio.');
});
