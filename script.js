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

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnimation();