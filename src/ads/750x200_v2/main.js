function on(selector, eventName, eventHandler) {
    return Array.from(document.querySelectorAll(selector)).forEach((el) => {
        el.addEventListener(eventName, eventHandler);
    });
}

function init() {

    var MAX_ANIM_LENGTH = 27;

    var btn = document.querySelector(".data-btn");
    var circle;
    if (btn) {
        circle = btn.querySelector(".data-btn-circle");
        if (!circle) {
            var ns = "http://www.w3.org/2000/svg";
            
            var defs = document.createElementNS(ns, "defs");
            
            var radialGradient = document.createElementNS(ns, "radialGradient");
            radialGradient.setAttribute("id", "circleGradient");
            
            var stop1 = document.createElementNS(ns, "stop");
            stop1.setAttribute("offset", "0%");
            stop1.setAttribute("stop-color", "#fff");
            stop1.setAttribute("stop-opacity", ".3");
            radialGradient.appendChild(stop1);
            
            var stop2 = document.createElementNS(ns, "stop");
            stop2.setAttribute("offset", "100%");
            stop2.setAttribute("stop-color", "#fff");
            stop2.setAttribute("stop-opacity", "0");
            radialGradient.appendChild(stop2);
            
            defs.appendChild(radialGradient);
            
            var clipPath = document.createElementNS(ns, "clipPath");
            clipPath.setAttribute("id", "btnClip");
            var clipRect = document.createElementNS(ns, "rect");
            clipRect.setAttribute("x", "298");
            clipRect.setAttribute("y", "163");
            clipRect.setAttribute("width", "262.055");
            clipRect.setAttribute("height", "26.5");
            clipPath.appendChild(clipRect);
            defs.appendChild(clipPath);
            
            var svg = document.querySelector("svg");
            svg.insertBefore(defs, svg.firstChild);
            
            var circleGroup = document.createElementNS(ns, "g");
            circleGroup.setAttribute("clip-path", "url(#btnClip)");
            btn.appendChild(circleGroup);
            
            circle = document.createElementNS(ns, "circle");
            circle.setAttribute("class", "data-btn-circle");
            circle.setAttribute("cx", "0");
            circle.setAttribute("cy", "0");
            circle.setAttribute("r", "44");
            circle.setAttribute("fill", "url(#circleGradient)");
            circle.setAttribute("transform", "translate(298 163)");
            circle.setAttribute("style", "pointer-events: none;transition: transform 0.1s linear, opacity 0.2s ease;");
            circle.setAttribute("opacity", "0");
            circleGroup.appendChild(circle);
        }
        
        var circleGroup = btn.querySelector('[clip-path="url(#btnClip)"]');
        
        btn.addEventListener("mouseenter", function() {
            if (circle) circle.setAttribute("opacity", "1");
        });
        
        btn.addEventListener("mousemove", function(e) {
            var rect = btn.getBoundingClientRect();
            
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            var translateX = 298 + x;
            var translateY = 163 + y;
            
            circle.setAttribute("transform", "translate(" + translateX + " " + translateY + ")");
        });
        
        btn.addEventListener("mouseleave", function() {
            if (circle) {
                // circle.setAttribute("transform", "translate(298 163)");
                circle.setAttribute("opacity", "0");
            }
        });
    }
     

    // var slides = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 3 });
    // // slides.to(".data-slide-1", 0.2, { autoAlpha: 0, scale:.95, transformOrigin: "50%", });
    // slides.fromTo(".data-slide-2", 0.2,{ autoAlpha:0, scale:.95, transformOrigin: "50%", }, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 0);
    // slides.to(".data-slide-2", 0.2, { autoAlpha: 0, scale: .95, transformOrigin: "50%", }, 5);
    // // slides.to(".data-slide-1", 0.2, { autoAlpha: 1, scale:1, transformOrigin: "50%", }, 5);
    
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
        gsap.set(".data-btn", { scale: 1 });
    });


    // gsap.delayedCall(MAX_ANIM_LENGTH, function () {
    //     slides.revert();
    // });


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
}
