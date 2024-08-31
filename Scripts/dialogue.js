const contactButton = document.querySelector('.contactButton2');
const talkButton = document.querySelector('.buttonWrapper1');
const dialogBox = document.getElementById('dialogBox');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');

const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showStep(stepIndex) {
    gsap.to(steps, { display: 'none', opacity: 0, duration: 0.5 });
    gsap.to(steps[stepIndex], { display: 'block', opacity: 1, duration: 0.5, onComplete: () => {
        // Animate text elements within the step
        const textElements = steps[stepIndex].querySelectorAll('h2, p, .input-container, .option-buttons, .option-button');
        textElements.forEach((el, index) => {
            gsap.fromTo(el, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: index * 0.1 });
        });
    }});
}

contactButton.addEventListener('click', function() {
    gsap.to([overlay, dialogBox], {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1 // Stagger the animations slightly
    });
    showStep(0); // Show the first step
});
talkButton.addEventListener('click', function() {
    gsap.to([overlay, dialogBox], {
        display: 'block',
        opacity: 1,
        duration: 0.5,
        ease: 'power1.out',
        stagger: 0.1 // Stagger the animations slightly
    });
    showStep(0); // Show the first step
});

closeButton.addEventListener('click', function() {
    gsap.to([overlay, dialogBox], {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out',
        onComplete: function() {
            overlay.style.display = 'none';
            dialogBox.style.display = 'none';
        }
    });
});

document.getElementById('nextToStep2').addEventListener('click', function() {
    showStep(1);
});

document.getElementById('nextToStep3').addEventListener('click', function() {
    showStep(2);
});

document.getElementById('nextToStep4').addEventListener('click', function() {
    showStep(3);
});

document.getElementById('nextToStep5').addEventListener('click', function() {
    showStep(4);
});

document.getElementById('submitForm').addEventListener('click', function() {
    showStep(5);
});