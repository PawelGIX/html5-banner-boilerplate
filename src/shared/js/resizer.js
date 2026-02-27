
// function setSize(){
//     var content = document.getElementById('canvas');
//     if(!content) return;
//     var ww = window.innerWidth, scale = ww / 1260;
//     content.setAttribute( 'style', '-moz-transform-origin: 0 0; -webkit-transform-origin: 0 0; -o-transform-origin: 0 0; -ms-transform-origin: 0 0; transform-origin: 0 0; -moz-transform: scale(' + scale + '); -webkit-transform: scale(' + scale + '); -otransform: scale(' + scale + '); -mstransform: scale(' + scale + '); transform: scale(' + scale + ');');
//     console.log({
//         ww: ww,
//         scale: scale,
//         style: content.style
//     })
// }

// setSize();

// window.addEventListener('resize', setSize);
// window.addEventListener('load', ()=>{
//     setSize();
    
//     if (window.ResizeObserver) {
//         new window.ResizeObserver(setSize).observe(document.body);
//     }
    
// });