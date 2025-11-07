let maze = [
  "-------------o----xxxxxxxx--o---------",
  "----o-------------x------x----------",
  "---------T--------x------x---T-------",
  "---T---------o----x------x------T----",
  "--T--------o------x------x--------o--",
  "-------T----------x------x----------",
  "-------------T----xxxxxxxx---o-------",
  "-------------------o--------------",
  "------T--------------------",
  "----To----------------o---------",
  "------------------------",
  "------------T--",
  "-----T---------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(2*c,1,2*r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})