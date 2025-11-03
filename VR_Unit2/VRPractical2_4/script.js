let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo, tree, building;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i=0;i<50;i++){
    x = rnd(-125,125);
    z = rnd(-125,125);
    let tree = document.createElement("a-entity");
    let base = document.createElement("a-cylinder");
    base.setAttribute("height",3);
    base.setAttribute("radius",0.5);
    base.setAttribute("position",{x:0,y:1,z:0});
    base.setAttribute("color","brown");
    let leaves = document.createElement("a-cone");
    leaves.setAttribute("height",5);
    leaves.setAttribute("radius-bottom",2);
    leaves.setAttribute("position",{x:0,y:4,z:0});
    leaves.setAttribute("color","green");
    tree.append(base);
    tree.append(leaves);
    tree.setAttribute("position",{x:x,y:0,z:z});
    scene.append(tree);
  }

  for(let i=0;i<50;i++){
    x = rnd(-125,125);
    z = rnd(-125,125);
    let scale = rnd(6,20);
    let height = rnd(10,40);

    let both = height / 2;
    let building = document.createElement("a-entity");
    let base = document.createElement("a-box");
    base.setAttribute("height",height);
    base.setAttribute("width",scale);
    base.setAttribute("depth",scale);
    base.setAttribute("position",{x:0,y:both,z:0});
    base.setAttribute("src","wall.jpg");
    let top = document.createElement("a-box");
    top.setAttribute("width",scale);
    top.setAttribute("depth",scale);
    top.setAttribute("height",0.2);
    top.setAttribute("color", "black");
    top.setAttribute("position",{x:0,y:height,z:0});

    building.append(base);
    building.append(top);
    building.setAttribute("position",{x:x,y:0,z:z});
    scene.append(building);
  } 

  for(let i=0;i<100;i++){
    x = rnd(-125,125);
    y = rnd(-75,0);
    z = rnd(-125,125);
    rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }

  
  for(let i=0;i<25;i++){
    x = rnd(-125,125);
    y = rnd(200,250);
    z = rnd(-125,125);
    ufo = new Ufo(x, y, z);
    ufos.push(ufo);
  }
  loop();

})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }
  
  window.requestAnimationFrame( loop );
}
