const buttons = document.querySelectorAll('.primaryButton','#horizontalHeader button','#menu img');

buttons.forEach(button => {
    const buttonText = button.querySelector('span'); // Assuming the text is inside a <span> element

    let boundingRect = button.getBoundingClientRect();

    window.addEventListener('resize', () => {
        boundingRect = button.getBoundingClientRect();
    });

    button.addEventListener('mousemove', (e) => {
        const mousePosX = e.clientX - boundingRect.left;
        const mousePosY = e.clientY - boundingRect.top;

        const offsetX = (mousePosX - boundingRect.width / 2) * 0.4;
        const offsetY = (mousePosY - boundingRect.height / 2) * 0.4;

        gsap.to(button, {
            x: offsetX,
            y: offsetY,
            stagger: -0.1,
            duration: 0.8,
            ease: 'power3.out',
        });

        gsap.to(buttonText, {
            x: offsetX * 0.5, // Adjusted to move less than the button itself
            y: offsetY * 0.5, // Adjusted to move less than the button itself
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

        gsap.to(buttonText, {
            x: 0,
            y: 0,
            stagger: -0.1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
        });
    });

});

const contactButtons = document.querySelectorAll('.contactButton1, .contactButton2','.contact-link-item','#menu img','#horizontalHeader button','.next-button','.option-button');

contactButtons.forEach((button) => {
    const text = button.querySelector('span');
    const textColor=text.style.color;

    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Button magnetic effect
        gsap.to(button, {
            duration: 0.3,
            x: x * 0.1,
            y: y * 0.1,
            stagger: -0.1,
            ease: "power2.out"
        });

        // Text magnetic effect
        gsap.to(text, {
            duration: 0.3,
            x: x *0.4,
            y: y *0.4,
            color: "white",
            stagger: -0.1,
            ease: "power2.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        // Reset button position
        gsap.to(button, {
            duration: 0.5,
            x: 0,
            y: 0,
            ease: "elastic.out(1, 0.5)"
        });

        // Reset text position
        gsap.to(text, {
            duration: 0.5,
            x: 0,
            y: 0,
            color: textColor,
            ease: "elastic.out(1, 0.5)"
        });
    });
});


const optionButtons = document.querySelectorAll('.option-button');

    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'selected' class from all buttons
            optionButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            this.classList.add('selected');
        });
    });