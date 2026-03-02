function on(selector, eventName, eventHandler) {
    return Array.from(document.querySelectorAll(selector)).forEach((el) => {
        el.addEventListener(eventName, eventHandler);
    });
}

function init() {
    var b = gsap
        .timeline()
        .to(".data-btn", 0.6, {
            scale: 1.2,
            transformOrigin: "50%",
            ease: "Power4.easeIn",
        })
        .to(".data-btn", 0.6, {
            scale: 1,
            transformOrigin: "50%",
            ease: "Power4.easeOut",
        });
    // gsap.set(".smog",{scale:1.1, transformOrigin:"50% 50%"});

    var t = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 0 });
    t.from(".text", .4,{ x:"+=20", opacity: 0, ease:"Power4.easeOut", stagger: .2 },0.5); 
    t.add(b, 2);



    var slides = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 3 });
    slides.to(".data-slide-1", 0.2, { autoAlpha: 0, scale:.95, transformOrigin: "50%", });
    slides.fromTo(".data-slide-2", 0.2,{ autoAlpha:0, scale:.95, transformOrigin: "50%", }, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 0);
    slides.to(".data-slide-2", 0.2, { autoAlpha: 0, scale:.95, transformOrigin: "50%", }, 3);
    slides.to(".data-slide-1", 0.2, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 3);
   
    

    var scene = gsap.timeline({ paused: true });
    // scene.to(".data-scene1", 0.2, { opacity: 0 });
    scene.to(".data-scene2, .disclaimer", 0.2, { autoAlpha: 1 });
    scene.to(".data-scene1", 0.2, { autoAlpha: 0 },0);
    // scene.to("image", 0.3, { y: "+=20", scale: 0.9 });
    // scene.seek(0);

    on(".data-rules", "mouseover", function (e) {
        // e.preventDefault();
        // console.log(
        //     scene.reversed()
        // )
        scene.play();
        // scene.reverse(true);
        // t.pause();
        // t.progress(1);
    });
    on(".data-rules", "mouseout", function (e) {
        // e.stopPropagation();
        e.preventDefault();
        scene.reverse();
        // t.play();
    });
}
