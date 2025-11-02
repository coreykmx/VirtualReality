class Mech{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.dy = 0.1;
    this.z = z;
    this.obj = mech.cloneNode(true);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
  }

  fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
  }
}