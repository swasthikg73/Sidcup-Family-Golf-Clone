var crsr = document.querySelector("#cursor");
var cursrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  //   console.log(dets);

  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";

  cursrblr.style.left = dets.x - 200 + "px";
  cursrblr.style.top = dets.y - 200 + "px";
});

gsap.to(".navbar", {
  backgroundColor: "#000",
  delay: 1,
  height: "100px",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    // markers: true,
    start: "top - 10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top - 50%",
    end: "top -90%",
    scrub: 2,
  },
});

var allh4 = document.querySelectorAll(".navbar h4");

allh4.forEach((ele) => {
  ele.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  ele.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.border = "0px solid #95C11E";
  });
});

gsap.from("#about-us img, #about-us-in", {
  opacity: 0,
  y: 50,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 58%",
    scrub: 4,
  },
});

// gsap.from(".card", {
//   scale: 0.8,
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".card",
//     scroller: "body",
//     start: "top 70%",
//     end: "top 60%",
//     scrub: 1,
//   },
// });

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 60,
  x: 60,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start: "top 85%",
    end: "top 90%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 90%",
    end: "top 70%",
    scrub: 2,
  },
});
