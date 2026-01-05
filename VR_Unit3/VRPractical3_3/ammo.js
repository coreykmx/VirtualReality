class Ammo{
    constructor(x,z){
        this.x=x;
        this.z=z;
        this.obj = document.createElement("a-entity");

        let box = document.createElement("a-box");
        box.setAttribute("color","green")
        let img = document.createElement("a-image");
        img.setAttribute("src","ammo.png")  
        img.setAttribute("position",{x:0,y:0.51,z:0}); 
        img.setAttribute("rotation",{x:90,y:0,z:0}); 
        this.obj.append(box);
        this.obj.append(img);
        this.obj.setAttribute("position",{x:x,y:0,z:z});
        scene.append(this.obj)
    }
    reload(){
        if(this.collide && ammo_count == 0){
            ammo_count += 3;
            this.obj.setAttribute("transparent",true);
        }
    }
}