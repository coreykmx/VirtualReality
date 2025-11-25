/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
"--lxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"---xm------lx--x-----l--x--x---l-x----l------x-----l-----x-----l--x--x--x--x",
"x--xxxxxxx--x--x--xxxx--x--xxxx--x--xxxx--x--xxxx--xxxxxxx--x--x--x--x--x--x",
"x--x--x-l-----l------x--x-----x--x--x-----x-----x--x---l----x--x--l--x--l--x",
"x--x--x--xxxxxxx--xxxxxxx--xxxx--x--x--xxxxxxx--x--xxxx--xxxxxxx--xxxxxxx--x",
"xm-l--x---l----x--x-------l---x--x--x--x--x----l------x-----x---l------l---x",
"xxxx--xxxx--xxxxxxxxxx--x--x--x--xxxxxxx--xxxxxxx--xxxxxxx--xxxxxxxl-xxxxxxx",
"x--x--x----------l------x--x-----x-----l-----------x----l-----mx--------x--x",
"x--x--x--xxxxxxxxxxxxxxxx--x--x--x--x--xxxxxxx--x--x--x--xxxx--xxxxxxxxxx--x",
"x---l-----l-------x-----x--x--x--x--x--x--x-----x--x--x--l--x--------l-----x",
"x--xxxxxxx--x--xxxxxxx--xxxx--x--x--xxxx--xxxxxxxxxxxxx--xxxxxxx--x--xxxxxxx",
"x--x--l-----x--x--x--l--x-----x--x--l-----x--x-----l------l----x--x--l-----x",
"xxxxxxxxxxxxxxxx--xxxx--x--xxxx--x--xxxxxxx--xxxx--xxxxxxxxxx--xxxxxxxxxx--x",
"x--l--x-----l--x-----x-----x-----x--x--l--x--x-----x-----x---l----x--x-----x",
"x--x--x--x--x--xxxx--xxxxxxx--x--x--x--x--x--xxxxxxx--xxxxxxxxxx--x--xxxx--x",
"x--x-----x--x----l-----lx--x--x--------x----l---x--x--x--x-------l---x--l--x",
"xxxxxxx--xxxx--x--xxxx--x--x--xxxx--x--xxxx--xxxx--x--x--x--xxxxxxx--xxxxxxx",
"x-----x-----x--x-----x-----x-----x--x--x--------x--x--------x--x--x--------x",
"x--x--x--x--xxxxxxxxxx--x--x--xxxxxxxxxxxxxxxx--x--xxxxxxx--x--x--x--x--x--x",
"x--xl----x-----x--x--x--x---l-x-----x--------x--x-----------x--------x--x--x",
"xxxx--xxxx--xxxx--x--xxxx--xxxx--xxxx--x--xxxx--xxxx--xxxx--x--xxxx--xxxxxxx",
"x--x--x--x--x--------x-----x--------x--x--x--------l-----x--x--x--x-----x--x",
"x--x--x--xxxxxxx--xxxx--xxxx--xxxxxxx--xxxx--x--xxxx--xxxxxxxxxx--x--x--x--x",
"x-----x-----x--x---------l----------x-----x--x--x--x-----x--x--l-----x----lx",
"x--xxxxxxx--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxxxxx--xxxxxxx--xxxx--xxxxxxxxxx",
"x--xm----------l-----x--------x--x-----x--------x--x-----x-------l---x-----x",
"x--x--xxxxxxxxxxxxxxxxxxx--xxxxxxxxxx--xxxxxxx--x--x--x--xxxx--xxxx--x--xl-x",
"x-----x-----x-----x--------------x-----l--------x-----x--x-----x---l----x--x",
"x--xxxxxxx--xxxx--x--xxxx--xxxx--x--xxxxxxx--xxxxxxx--xxxx--xxxxxxxxxxxxxxxx",
"x----l---x-----x--l--x-----x--x--x--x-----x--l--x----l---x----l---x-----l--x",
"xxxx--xxxx--x--xxxxxxx--x--x--xxxxxxxxxx--xxxxxxx--x--xxxx--x--xxxxxxx--xxxx",
"x--x-----l--x-----x-----x-----x--x----l---x--x-----x--------x--x--l--x-----x",
"x--x--xxxxxxxxxxxxx--xxxx--xxxx--x--xxxx--x--xxxxxxx--x--xxxx--x--xxxx--x--x",
"x-l---x--x-----l--x--x---------l-------x--x--------x--x--x--x--x-----x--x--x",
"x--x--x--x--x--xxxx--xxxx--x--xxxxxxx--xxxx--x--x--xxxxxxx--x--x--xxxx--x--x",
"x--x---l-x--x--x--x--x-----x--x--l--x-----x--x--x-----x----------l---x--x--x",
"xxxxxxx-lxxxx--x--x--xxxx--xxxxxxx--xxxx--xxxxxxxxxx--x--xxxx--xxxx--xxxx--x",
"x--x-----x----l---x--x-----x--x-----x--x--x----l---x-----x--------x--x--x--x",
"x--xxxx--xxxx--xxxxxxx--xxxx--xxxx--x--xxxx--xxxxxxx--x--xxxxxxxxxx--x--x--x",
"x------l--------l-------x-------l---------l--------x--x--x-----x---l-------x",
"x--xxxx--x--x--xxxxxxx--x--xxxxxxxxxxxxx--xxxx--xxxx--xxxxxxx--x--xxxxxxx--x",
"x--x-l---x--x--x--------x--------x--x--x-----x--x--x--x-----------x---l----x",
"x--x--xxxxxxxxxxxxxxxxxxx--xxxxxxx--x--x--xxxx--x--xxxxxxxxxx--x--x--xxxxxxx",
"x--x-----x--x----lx--x--x--l--x-----l------l-x--------------x--x--x--x--l--x",
"xxxx--xxxx--xxxx--x--x--xxxxxxxxxx--xxxxxxx--x--xxxxxxx--xxxx--xxxx--x--x--x",
"x---l-x-----x--x-----x-----x--x----l------x--x-----x--------x--x--------x--x",
"xxxx--xxxx--x--xl-x-lx--xxxx--x--xxxxxxxxxxxxx--xxxx--xxxxxxx--xxxx--x--xxxx",
"x------m-l-----x--x------l---------mx--l-----x--x----l--------l---x--x--l--x",
"x--xxxx--xxxx--x--x--xxxx--x--xxxxxxxxxxxxx--x--xxxxxxx--x--xxxxxxxxxxxxx--x",
"x--x--l-----x--x--x--x-----x--l-----x-----l--------x---l-x-----l--x----l----",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---"

];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */     
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(4*c,5,4*r);
      }
      else if(cols[c] == "m"){
        new Monster(4*c,5,4*r);
      }
      else if(cols[c] == "l"){
        new Light(4*c,10,4*r);
      }
    }
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})