class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","wall.png");
    this.obj.setAttribute("repeat","0.5 2");
    this.obj.setAttribute("scale","1, 4, 1")
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);

  }
}