function circleBar(elemId , percent){
    let elem = document.getElementById(elemId);
   let circles = elem.querySelectorAll('circle');
   let r = circles[0].getAttribute('r');
   console.log(r);
   let circum = 2 * Math.PI * r;
}
circleBar('elem1', 50 );