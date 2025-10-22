class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        let base = document.createElement("a-box");
        base.setAttribute("scale",{x:4,y:4,z:4});
        base.setAttribute("position",{x:0,y:2,z:0});
        base.setAttribute("color", "grey");
        let roof = document.createElement("a-cone");
        roof.setAttribute("radius-bottom", 3.5);
        roof.setAttribute("height", 3);
        roof.setAttribute("segments-radial",4);
        roof.setAttribute("rotation",{x:0,y:45,z:0});
        roof.setAttribute("position",{x:0,y:5,z:0});
        roof.setAttribute("color", "brown");
        let door = document.createElement("a-box");
        door.setAttribute("scale",{x:1,y:2,z:0.1});
        door.setAttribute("position",{x:0,y:1,z:2});
        door.setAttribute("color", "orange");

        this.obj.append(base);
        this.obj.append(roof);
        this.obj.append(door);
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj)
    }
}