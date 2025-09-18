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


// document.querySelector(".elem1").forEach(function (elem) {
//     elem.addEventListener("mousemove", function (dets) {
//         console.log("hello ji");
//     });
// });

document.querySelector(".elem1")
  .addEventListener("mousemove", function (details) {
    gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: power1,
  });
  });

