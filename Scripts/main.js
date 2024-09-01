let projects = [
    {
        video: './Assets/Portfolio/Kolt Landing page.mp4',
        title: 'Kolt Landing Page',
        type: 'Branding'
    },
    {
        video: './Assets/Portfolio/reddit (2).mp4',
        title: 'Reddit Redesign',
        type: 'UX Design'
    },
    {
        video: './Assets/Portfolio/Turismo Dashboards.mp4',
        title: 'Turismo Dashboards',
        type: 'UI Design'
    },
    {
        video: './Assets/Portfolio/twitch redesign.mp4',
        title: 'Twitch Redesign',
        type: 'UX Design'
    },
    {
        video: './Assets/Portfolio/UXRKhan Portfolio.mp4',
        title: 'UXR Khan Portfolio',
        type: 'Web Design & Development'
    },
    {
        video: './Assets/Portfolio/Almaida food app.mp4',
        title: 'Almaida Food App',
        type: 'App Design'
    },
    {
        video: './Assets/Portfolio/ChemTech.mp4',
        title: 'ChemTech',
        type: 'App Design'
    },
    {
        video: './Assets/Portfolio/slack redesign.mp4',
        title: 'Slack Redesign',
        type: 'UX Design'
    },
    {
        video: './Assets/Portfolio/Plants animation websites.mp4',
        title: 'Plantate',
        type: 'Interaction Design'
    },
    {
        video: './Assets/Portfolio/Codexcue.mp4',
        title: 'Codexcue Landing Page',
        type: 'Interaction Design and development'
    },
    {
        video: './Assets/Portfolio/Ebay redesign.mp4',
        title: 'Ebay Redesign',
        type: 'UX Design'
    },
];

let projectHTML = `
    <div id="horizontalHeader">
        <button>reset</button>
        <h1 data-text="Code X Design">Code X Design</h1>
        <p data-text="By Zohaib Hassan">By Zohaib Hassan</p>
    </div>
`;
let portfolioSlider = document.querySelector('.portfolioSlider');

projects.forEach((project) => {
    projectHTML += `
        <div id="portfolio">
            <h1 id="portfolioHeading">${project.title}</h1>
            <video rel="preload" id="portfolioVideo" src="${project.video}" type="video/mp4"></video>
            <p id="portfolioType">${project.type}</p>
        </div>
    `;
});

portfolioSlider.innerHTML = projectHTML;


const portfolioVideos = document.querySelectorAll("#portfolioVideo");

portfolioVideos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0; // Reset video to start
    });
});


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

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
// Vertical scrolling until page1
ScrollTrigger.create({
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: "#main",
});
// Horizontal scrolling for horizontalSection
const sliderWrapper = document.getElementById("sliderWrapper");
const slider = document.getElementById('slider');
const sliderItems = sliderWrapper.children;
const totalWidth = slider.scrollWidth;
gsap.to(sliderWrapper, {
    x: () => -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: "#horizontalSection",
        scroller: "#main",
        scrub: 4,
        pin: true,
        start: "top top",
        end: () => "+=" + (totalWidth - window.innerWidth),
        onUpdate: self => {
            const progress = self.progress * 100;
            document.querySelector("#progressBar").style.width = progress + "%";
            Array.from(sliderItems).forEach(item => {
                const scale = 1 - (self.progress * 0.2);
                const bounce = Math.sin(self.progress * Math.PI * 8) * 0.1;
                gsap.set(item, {
                    scale: scale + bounce,
                    y: bounce * 20
                });
            });
        }
    }
});
// Horizontal scrolling for testimonialsSection
const testimonialsWrapper = document.querySelector(".testimonialsSection #sliderWrapper");
const testimonialsSlider = document.querySelector(".testimonialsSection #slider");
const testimonialsItems = testimonialsWrapper.children;
const testimonialsTotalWidth = testimonialsSlider.scrollWidth;
gsap.to(testimonialsWrapper, {
    x: () => -(testimonialsTotalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".testimonialsSection",
        scroller: "#main",
        scrub: 4,
        pin: true,
        start: "top top",
        end: () => "+=" + (testimonialsTotalWidth - window.innerWidth),
        onUpdate: self => {
            const progress = self.progress * 100;
            document.querySelector("#progressBar1").style.width = progress + "%";

            Array.from(testimonialsItems).forEach(item => {
                const scale = 1 - (self.progress * 0.2);
                const bounce = Math.sin(self.progress * Math.PI * 8) * 0.1;
                gsap.set(item, {
                    scale: scale + bounce,
                    y: bounce * 20
                });
            });
        }
    }
});
// Resume vertical scrolling after testimonialsSection
ScrollTrigger.create({
    trigger: ".testimonialsSection",
    start: "bottom bottom",
    end: "bottom top",
    scrub:4,
    scroller: "#main",
    onEnter: () => locoScroll.update(),
    onLeaveBack: () => locoScroll.update(),
});
// Toggle dark-theme class when testimonials section is reached
ScrollTrigger.create({
    trigger: ".testimonialsSection",
    scroller: "#main",
    onEnter: () => document.body.classList.add("dark-theme"),
    onLeaveBack: () => document.body.classList.remove("dark-theme"),

});

ScrollTrigger.create({
    trigger: "#contactSection",
    scroller: "#main",
    onEnter: () => document.body.classList.remove("dark-theme"),
    onLeaveBack: () => document.body.classList.add("dark-theme"),

});

    const canvas = document.querySelector("#myCanvas");
    if (canvas) {
        const context = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        });
        function files(index) {
            var data = `
                ./Assets/Cyberfiction/male0001.webp
                ./Assets/Cyberfiction/male0002.webp
                ./Assets/Cyberfiction/male0003.webp
                ./Assets/Cyberfiction/male0004.webp
                ./Assets/Cyberfiction/male0005.webp
                ./Assets/Cyberfiction/male0006.webp
                ./Assets/Cyberfiction/male0007.webp
                ./Assets/Cyberfiction/male0008.webp
                ./Assets/Cyberfiction/male0009.webp
                ./Assets/Cyberfiction/male0010.webp
                ./Assets/Cyberfiction/male0011.webp
                ./Assets/Cyberfiction/male0012.webp
                ./Assets/Cyberfiction/male0013.webp
                ./Assets/Cyberfiction/male0014.webp
                ./Assets/Cyberfiction/male0015.webp
                ./Assets/Cyberfiction/male0016.webp
                ./Assets/Cyberfiction/male0017.webp
                ./Assets/Cyberfiction/male0018.webp
                ./Assets/Cyberfiction/male0019.webp
                ./Assets/Cyberfiction/male0020.webp
                ./Assets/Cyberfiction/male0021.webp
                ./Assets/Cyberfiction/male0022.webp
                ./Assets/Cyberfiction/male0023.webp
                ./Assets/Cyberfiction/male0024.webp
                ./Assets/Cyberfiction/male0025.webp
                ./Assets/Cyberfiction/male0026.webp
                ./Assets/Cyberfiction/male0027.webp
                ./Assets/Cyberfiction/male0028.webp
                ./Assets/Cyberfiction/male0029.webp
                ./Assets/Cyberfiction/male0030.webp
                ./Assets/Cyberfiction/male0031.webp
                ./Assets/Cyberfiction/male0032.webp
                ./Assets/Cyberfiction/male0033.webp
                ./Assets/Cyberfiction/male0034.webp
                ./Assets/Cyberfiction/male0035.webp
                ./Assets/Cyberfiction/male0036.webp
                ./Assets/Cyberfiction/male0037.webp
                ./Assets/Cyberfiction/male0038.webp
                ./Assets/Cyberfiction/male0039.webp
                ./Assets/Cyberfiction/male0040.webp
                ./Assets/Cyberfiction/male0041.webp
                ./Assets/Cyberfiction/male0042.webp
                ./Assets/Cyberfiction/male0043.webp
                ./Assets/Cyberfiction/male0044.webp
                ./Assets/Cyberfiction/male0045.webp
                ./Assets/Cyberfiction/male0046.webp
                ./Assets/Cyberfiction/male0047.webp
                ./Assets/Cyberfiction/male0048.webp
                ./Assets/Cyberfiction/male0049.webp
                ./Assets/Cyberfiction/male0050.webp
                ./Assets/Cyberfiction/male0051.webp
                ./Assets/Cyberfiction/male0052.webp
                ./Assets/Cyberfiction/male0053.webp
                ./Assets/Cyberfiction/male0054.webp
                ./Assets/Cyberfiction/male0055.webp
                ./Assets/Cyberfiction/male0056.webp
                ./Assets/Cyberfiction/male0057.webp
                ./Assets/Cyberfiction/male0058.webp
                ./Assets/Cyberfiction/male0059.webp
                ./Assets/Cyberfiction/male0060.webp
                ./Assets/Cyberfiction/male0061.webp
                ./Assets/Cyberfiction/male0062.webp
                ./Assets/Cyberfiction/male0063.webp
                ./Assets/Cyberfiction/male0064.webp
                ./Assets/Cyberfiction/male0065.webp
                ./Assets/Cyberfiction/male0066.webp
                ./Assets/Cyberfiction/male0067.webp
                ./Assets/Cyberfiction/male0068.webp
                ./Assets/Cyberfiction/male0069.webp
                ./Assets/Cyberfiction/male0070.webp
                ./Assets/Cyberfiction/male0071.webp
                ./Assets/Cyberfiction/male0072.webp
                ./Assets/Cyberfiction/male0073.webp
                ./Assets/Cyberfiction/male0074.webp
                ./Assets/Cyberfiction/male0075.webp
                ./Assets/Cyberfiction/male0076.webp
                ./Assets/Cyberfiction/male0077.webp
                ./Assets/Cyberfiction/male0078.webp
                ./Assets/Cyberfiction/male0079.webp
            `;
            return data.split("\n")[index].trim();
        }
        const frameCount = 79;
        const images = [];
        const imageSeq = { frame: 1 };
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = files(i);
            images.push(img);
        }
        gsap.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: `none`,
            scrollTrigger: {
                scrub: 0.15,
                trigger: `#myCanvas`,
                start: `top top`,
                end: `185% top`,
                scroller: `#main`,
            },
            onUpdate: render,
        });
        images[1].onload = render;
        function render() {
            scaleImage(images[imageSeq.frame], context);
        }
        ScrollTrigger.create({
            trigger: "#myCanvas",
            pin: true,
            scroller: `#main`,
            start: `top top`,
            end: `185% top`,
        });
    } else {
        console.error("Canvas element not found");
    }

    // Apply hover effect to paragraph spans
    const p = document.querySelector('#horizontalHeader p');
    const ptext = p.textContent;
    const originalPHTML = p.innerHTML;
    p.innerHTML = ptext.split('').map(char => `<span>${char}</span>`).join('');
    let pSpans = p.querySelectorAll('span');
    addHoverEffect(pSpans);
  // Apply hover effect to h1 spans
  const h1 = document.querySelector('#horizontalHeader h1');
  const text = h1.textContent;
  const originalH1HTML = h1.innerHTML;
  h1.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
  let spans = h1.querySelectorAll('span');
  addHoverEffect(spans);
  // Add event listener to reset button
  const resetButton = document.querySelector('#horizontalHeader button');
  resetButton.addEventListener('click', () => {
    h1.innerHTML = originalH1HTML;
    p.innerHTML = originalPHTML;
    // Reapply hover effect to the new spans
    p.innerHTML = ptext.split('').map(char => `<span>${char}</span>`).join('');
    pSpans = p.querySelectorAll('span');
    addHoverEffect(pSpans);
    h1.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
    spans = h1.querySelectorAll('span');
    addHoverEffect(spans);
  });
// Function to add hover effect to spans
function addHoverEffect(spans) {
  spans.forEach(span => {
    const originalColor = span.style.color || 'var(--black)';
    span.addEventListener('mouseenter', () => {
      gsap.to(span, {
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        onRepeat: () => {
          const randomColor = Math.random() > 0.5 ? '#3451d2' : '#171717';
          const randomSkew = (Math.random() - 0.5) * 10; // Random skew between -5 and 5 degrees
          const randomTranslate = (Math.random() - 0.5) * 20; // Random translate between -10px and 10px
          span.style.color = randomColor;
          span.style.transform = `skew(${randomSkew}deg) translate(${randomTranslate}px, ${randomTranslate}px)`;
        }
      });
    });
    span.addEventListener('mouseleave', () => {
      gsap.killTweensOf(span);
      gsap.to(span, {
        color: originalColor,
        duration: 0.1,
        clearProps: 'transform'
      });
    });
  });
}
function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

const testimonialCards = document.querySelectorAll('#testimonialCard');

testimonialCards.forEach(card => {
    const personImage = card.querySelector('#personImage');
    const testimonialText = card.querySelector('#testimonialText');

    card.addEventListener('mouseenter', () => {
        gsap.to(personImage, {
            scale: 1.8,
            duration: 0.3,
            ease: "power1.inOut"
        });
        gsap.to(card, {
            duration: 0.3,
            scale: 1.2,
            ease: "power1.inOut",
            transformPerspective: 2000,
            transformOrigin: "center center",
            rotationY: 4,
            rotationX: 4
        });
        gsap.to(testimonialText, {
            fontSize: '1.5vw',
            duration: 0.3,
            ease: "power1.inOut"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(personImage, {
            scale: 1,
            duration: 0.3,
            ease: "power1.inOut"
        });
        gsap.to(card, {
            duration: 0.3,
            className: "-=invert-colors",
            ease: "power1.inOut"
        });
        gsap.to(card, {
            duration: 0.3,
            scale: 1,
            width: '60vw',
            boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
            ease: "power1.inOut",
            rotationY: 0,
            rotationX: 0
        });
        gsap.to(testimonialText, {
            fontSize: '1vw',
            duration: 0.3,
            ease: "power1.inOut"
        });
    });
});




let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to('.marquee-part', {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear",
}).totalProgress(0.5);

gsap.set('.marquee-inner', {
    xPercent: -50
});

// Initialize ScrollTrigger
ScrollTrigger.create({
    trigger: '#main',
    start: 'top top',
    scroller:'#main',
    end: 'bottom bottom',
    onUpdate: (self) => {
        const scrollTop = self.scroll();

        if (scrollTop > currentScroll) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        gsap.to(tween, {
            timeScale: isScrollingDown ? 4 : -4, // Speed up forward and reverse
        });

        currentScroll = scrollTop;
    }
});

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


var cursor = document.querySelector('.cursor-dot'),
    follower = document.querySelector('.cursor-bg');

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 36,
                top: posY - 36
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

const items = document.querySelectorAll('#portfolioVideo,#testimonialCard');

window.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');
    });
});



const contactButtons = document.querySelectorAll('.primaryButton');

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
            x: x * 0.2,
            y: y * 0.2,
            stagger: -0.1,
            ease: "power2.out"
        });

        // Text magnetic effect
        gsap.to(text, {
            duration: 0.3,
            x: x *0.2,
            y: y *0.2,
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