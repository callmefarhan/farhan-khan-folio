
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');

    if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        // Optional: Add interaction states for cursor (e.g., on hover over links)
        // document.querySelectorAll('a, button').forEach(el => {
        //     el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        //     el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        // });
    } else {
        console.warn('Custom cursor elements not found.');
    }

    console.log('Vanilla JavaScript loaded for portfolio.');
});

