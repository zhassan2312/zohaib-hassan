document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('primaryButton');

    let boundingRect = button.getBoundingClientRect();

    window.addEventListener('resize', () => {
        boundingRect = button.getBoundingClientRect();
    });

    button.addEventListener('mousemove', (e) => {
        const mousePosX = e.pageX - boundingRect.left;
        const mousePosY = e.pageY - boundingRect.top;

        gsap.to(button, {
            x: (mousePosX - boundingRect.width / 2) * 0.4,
            y: (mousePosY - boundingRect.height / 2) * 0.4,
            stagger: -0.1,
            duration: 0.8,
            ease: 'power3.out',
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            stagger: -0.1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
        });
    });


    button.addEventListener('mouseenter', () => {
        gsap.to(button.querySelector('::before'), {
            scale: 1,
            duration: 0.3,
            ease: 'power3.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button.querySelector('::before'), {
            scale: 0,
            duration: 0.3,
            ease: 'power3.out'
        });
    });
});