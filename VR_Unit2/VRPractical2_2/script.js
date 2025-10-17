let scene, car, pokeball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    car.a=0;car.da=0.05;
    carmove();

})

function carmove(){
    car.a-=car.da;
    car.setAttribute("position",{x:car.a,y:0,z:-8});
    window.requestAnimationFrame(carmove);
        
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    pokeball = document.querySelector("#pokemonball");
    pokeball.a=0;pokeball.da=1;
    pokeballrotate();

})

function pokeballrotate(){
    pokeball.a-=pokeball.da;
    pokeball.setAttribute("rotation",{x:pokeball.a,y:0,z:0});
    window.requestAnimationFrame(pokeballrotate);
}

window.addEventListener("DOMContentLoaded", function(){
    scene = document.querySelector("a-scene");
    rocket = document.querySelector("#rocket");
    rocket.a=0;rocket.da=0.1;
    rocketfly();
})

function rocketfly(){
    rocket.a+=rocket.da;
    rocket.setAttribute("position",{x:3,y:rocket.a,z:-4});
    window.requestAnimationFrame(rocketfly);
}

window.addEventListener("DOMContentLoaded", function(){
    scene = document.querySelector("a-scene");
    dude = document.querySelector("#dude");
    dude.a=0;dude.da=0.05;
    dudegrow();
})

function dudegrow(){
    dude.a+=dude.da;
    dude.setAttribute("scale",{x:dude.a,y:dude.a,z:dude.a});
    window.requestAnimationFrame(dudegrow);
}

window.addEventListener("DOMContentLoaded", function(){
    scene = this.document.querySelector("a-scene");
    sun = this.document.querySelector("#sun");
    sun.a=0;sun.da=0.005;
    sunfade();
})

function sunfade(){
    sun.a+=sun.da;
    sun.setAttribute("opacity",sun.a);
    window.requestAnimationFrame(sunfade);
}