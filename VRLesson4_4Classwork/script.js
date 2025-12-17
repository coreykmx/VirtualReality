let scene, boxes = [];
let rnd = (l,u) => Math.random()*(u-l)+l;
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for(let i=0; i<10; i++){
    x = rnd(-10,10);
    z = rnd(-10,10);
    let box = new Box(x,1,z);
    boxes.push(box);
  }
  loop()
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for(let b of boxes){
    b.blast();
    console.log(b.boom) 
  }

  window.requestAnimationFrame( loop )
  
}