window.addEventListener("DOMContentLoaded",function() {
  //Challenge 1: Create a variable scene for the <a-scene> component in the HTML
  
  let scene = document.querySelector("a-scene");

  //Challenge 2: Create a variable for <a-dodecahedron> and create it.

  let dodeca = document.createElement("a-dodecahedron");

  //Challenge 3: Change the <a-dodecahedron>'s position, radius and color

  dodeca.setAttribute("position", {x:0, y:4, z:-2});
  dodeca.setAttribute("color", "black");
  dodeca.setAttribute("radius", 4);
  //Challenge 4: Add the <a-dodecahedron> to the scene

  scene.append(dodeca);

  /* Challenge Bonus
  1) Use a for loop to create a lot of <a-dodecahedron> 
  2) Change each <a-dodecahedron>'s position to a random x, y, and z location
  3) Change each <a-dodecahedron>'s to a random color.  Hint: Use rgb( ) and string interpolation 
  Random Formula: Math.floor(Math.random() * (max - min + 1)) + min;
  */
  
  for (let i=0;i<100;i++){
    let dodecahedron = document.createElement('a-dodecahedron');

    let x = Math.floor(Math.random() * (41)) - 20;
    let y = Math.floor(Math.random() * (41));
    let z = Math.floor(Math.random() * (41)) - 20;

    dodecahedron.setAttribute("position",{x:x,y:y,z:z});

    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));

    dodecahedron.setAttribute("color", `rgb(${r},${g},${b})`);

    scene.append(dodecahedron);

  }
})