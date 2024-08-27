function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
       
            const canvas = document.querySelector("#myCanvas");
            if (canvas) {
                
              locomotive();


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
                  ./Assets/Cyberfiction/male0080.png
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
                  ./Assets/Cyberfiction/male0101.png
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
                  ./Assets/Cyberfiction/male0161.png
                  ./Assets/Cyberfiction/male0162.png
                  ./Assets/Cyberfiction/male0163.png
                  ./Assets/Cyberfiction/male0164.png
                  ./Assets/Cyberfiction/male0165.png
                  ./Assets/Cyberfiction/male0166.png
                  ./Assets/Cyberfiction/male0167.png
                  ./Assets/Cyberfiction/male0168.png
                  ./Assets/Cyberfiction/male0169.png
                  ./Assets/Cyberfiction/male0170.png
                  ./Assets/Cyberfiction/male0171.png
                  ./Assets/Cyberfiction/male0172.png
                  ./Assets/Cyberfiction/male0173.png
                  ./Assets/Cyberfiction/male0174.png
                  ./Assets/Cyberfiction/male0175.png
                  ./Assets/Cyberfiction/male0176.png
                  ./Assets/Cyberfiction/male0177.png
                  ./Assets/Cyberfiction/male0178.png
                  ./Assets/Cyberfiction/male0179.png
                  ./Assets/Cyberfiction/male0180.png
                  ./Assets/Cyberfiction/male0181.png
                  ./Assets/Cyberfiction/male0182.png
                  ./Assets/Cyberfiction/male0183.png
                  ./Assets/Cyberfiction/male0184.png
                  ./Assets/Cyberfiction/male0185.png
                  ./Assets/Cyberfiction/male0186.png
                  ./Assets/Cyberfiction/male0187.png
                  ./Assets/Cyberfiction/male0188.png
                  ./Assets/Cyberfiction/male0189.png
                  ./Assets/Cyberfiction/male0190.png
                  ./Assets/Cyberfiction/male0191.png
                  ./Assets/Cyberfiction/male0192.png
                  ./Assets/Cyberfiction/male0193.png
                  ./Assets/Cyberfiction/male0194.png
                  ./Assets/Cyberfiction/male0195.png
                  ./Assets/Cyberfiction/male0196.png
                  ./Assets/Cyberfiction/male0197.png
                  ./Assets/Cyberfiction/male0198.png
                  ./Assets/Cyberfiction/male0199.png
                  ./Assets/Cyberfiction/male0200.png
                  ./Assets/Cyberfiction/male0201.png
                  ./Assets/Cyberfiction/male0202.png
                  ./Assets/Cyberfiction/male0203.png
                  ./Assets/Cyberfiction/male0204.png
                  ./Assets/Cyberfiction/male0205.png
                  ./Assets/Cyberfiction/male0206.png
                  ./Assets/Cyberfiction/male0207.png
                  ./Assets/Cyberfiction/male0208.png
                  ./Assets/Cyberfiction/male0209.png
                  ./Assets/Cyberfiction/male0210.png
                  ./Assets/Cyberfiction/male0211.png
                  ./Assets/Cyberfiction/male0212.png
                  ./Assets/Cyberfiction/male0213.png
                  ./Assets/Cyberfiction/male0214.png
                  ./Assets/Cyberfiction/male0215.png
                  ./Assets/Cyberfiction/male0216.png
                  ./Assets/Cyberfiction/male0217.png
                  ./Assets/Cyberfiction/male0218.png
                  ./Assets/Cyberfiction/male0219.png
                  ./Assets/Cyberfiction/male0220.png
                  ./Assets/Cyberfiction/male0221.png
                  ./Assets/Cyberfiction/male0222.png
                  ./Assets/Cyberfiction/male0223.png
                  ./Assets/Cyberfiction/male0224.png
                  ./Assets/Cyberfiction/male0225.png
                  ./Assets/Cyberfiction/male0226.png
                  ./Assets/Cyberfiction/male0227.png
                  ./Assets/Cyberfiction/male0228.png
                  ./Assets/Cyberfiction/male0229.png
                  ./Assets/Cyberfiction/male0230.png
                  ./Assets/Cyberfiction/male0231.png
                  ./Assets/Cyberfiction/male0232.png
                  ./Assets/Cyberfiction/male0233.png
                  ./Assets/Cyberfiction/male0234.png
                  ./Assets/Cyberfiction/male0235.png
                  ./Assets/Cyberfiction/male0236.png
                  ./Assets/Cyberfiction/male0237.png
                  ./Assets/Cyberfiction/male0238.png
                  ./Assets/Cyberfiction/male0239.png
                  ./Assets/Cyberfiction/male0240.png
                  ./Assets/Cyberfiction/male0241.png
                  ./Assets/Cyberfiction/male0242.png
                  ./Assets/Cyberfiction/male0243.png
                  ./Assets/Cyberfiction/male0244.png
                  ./Assets/Cyberfiction/male0245.png
                  ./Assets/Cyberfiction/male0246.png
                  ./Assets/Cyberfiction/male0247.png
                  ./Assets/Cyberfiction/male0248.png
                  ./Assets/Cyberfiction/male0249.png
                  ./Assets/Cyberfiction/male0250.png
                  ./Assets/Cyberfiction/male0251.png
                  ./Assets/Cyberfiction/male0252.png
                  ./Assets/Cyberfiction/male0253.png
                  ./Assets/Cyberfiction/male0254.png
                  ./Assets/Cyberfiction/male0255.png
                  ./Assets/Cyberfiction/male0256.png
                  ./Assets/Cyberfiction/male0257.png
                  ./Assets/Cyberfiction/male0258.png
                  ./Assets/Cyberfiction/male0259.png
                  ./Assets/Cyberfiction/male0260.png
                  ./Assets/Cyberfiction/male0261.png
                  ./Assets/Cyberfiction/male0262.png
                  ./Assets/Cyberfiction/male0263.png
                  ./Assets/Cyberfiction/male0264.png
                  ./Assets/Cyberfiction/male0265.png
                  ./Assets/Cyberfiction/male0266.png
                  ./Assets/Cyberfiction/male0267.png
                  ./Assets/Cyberfiction/male0268.png
                  ./Assets/Cyberfiction/male0269.png
                  ./Assets/Cyberfiction/male0270.png
                  ./Assets/Cyberfiction/male0271.png
                  ./Assets/Cyberfiction/male0272.png
                  ./Assets/Cyberfiction/male0273.png
                  ./Assets/Cyberfiction/male0274.png
                  ./Assets/Cyberfiction/male0275.png
                  ./Assets/Cyberfiction/male0276.png
                  ./Assets/Cyberfiction/male0277.png
                  ./Assets/Cyberfiction/male0278.png
                  ./Assets/Cyberfiction/male0279.png
                  ./Assets/Cyberfiction/male0280.png
                  ./Assets/Cyberfiction/male0281.png
                  ./Assets/Cyberfiction/male0282.png
                  ./Assets/Cyberfiction/male0283.png
                  ./Assets/Cyberfiction/male0284.png
                  ./Assets/Cyberfiction/male0285.png
                  ./Assets/Cyberfiction/male0286.png
                  ./Assets/Cyberfiction/male0287.png
                  ./Assets/Cyberfiction/male0288.png
                  ./Assets/Cyberfiction/male0289.png
                  ./Assets/Cyberfiction/male0290.png
                  ./Assets/Cyberfiction/male0291.png
                  ./Assets/Cyberfiction/male0292.png
                  ./Assets/Cyberfiction/male0293.png
                  ./Assets/Cyberfiction/male0294.png
                  ./Assets/Cyberfiction/male0295.png
                  ./Assets/Cyberfiction/male0296.png
                  ./Assets/Cyberfiction/male0297.png
                  ./Assets/Cyberfiction/male0298.png
                  ./Assets/Cyberfiction/male0299.png
                  ./Assets/Cyberfiction/male0300.png
              `;
                return data.split("\n")[index];
              }

              const frameCount = 300;

              const images = [];
              const imageSeq = {
                frame: 1,
              };

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
                  trigger: `#page>myCanvas`,
                  start: `top top`,
                  end: `600% top`,
                  scroller: `#main`,
                },
                onUpdate: render,
              });

              images[1].onload = render;

              function render() {
                scaleImage(images[imageSeq.frame], context);
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

              ScrollTrigger.create({
                trigger: "#page>#myCanvas",
                pin: true,
                // markers:true,
                scroller: `#main`,
                start: `top top`,
                end: `600% top`,
              });



              gsap.to("#page1",{
                scrollTrigger:{
                  trigger:`#page1`,
                  start:`top top`,
                  end:`bottom top`,
                  pin:true,
                  scroller:`#main`
                }
              })
              gsap.to("#page2",{
                scrollTrigger:{
                  trigger:`#page2`,
                  start:`top top`,
                  end:`bottom top`,
                  pin:true,
                  scroller:`#main`
                }
              })
              gsap.to("#page3",{
                scrollTrigger:{
                  trigger:`#page3`,
                  start:`top top`,
                  end:`bottom top`,
                  pin:true,
                  scroller:`#main`
                }
              })
                // Your canvas drawing code here
            } else {
                console.error("Canvas element not found");
            }
     