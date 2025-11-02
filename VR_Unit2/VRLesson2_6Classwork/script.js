let scene, mech, mechs = [], x , z;
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.querySelector("#mech-1");

  for(let i=0;i<100;i++){
    let x = rnd(-100,100);
    let z = rnd(-100,100);
    let m = new Mech(x, 1, z);
    mechs.push(m);
  }

  loop();
})

function loop(){
  for(let m of mechs){
    m.fly();
  }

  window.requestAnimationFrame( loop );
}
