class Ufo{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = document.createElement("a-entity");
        let base = document.createElement("a-cylinder");
        base.setAttribute("radius", 10);
        base.setAttribute("height", 0.5);
        base.setAttribute("position", {x:0,y:5,z:0});
        base.setAttribute("color", "black");

        let base1 = document.createElement("a-cone");
        base1.setAttribute("radius-top", 3);
        base1.setAttribute("radius-bottom", 9.75);
        base1.setAttribute("height", 2);
        base1.setAttribute("position", {x:0,y:6.25,z:0});
        base1.setAttribute("color", "gray");
        let top = document.createElement("a-sphere");
        top.setAttribute("radius", 3);
        top.setAttribute("height", 2);
        top.setAttribute("theta-length", 90);
        top.setAttribute("position", {x:0,y:7.25,z:0});
        top.setAttribute("color", "#9ABDDC");
        top.setAttribute("opacity", 0.5);
        let top2 = document.createElement("a-cylinder");
        top2.setAttribute("radius", 3.5);
        top2.setAttribute("height", 0.25);
        top2.setAttribute("position", {x:0,y:7.25,z:0});
        top2.setAttribute("color", "black");
        let bot = document.createElement("a-cone");
        bot.setAttribute("radius-top", 2.5);
        bot.setAttribute("radius-bottom", 9.75);
        bot.setAttribute("height", 1);
        bot.setAttribute("position", {x:0,y:4.25,z:0});
        bot.setAttribute("rotation", {x:0,y:0,z:180});
        bot.setAttribute("color", "gray");
        let bot2 = document.createElement("a-cylinder");
        bot2.setAttribute("radius", 2.5);
        bot2.setAttribute("height", 0.5);
        bot2.setAttribute("position", {x:0,y:3.75,z:0});
        bot2.setAttribute("color", "#FFFF00");
        bot2.setAttribute("opacity", 0.5);
        let light = document.createElement("a-cone");
        light.setAttribute("radius-top", 2.5);
        light.setAttribute("radius-bottom", 50);
        light.setAttribute("height", 100);
        light.setAttribute("position", {x:0,y:-46.5,z:0});
        light.setAttribute("color", "#FFFF00");
        light.setAttribute("opacity", 0.2);

        this.obj.append(base);
        this.obj.append(base1);
        this.obj.append(bot);
        this.obj.append(bot2);
        this.obj.append(top);
        this.obj.append(top2);
        this.obj.append(light);
        this.obj.setAttribute("position",{x:this.x, y:this.y , z:this.z});
        scene.append(this.obj);       
    }

    invade(){
        if (this.y < 3){
        this.dy = 0;
        }else{
            this.dy = rnd(1,2);
            this.y -= this.dy;
        }
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

    }
}