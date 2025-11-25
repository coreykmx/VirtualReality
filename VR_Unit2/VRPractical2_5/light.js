class Light{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    
        this.obj = document.createElement("a-entity");
        let l = document.createElement("a-box");
        l.setAttribute("scale","3, 0.1, 3");
        l.setAttribute("position",{x:x,y:y,z:z});
        l.setAttribute("color","white");
        l.setAttribute("src","light.jpg");    
        
        this.obj.append(l);
        scene.append(this.obj);
    }
}