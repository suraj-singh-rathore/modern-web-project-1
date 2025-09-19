const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -.1,
        stagger: .2
    })
    .from("#footerhero", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -.1,
        ease: Expo.easeInOut
    })
}

let timeout;
function circleSquize(){
    // default scale vlaue

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);


        timeout = this.setTimeout(function () {
            this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);

    });
}

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnimation();
circleSquize();


document.querySelectorAll(".elem").forEach(function (element) {
  let img = element.querySelector("img");

  // Fade in on mousemove
  element.addEventListener("mousemove", function (e) {
    gsap.to(img, {
      opacity: 1,
      ease: "power1.out",
      duration: 0.3
    });

    // Make image follow cursor
    gsap.to(img, {
      x: e.clientX - element.getBoundingClientRect().left,
      y: e.clientY - element.getBoundingClientRect().top,
      duration: 0.3,
      ease: "power3.out"
    });
  });

  // Fade out on mouseleave
  element.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      ease: "power1.inOut",
      duration: 0.3
    });
  });
});
