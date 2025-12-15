class Monster{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.s = 1;
    this.ds = -1;

    this.hitbox = document.createElement("a-box");
    this.hitbox.setAttribute("scale",{x:4,y:11,z:0.2});
    this.hitbox.setAttribute("opacity",0);
    
    this.obj = document.createElement("a-entity");
    let head = document.createElement("a-circle");
    head.setAttribute("repeat", "1 1");
    head.setAttribute("radius",0.6);
    head.setAttribute("height",1);
    head.setAttribute("position",{x:0,y:3,z:-0.06});
    head.setAttribute("rotation",{x:0,y:180,z:0});
    head.setAttribute("src","eye.png");

    let head1 = document.createElement("a-cylinder");
    head1.setAttribute("repeat", "1 1");
    head1.setAttribute("radius",0.75);
    head1.setAttribute("width",2);
    head1.setAttribute("height",0.1);
    head1.setAttribute("color","black");
    head1.setAttribute("position",{x:0,y:3,z:0});
    head1.setAttribute("rotation",{x:90,y:0,z:0});

    let head2 = document.createElement("a-circle");
    head2.setAttribute("repeat", "1 1");
    head2.setAttribute("radius",0.6);
    head2.setAttribute("height",1);
    head2.setAttribute("position",{x:0,y:3,z:0.06});
    head2.setAttribute("src","eye.png");

    let body = document.createElement("a-box");
    body.setAttribute("repeat", "1 1");
    body.setAttribute("depth",0.1);
    body.setAttribute("width",0.1);
    body.setAttribute("height",4);
    body.setAttribute("color","black");
    body.setAttribute("position",{x:0,y:0.4,z:0});

    let body1 = document.createElement("a-box");
    body1.setAttribute("repeat", "1 1");
    body1.setAttribute("depth",0.1);
    body1.setAttribute("width",2.1);
    body1.setAttribute("height",0.1);
    body1.setAttribute("color","black");
    body1.setAttribute("position",{x:0,y:2,z:0});

    let arm = document.createElement("a-box");
    arm.setAttribute("repeat", "1 1");
    arm.setAttribute("depth",0.1);
    arm.setAttribute("width",0.1);
    arm.setAttribute("height",4);
    arm.setAttribute("color","black");
    arm.setAttribute("position",{x:1,y:0,z:0});

    let arm1 = document.createElement("a-box");
    arm1.setAttribute("repeat", "1 1");
    arm1.setAttribute("depth",0.1);
    arm1.setAttribute("width",0.1);
    arm1.setAttribute("height",4);
    arm1.setAttribute("color","black");
    arm1.setAttribute("position",{x:-1,y:0,z:0});

    let leg = document.createElement("a-box");
    leg.setAttribute("repeat", "1 1");
    leg.setAttribute("depth",0.1);
    leg.setAttribute("width",0.1);
    leg.setAttribute("height",4);
    leg.setAttribute("color","black");
    leg.setAttribute("rotation",{x:0,y:0,z:170});    
    leg.setAttribute("position",{x:-0.35,y:-3.5,z:0});
    
    let leg1 = document.createElement("a-box");
    leg1.setAttribute("repeat", "1 1");
    leg1.setAttribute("depth",0.1);
    leg1.setAttribute("width",0.1);
    leg1.setAttribute("height",4);
    leg1.setAttribute("color","black");
    leg1.setAttribute("rotation",{x:0,y:0,z:-170}); 
    leg1.setAttribute("position",{x:0.35,y:-3.5,z:0});

    this.obj.append(head);
    this.obj.append(head1);
    this.obj.append(head2);
    this.obj.append(body);
    this.obj.append(body1);
    this.obj.append(arm);
    this.obj.append(arm1);
    this.obj.append(leg);
    this.obj.append(leg1);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.hitbox.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
    scene.append(this.hitbox);
  }

  shrink(){
    if( this.shot && this.s > 0){
      this.s += this.ds;
      this.obj.setAttribute("scale",{x:this.s,y:this.s,z:this.s});
    }
  }
}