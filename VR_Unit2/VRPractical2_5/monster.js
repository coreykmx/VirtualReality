class Monster{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-entity");
    let monster = document.createElement("a-box");
    monster.setAttribute("repeat", "1 1");
    monster.setAttribute("depth",0.1);
    monster.setAttribute("width",0.1);
    monster.setAttribute("height",8);
    monster.setAttribute("color","black");
    monster.setAttribute("position",{x:x,y:y,z:z});

    this.obj.append(monster)
    scene.append(this.obj);
    
  }
}