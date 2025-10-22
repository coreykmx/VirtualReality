class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("position", {x:2,y:0,z:0});
        sphere1.setAttribute("radius", 1.5);
        sphere1.setAttribute("color", "#ADD8E6");

        let sphere2 = document.createElement("a-sphere");
        sphere2.setAttribute("position", {x:0,y:0.5,z:0});
        sphere2.setAttribute("radius", 2);
        sphere2.setAttribute("color", "#ADD8E6");

        let sphere3 = document.createElement("a-sphere");
        sphere3.setAttribute("position", {x:-2,y:0,z:0});
        sphere3.setAttribute("color", "#ADD8E6");
        sphere3.setAttribute("radius", 1.5);

        this.obj.append(sphere1);
        this.obj.append(sphere2);
        this.obj.append(sphere3);
        this.obj.setAttribute("position", {x:x,y:y,z:z});
        
        scene.append(this.obj);
    }
}