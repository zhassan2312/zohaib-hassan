document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('buttonWrapper');
    const wrapper = button.parentElement;

    let boundingRect = wrapper.getBoundingClientRect();

    window.addEventListener('resize', () => {
        boundingRect = wrapper.getBoundingClientRect();
    });

    wrapper.addEventListener('mousemove', (e) => {
        const mousePosX = e.pageX - boundingRect.left;
        const mousePosY = e.pageY - boundingRect.top;

        gsap.to(wrapper, {
            x: (mousePosX - boundingRect.width / 2) * 0.4,
            y: (mousePosY - boundingRect.height / 2) * 0.4,
            stagger: -0.1,
            duration: 0.8,
            ease: 'power3.out',
        });
    });

    wrapper.addEventListener('mouseleave', () => {
        gsap.to(wrapper, {
            x: 0,
            y: 0,
            stagger: -0.1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
        });
    });
});