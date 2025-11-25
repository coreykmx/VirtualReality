let scene, rocket;


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene")

  rocket = new Rocket(0, 5, 0);
  ufo = new Ufo(0,20,0)

  loop();
})

function loop(){
  rocket.fly();
  ufo.invade();
  window.requestAnimationFrame(loop);
  
}