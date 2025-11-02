let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate, dudes = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i=0;i<50;i++){
    x = rnd(-50,50);
    z = rnd(-50,50);
    dude = new Dude(x, 0, z);
    dudes.push(dude);
  }
  
  loop();  
})
function loop(){
  //Challenge 5: Make all the dudes jump.
  for(let dude of dudes){
    dude.jump();
  }
  window.requestAnimationFrame( loop );
}