// document.addEventListener("DOMContentLoaded", function() {
//     // Initialize Locomotive Scroll
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });

//     // Register ScrollTrigger with GSAP
//     gsap.registerPlugin(ScrollTrigger);

//     // Update ScrollTrigger when Locomotive Scroll updates
//     scroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     // Video animation based on scroll
//     const video = document.getElementById("video");
//     if (!video) {
//         console.error("Video element not found");
//         return;
//     }

//     // Ensure video metadata is loaded before calculating duration
//     video.addEventListener('loadedmetadata', function() {
//         const videoDuration = video.duration;
//         const scrollDuration = videoDuration * 1000; // Convert to milliseconds

//         console.log(video.duration);

//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#page2",
//                 scroller: "#main",
//                 start: "top top",
//                 end: `+=${scrollDuration}`, // Adjust the end value to match the desired scroll duration
//                 scrub: 4,
//                 pin: '#page2', // Pin the video container
//                 onUpdate: self => {
//                     const progress = self.progress;
//                     video.currentTime = progress * video.duration;
//                 }
//             }
//         });

        

//         // Refresh ScrollTrigger and Locomotive Scroll
//         ScrollTrigger.addEventListener("refresh", () => scroll.update());
//         ScrollTrigger.refresh();
//     });
// });