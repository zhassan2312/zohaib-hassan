document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const loaderText = document.getElementById('loaderText');

    // Function to type out text
    function typeText(element, text, duration, onComplete) {
        let index = 0;
        const interval = duration / text.length;
        const typing = setInterval(() => {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(typing);
                if (onComplete) onComplete();
            }
        }, interval);
    }

    // Initial text animation
    loaderText.textContent = "";
    typeText(loaderText, "hello,", 600, () => {
        gsap.to(loaderText, {
            duration: 0.5,
            opacity: 0,
            delay: 0.5,
            onComplete: () => {
                loaderText.textContent = "";
                gsap.to(loaderText, {
                    duration: 0,
                    opacity: 1,
                    onComplete: () => {
                        loaderText.textContent = "welcome";
                        gsap.to(loaderText, {
                            duration: 0.2,
                            opacity: 0,
                            delay: 0.1,
                            onComplete: () => {
                                loaderText.textContent = "";
                                gsap.to(loaderText, {
                                    duration: 0,
                                    opacity: 1,
                                    onComplete: () => {
                                        loaderText.textContent = "to";
                                        gsap.to(loaderText, {
                                            duration: 0.2,
                                            opacity: 0,
                                            delay: 0.1,
                                            onComplete: () => {
                                                loaderText.textContent = "";
                                                gsap.to(loaderText, {
                                                    duration: 0,
                                                    opacity: 1,
                                                    onComplete: () => {
                                                        
                                                                        loaderText.textContent = "Code x Design";
                                                                        gsap.to(loaderText, {
                                                                            duration: 0.2,
                                                                            opacity: 0,
                                                                            delay: 0.1,
                                                                            onComplete: () => {
                                                                                loaderText.textContent = "";
                                                                                gsap.to(loaderText, {
                                                                                    duration: 0,
                                                                                    opacity: 1,
                                                                                    onComplete: () => {
                                                                                        loaderText.textContent = "By Zohaib";
                                                                                        gsap.to(loaderText, {
                                                                                            duration: 0.2,
                                                                                            opacity: 0,
                                                                                            delay: 0.1,
                                                                                            onComplete: () => {
                                                                                                // Collapse loader to the left and reveal main content from the right
                                                                                                gsap.to(loader, {
                                                                                                    duration: 0.5,
                                                                                                    x: "-100%",
                                                                                                    ease: "power2.inOut",
                                                                                                });
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    
    });
});