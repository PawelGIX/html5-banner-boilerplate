function on(selector, eventName, eventHandler) {
    return Array.from(document.querySelectorAll(selector)).forEach((el) => {
        el.addEventListener(eventName, eventHandler);
    });
}

function init() {

    var MAX_ANIM_LENGTH = 27;

   
     

    var slides = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 3 });
    slides.to(".data-slide-1", 0.2, { autoAlpha: 0, scale:.95, transformOrigin: "50%", });
    slides.fromTo(".data-slide-2", 0.2,{ autoAlpha:0, scale:.95, transformOrigin: "50%", }, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 0);
    slides.to(".data-slide-2", 0.2, { autoAlpha: 0, scale: .95, transformOrigin: "50%", }, 5);
    slides.to(".data-slide-1", 0.2, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 5);
    
    // pulse button .data-btn this way using gsap
    var pulseTween = gsap.to(".data-btn", {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        transformOrigin: "50%",
        ease: "sine.inOut"
    });

    gsap.delayedCall(MAX_ANIM_LENGTH, function () {
        pulseTween.kill();
        // gsap.set(".data-btn", { scale: 1 });
        document.documentElement.classList.add('stopped');
    });


    gsap.delayedCall(MAX_ANIM_LENGTH, function () {
        slides.revert();
    });


    var scene = gsap.timeline({ paused: true });
    // scene.to(".data-scene1", 0.2, { opacity: 0 });
    scene.to(".data-scene2, .disclaimer", 0.2, { autoAlpha: 1 });
    scene.to(".data-scene1", 0.2, { autoAlpha: 0 },0);

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





    // -- Glow button start 
       // Initialize glow effect
        
    const button = document.querySelector('.liquid-btn');

    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        button.style.setProperty('--x', x + '%');
        button.style.setProperty('--y', y + '%');
    });

    button.addEventListener('mouseleave', () => {
        button.style.setProperty('--x', '50%');
        button.style.setProperty('--y', '50%');
    });
    // Glow button end
}
