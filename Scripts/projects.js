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
            type: 'Interaction Desing'
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

    

    
const hoverCircle = document.querySelector('.hoverCircle');
const portfolios = document.querySelectorAll('.portfolioVideo'); // Replace with your target div class
const testimonials = document.querySelectorAll('.testimonialCard'); // Replace with your target div class

portfolios.forEach(div => {
    div.addEventListener('mouseenter', () => {
        gsap.to(hoverCircle, {
            opacity: 1,
            duration: 0.3,
            ease: 'power3.out'
        });
    });

    div.addEventListener('mouseleave', () => {
        gsap.to(hoverCircle, {
            opacity: 0,
            duration: 0.3,
            ease: 'power3.out'
        });
    });

    div.addEventListener('mousemove', (e) => {
        gsap.to(hoverCircle, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power3.out'
        });
    });
});

testimonials.forEach(div => {
    div.addEventListener('mouseenter', () => {
        gsap.to(hoverCircle, {
            opacity: 1,
            duration: 0.3,
            ease: 'power3.out'
        });
    });

    div.addEventListener('mouseleave', () => {
        gsap.to(hoverCircle, {
            opacity: 0,
            duration: 0.3,
            ease: 'power3.out'
        });
    });

    div.addEventListener('mousemove', (e) => {
        gsap.to(hoverCircle, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power3.out'
        });
    });
});