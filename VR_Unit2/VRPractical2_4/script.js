let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;
let rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<100;i++){
    x = rnd(-100,100);
    y = rnd(-75,0);
    z = rnd(-100,100);
    rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }
  loop();

})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  window.requestAnimationFrame( loop );
}
