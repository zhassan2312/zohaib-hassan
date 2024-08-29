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
            document.querySelector("#progressBar").style.width = progress + "%";

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
    scroller: "#main",
    onEnter: () => locoScroll.update(),
    onLeaveBack: () => locoScroll.update(),
});

// Toggle dark-theme class when testimonials section is reached
ScrollTrigger.create({
    trigger: ".testimonialsSection",
    scroller: "#main",
    onEnter: () => document.body.classList.add("dark-theme"),

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
                ./Assets/Cyberfiction/male0001.png
                ./Assets/Cyberfiction/male0002.png
                ./Assets/Cyberfiction/male0003.png
                ./Assets/Cyberfiction/male0004.png
                ./Assets/Cyberfiction/male0005.png
                ./Assets/Cyberfiction/male0006.png
                ./Assets/Cyberfiction/male0007.png
                ./Assets/Cyberfiction/male0008.png
                ./Assets/Cyberfiction/male0009.png
                ./Assets/Cyberfiction/male0010.png
                ./Assets/Cyberfiction/male0011.png
                ./Assets/Cyberfiction/male0012.png
                ./Assets/Cyberfiction/male0013.png
                ./Assets/Cyberfiction/male0014.png
                ./Assets/Cyberfiction/male0015.png
                ./Assets/Cyberfiction/male0016.png
                ./Assets/Cyberfiction/male0017.png
                ./Assets/Cyberfiction/male0018.png
                ./Assets/Cyberfiction/male0019.png
                ./Assets/Cyberfiction/male0020.png
                ./Assets/Cyberfiction/male0021.png
                ./Assets/Cyberfiction/male0022.png
                ./Assets/Cyberfiction/male0023.png
                ./Assets/Cyberfiction/male0024.png
                ./Assets/Cyberfiction/male0025.png
                ./Assets/Cyberfiction/male0026.png
                ./Assets/Cyberfiction/male0027.png
                ./Assets/Cyberfiction/male0028.png
                ./Assets/Cyberfiction/male0029.png
                ./Assets/Cyberfiction/male0030.png
                ./Assets/Cyberfiction/male0031.png
                ./Assets/Cyberfiction/male0032.png
                ./Assets/Cyberfiction/male0033.png
                ./Assets/Cyberfiction/male0034.png
                ./Assets/Cyberfiction/male0035.png
                ./Assets/Cyberfiction/male0036.png
                ./Assets/Cyberfiction/male0037.png
                ./Assets/Cyberfiction/male0038.png
                ./Assets/Cyberfiction/male0039.png
                ./Assets/Cyberfiction/male0040.png
                ./Assets/Cyberfiction/male0041.png
                ./Assets/Cyberfiction/male0042.png
                ./Assets/Cyberfiction/male0043.png
                ./Assets/Cyberfiction/male0044.png
                ./Assets/Cyberfiction/male0045.png
                ./Assets/Cyberfiction/male0046.png
                ./Assets/Cyberfiction/male0047.png
                ./Assets/Cyberfiction/male0048.png
                ./Assets/Cyberfiction/male0049.png
                ./Assets/Cyberfiction/male0050.png
                ./Assets/Cyberfiction/male0051.png
                ./Assets/Cyberfiction/male0052.png
                ./Assets/Cyberfiction/male0053.png
                ./Assets/Cyberfiction/male0054.png
                ./Assets/Cyberfiction/male0055.png
                ./Assets/Cyberfiction/male0056.png
                ./Assets/Cyberfiction/male0057.png
                ./Assets/Cyberfiction/male0058.png
                ./Assets/Cyberfiction/male0059.png
                ./Assets/Cyberfiction/male0060.png
                ./Assets/Cyberfiction/male0061.png
                ./Assets/Cyberfiction/male0062.png
                ./Assets/Cyberfiction/male0063.png
                ./Assets/Cyberfiction/male0064.png
                ./Assets/Cyberfiction/male0065.png
                ./Assets/Cyberfiction/male0066.png
                ./Assets/Cyberfiction/male0067.png
                ./Assets/Cyberfiction/male0068.png
                ./Assets/Cyberfiction/male0069.png
                ./Assets/Cyberfiction/male0070.png
                ./Assets/Cyberfiction/male0071.png
                ./Assets/Cyberfiction/male0072.png
                ./Assets/Cyberfiction/male0073.png
                ./Assets/Cyberfiction/male0074.png
                ./Assets/Cyberfiction/male0075.png
                ./Assets/Cyberfiction/male0076.png
                ./Assets/Cyberfiction/male0077.png
                ./Assets/Cyberfiction/male0078.png
                ./Assets/Cyberfiction/male0079.png
                ./Assets/Cyberfiction/male0081.png
                ./Assets/Cyberfiction/male0082.png
                ./Assets/Cyberfiction/male0083.png
                ./Assets/Cyberfiction/male0084.png
                ./Assets/Cyberfiction/male0085.png
                ./Assets/Cyberfiction/male0086.png
                ./Assets/Cyberfiction/male0087.png
                ./Assets/Cyberfiction/male0088.png
                ./Assets/Cyberfiction/male0089.png
                ./Assets/Cyberfiction/male0090.png
                ./Assets/Cyberfiction/male0091.png
                ./Assets/Cyberfiction/male0092.png
                ./Assets/Cyberfiction/male0093.png
                ./Assets/Cyberfiction/male0094.png
                ./Assets/Cyberfiction/male0095.png
                ./Assets/Cyberfiction/male0096.png
                ./Assets/Cyberfiction/male0097.png
                ./Assets/Cyberfiction/male0098.png
                ./Assets/Cyberfiction/male0099.png
                ./Assets/Cyberfiction/male0100.png
                ./Assets/Cyberfiction/male0102.png
                ./Assets/Cyberfiction/male0103.png
                ./Assets/Cyberfiction/male0104.png
                ./Assets/Cyberfiction/male0105.png
                ./Assets/Cyberfiction/male0106.png
                ./Assets/Cyberfiction/male0107.png
                ./Assets/Cyberfiction/male0108.png
                ./Assets/Cyberfiction/male0109.png
                ./Assets/Cyberfiction/male0110.png
                ./Assets/Cyberfiction/male0111.png
                ./Assets/Cyberfiction/male0112.png
                ./Assets/Cyberfiction/male0113.png
                ./Assets/Cyberfiction/male0114.png
                ./Assets/Cyberfiction/male0115.png
                ./Assets/Cyberfiction/male0116.png
                ./Assets/Cyberfiction/male0117.png
                ./Assets/Cyberfiction/male0118.png
                ./Assets/Cyberfiction/male0119.png
                ./Assets/Cyberfiction/male0120.png
                ./Assets/Cyberfiction/male0121.png
                ./Assets/Cyberfiction/male0122.png
                ./Assets/Cyberfiction/male0123.png
                ./Assets/Cyberfiction/male0124.png
                ./Assets/Cyberfiction/male0125.png
                ./Assets/Cyberfiction/male0126.png
                ./Assets/Cyberfiction/male0127.png
                ./Assets/Cyberfiction/male0128.png
                ./Assets/Cyberfiction/male0129.png
                ./Assets/Cyberfiction/male0130.png
                ./Assets/Cyberfiction/male0131.png
                ./Assets/Cyberfiction/male0132.png
                ./Assets/Cyberfiction/male0133.png
                ./Assets/Cyberfiction/male0134.png
                ./Assets/Cyberfiction/male0135.png
                ./Assets/Cyberfiction/male0136.png
                ./Assets/Cyberfiction/male0137.png
                ./Assets/Cyberfiction/male0138.png
                ./Assets/Cyberfiction/male0139.png
                ./Assets/Cyberfiction/male0140.png
                ./Assets/Cyberfiction/male0141.png
                ./Assets/Cyberfiction/male0142.png
                ./Assets/Cyberfiction/male0143.png
                ./Assets/Cyberfiction/male0144.png
                ./Assets/Cyberfiction/male0145.png
                ./Assets/Cyberfiction/male0146.png
                ./Assets/Cyberfiction/male0147.png
                ./Assets/Cyberfiction/male0148.png
                ./Assets/Cyberfiction/male0149.png
                ./Assets/Cyberfiction/male0150.png
                ./Assets/Cyberfiction/male0151.png
                ./Assets/Cyberfiction/male0152.png
                ./Assets/Cyberfiction/male0153.png
                ./Assets/Cyberfiction/male0154.png
                ./Assets/Cyberfiction/male0155.png
                ./Assets/Cyberfiction/male0156.png
                ./Assets/Cyberfiction/male0157.png
                ./Assets/Cyberfiction/male0158.png
                ./Assets/Cyberfiction/male0159.png
                ./Assets/Cyberfiction/male0160.png
            `;
            return data.split("\n")[index].trim();
        }

        const frameCount = 158;
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
                end: `190% top`,
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
            end: `190% top`,
        });
    } else {
        console.error("Canvas element not found");
    }

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
          const randomColor = Math.random() > 0.5 ? '#BCAD87' : '#171717';
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