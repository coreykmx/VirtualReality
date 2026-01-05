let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0 ){
      bullet = new Bullet();
      ammo_count--;      
    }
    
  })

  for(let i=0;i<10;i++){
    x = rnd(-25,25);
    z = rnd(-25,25);
    ammo_boxes.push(new Ammo(x,z));
  }
  
  for(let i=0;i<10;i++){
    x = rnd(-25,25);
    z = rnd(-25,25);
    enemies.push(new Monster(x,5,z));
  }
  
  setTimeout(loop,100);
  setTimeout(a,100);
  setTimeout(countdown,100);
})

function loop(){

  for(let enemy of enemies){
    if(bullet && distance(bullet.obj , enemy.hitbox) < 4){
      enemy.shot = true
    } else{
      enemy.shot = false
    }

    if(enemy.shot){
      enemy_killed++;
    }
    
    enemy.shrink();
    console.log(enemy_killed);
    console.log(enemy.shot);
  }

  if(bullet){
    bullet.fire();
  }

  window.requestAnimationFrame(loop);
}

function a(){

  for(let ammo of ammo_boxes){
    ammo.reload();
    if(distance(camera,ammo.obj)<3){
      ammo.collide = true;
    }else{
      ammo.collide = false
    }
  }
  
  window.requestAnimationFrame(a);
}
function countdown(){
  
  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}