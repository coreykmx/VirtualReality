let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rocket = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<100;i++){
    let x = rnd(-1000,1000);
    let z = rnd(-1000,1000);
    rocket[i] = new Rocket(x,0,z);
  }
  loop();
})

function loop(){
  for(let i=0;i<100;i++){
    rocket[i].fly();
  }

  window.requestAnimationFrame( loop );
}
