class Ammo{
    constructor(x,z){
        this.x=x;
        this.z=z;
        this.obj = document.createElement("a-entity");

        let box = document.createElement("a-box");

        this.obj.append(box);
        
    }
    reload(){
        if(this.collide){
            ammo_count = 3
        }
    }
}