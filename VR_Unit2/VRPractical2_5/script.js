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
"---xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"------x--x--x--------x-----------x-----x-----x-----x--x-----------x-----------x-----x--x-----------------------x-----------x--x--------------x-----x--x",
"x--xxxx--x--xxxx--x--xxxx--xxxxxxx--xxxx--xxxx--x--x--xxxxxxxxxx--xxxx--xxxxxxx--xxxx--xxxxxxx--xxxxxxxxxx--xxxx--x--x--xxxx--xxxx--x--x--x--xxxx--x--x",
"x--x-----------x--x--------x-----------x--x-----x-----x--------x-----x--x--x--------x-----------x-----x--x--------x--x--x-----------x--x--x--x--x-----x",
"x--xxxx--xxxxxxx--x--xxxxxxx--x--xxxx--x--xxxxxxx--x--x--x--xxxxxxx--x--x--xxxx--xxxx--xxxxxxxxxx--xxxx--x--x--x--x--x--xxxxxxx--xxxxxxxxxx--x--xxxx--x",
"x--x-----x--x--x--x--x--x-----x-----x--x-----x-----x--x--x--------x--x-----------------------x--x--------x--x--x--x--x--x--x-----x--x-----x-----x-----x",
"x--x--xxxx--x--xxxx--x--x--xxxx--xxxxxxx--xxxxxxx--xxxxxxxxxx--xxxx--x--xxxx--x--xxxx--xxxxxxx--xxxxxxx--xxxx--xxxxxxxxxx--xxxx--x--xxxx--x--xxxx--xxxx",
"x--x-----------------x--------x-----x--------------------x--x--------x-----x--x--x--x-----------x-----------x-----x-----------x-----x--x-----------x--x",
"x--xxxxxxx--x--xxxxxxx--x--xxxx--xxxxxxx--x--xxxxxxx--xxxx--x--x--x--x--xxxx--xxxx--xxxx--xxxxxxx--xxxxxxx--x--xxxxxxx--xxxxxxxxxx--x--x--x--xxxxxxx--x",
"x--x-----x--x--------x--x-----x--x--x-----x--x--------x--x--x--x--x--x--x--x--------x-----------x--x-----------------x--------x--x--x-----x--------x--x",
"x--x--xxxxxxx--x--x--x--x--x--xxxx--xxxxxxxxxxxxxxxx--x--x--xxxx--x--xxxx--xxxx--xxxxxxx--x--xxxxxxxxxxxxx--xxxx--x--xxxx--x--x--xxxx--x--xxxxxxxxxx--x",
"x--------------x--x--x--x--x--------x--------------x-----------x--x-----------x--------x--x--x--x--x--------x-----x--x-----x-----------x-----x--x--x--x",
"x--x--xxxxxxxxxxxxxxxxxxxxxx--x--xxxxxxxxxx--xxxxxxxxxxxxxxxx--xxxxxxx--x--xxxx--xxxxxxx--xxxx--x--xxxxxxx--xxxxxxxxxx--xxxxxxxxxxxxx--x--xxxx--x--x--x",
"x--x--x--x-----x-----x-----x--x--x--------x-----------x--------x--------x--------x--x--------------x--------x--x-----x-----x--x--x--x--x--x-----------x",
"x--xxxx--xxxx--xxxx--x--x--x--xxxxxxxxxx--x--x--x--xxxxxxx--xxxxxxx--x--xxxxxxxxxx--x--xxxx--xxxxxxxxxx--x--x--x--xxxxxxx--x--x--x--xxxx--xxxx--xxxx--x",
"x--------------x-----x--x--------------x--x--x--x-----x-----------x--x-----------x--x-----x--x-----x-----x-----------x--------x--x--x--------x-----x--x",
"x--xxxx--xxxx--xxxx--xxxx--xxxx--xxxxxxx--xxxxxxxxxx--xxxxxxx--xxxx--x--xxxxxxxxxx--x--xxxxxxx--xxxx--xxxxxxx--xxxx--x--x--xxxx--x--xxxx--xxxxxxx--xxxx",
"x--x--x-----x-----x-----------x-----------------x-----x--x-----x--x--x--x--x--x--x-----x-----x-----x-----x-----x--------x-----x-----------x-----------x",
"x--x--x--x--xxxxxxxxxxxxx--xxxx--x--x--xxxx--xxxx--xxxx--x--x--x--xxxx--x--x--x--x--xxxx--xxxxxxx--xxxxxxx--xxxx--x--xxxxxxx--x--xxxxxxx--x--xxxxxxx--x",
"x--x-----x-----x-----------x-----x--x--x--------------x-----x-----x-----x--x--x-----x--x-----------x-----x--x-----x--x--------x--x--------------x--x--x",
"xxxxxxx--x--xxxx--xxxx--xxxxxxx--xxxxxxx--x--xxxxxxxxxxxxx--xxxxxxxxxx--x--x--xxxxxxx--x--xxxxxxxxxx--xxxxxxxxxx--x--x--xxxxxxxxxx--xxxx--xxxx--x--xxxx",
"x--------x--------x--x-----x--x--x-----x--x-----------x-----------x--------x-----x--x--------x--x-----x--------x--x--x--------x-----x--x--x--x--------x",
"x--xxxxxxxxxxxxxxxx--x--x--x--x--xxxx--xxxxxxxxxxxxx--x--xxxx--xxxxxxx--xxxx--x--x--x--x--x--x--xxxx--x--xxxxxxxxxx--xxxxxxx--xxxxxxx--xxxx--xxxx--xxxx",
"x-----x--x--------------x--x-----x--------------x-----------x-----------------x-----x--x--x--x--------------------x-----x--x--x-----x-----x-----------x",
"x--xxxx--x--xxxx--x--x--xxxx--x--x--x--xxxx--x--xxxxxxxxxxxxxxxxxxx--xxxx--x--xxxxxxxxxx--xxxxxxxxxx--xxxx--xxxxxxxxxx--x--xxxxxxx--xxxx--x--xxxx--x--x",
"x-----x--x--x-----x--x--x-----x-----x-----x--x--x--x-----x-----x--------x--x-----x-----x--------x-----x-----x--x--------x-----x--------x--------x--x--x",
"x--x--x--x--x--xxxx--xxxx--xxxxxxxxxxxxx--xxxxxxx--x--x--x--xxxxxxxxxx--xxxxxxx--xxxx--x--xxxxxxx--xxxxxxx--x--x--x--xxxx--xxxxxxx--x--x--xxxxxxx--x--x",
"x--x-----x--x--x--------x--x--x--x-----------x--x-----x-----x--x--------x-----x--------------x--x--x--x-----x--x--x-----x-----x-----x--------x-----x--x",
"x--xxxxxxxxxxxxxxxxxxx--xxxx--x--xxxx--xxxx--x--x--xxxxxxxxxx--xxxx--x--x--xxxxxxx--xxxxxxx--x--x--x--x--xxxx--x--xxxxxxx--xxxx--xxxxxxx--xxxx--xxxx--x",
"x--x--------x--x--x--------x--------x-----x--------x--x-----------x--x--x--x--------x-----x--x--x--x--x--x--------x-----x--------x-----x--x--x--x-----x",
"xxxxxxxxxx--x--x--x--xxxx--x--x--x--xxxxxxxxxxxxx--x--xxxxxxx--x--xxxx--x--x--xxxxxxx--xxxx--x--xxxx--x--xxxx--xxxx--xxxxxxxxxxxxxxxx--x--x--x--xxxxxxx",
"x--------x-----x--------x--x--x--x--x--x--x--------------------x--x--------x--------------x--x--------------x-----x-----x--x--------x--x--x-----x--x--x",
"xxxx--x--x--xxxx--xxxxxxxxxx--xxxxxxx--x--xxxxxxx--xxxx--xxxx--xxxxxxx--xxxxxxxxxx--xxxxxxxxxx--xxxx--x--x--xxxx--x--xxxx--x--xxxxxxx--x--xxxxxxx--x--x",
"x--x--x--x-----x--x--------x-----x-----------x-----x--------x-----x-----x--------x--x-----x-----x--x--x--x--x--x--------x--x--------x--------x--x--x--x",
"x--xxxx--x--x--x--x--xxxx--xxxx--xxxxxxxxxx--x--xxxx--xxxx--xxxxxxx--xxxxxxx--xxxx--x--x--xxxxxxx--x--xxxxxxx--x--xxxxxxx--xxxx--xxxxxxx--xxxx--x--x--x",
"x-----x-----x-----x--x--x--x--x--x--x--x--x--------x-----x-----x--x--------x--x--x--x--x-----x--x--------------------x-----------x--x--x--------------x",
"x--x--xxxxxxxxxx--x--x--xxxx--x--x--x--x--x--x--xxxxxxxxxxxxxxxx--xxxxxxx--x--x--x--xxxxxxx--x--xxxx--xxxxxxx--xxxx--x--x--xxxx--x--x--xxxxxxxxxxxxx--x",
"x--x--x--x--------x--------x-----x-----x--x--x-----x--x-----------x--x--x--x-----------x--x-----x--x-----x--x--x--------x-----x-----x-----x--x--------x",
"x--x--x--x--x--x--x--x--xxxxxxx--x--xxxx--x--xxxxxxx--xxxxxxxxxx--x--x--x--x--x--xxxxxxx--x--xxxx--xxxx--x--xxxx--xxxx--xxxxxxxxxxxxx--xxxx--xxxxxxx--x",
"x--x--------x--x--x--x-----x-----------x--------x-----x--------x-----x-----x--x--x-----------x--x-----------x-----x--x-----x--x-----------x--x--------x",
"x--xxxxxxx--x--x--x--xxxx--xxxxxxx--xxxxxxxxxx--x--xxxx--x--xxxxxxx--xxxx--xxxx--xxxx--x--x--x--xxxxxxxxxx--xxxxxxx--x--x--x--x--xxxxxxx--x--x--xxxxxxx",
"x-----x-----x--x--------x--x-----------x-----------x-----x-----------x-----x--x--------x--x--------------x-----x-----x--x--x--x-----x-----x-----------x",
"x--xxxxxxxxxxxxx--xxxxxxxxxx--xxxx--xxxxxxxxxx--xxxx--x--x--x--xxxx--xxxx--x--xxxx--xxxx--xxxxxxxxxxxxxxxxxxxxxx--xxxx--xxxx--xxxx--xxxxxxx--x--xxxx--x",
"x-----x--x--x-----------------x--x--x--x-----x-----x--x--x--x--x-----x-----x-----x--x--x--x--x--x--x--------x--------x--x--x-----x--x-----x--x--x--x--x",
"x--xxxx--x--xxxx--xxxxxxx--xxxx--x--x--x--xxxx--xxxxxxx--xxxx--x--x--x--xxxxxxx--x--x--x--x--x--x--x--xxxxxxx--xxxxxxx--x--x--xxxx--x--xxxxxxxxxx--x--x",
"x--x--x--------x--x-----------x-----x--------x--x--------x--x--x--x--------x-----x--x--x--x-----x--x-----------x-----x-----x-----x-----x--x--x--x-----x",
"xxxx--xxxxxxx--x--xxxxxxxxxx--xxxxxxx--x--xxxx--xxxxxxxxxx--x--xxxx--xxxxxxx--xxxx--x--x--xxxx--x--xxxx--xxxx--x--x--xxxxxxxxxx--xxxx--x--x--x--x--xxxx",
"x--x--x--x--------x--------x--x--------x-----x--------x-----------x-----x-----x--x--x--------------x-----x--x-----x--x-----------------------x--x-----x",
"x--x--x--x--x--x--x--xxxxxxxxxx--xxxx--xxxxxxx--xxxxxxx--xxxx--xxxxxxx--x--xxxx--xxxxxxx--x--xxxx--xxxxxxx--x--xxxxxxxxxxxxx--x--xxxxxxx--xxxx--xxxxxxx",
"x-----------x--x--------x-----x--x--x-----------x--------x-----x--x--------x--x--------x--x--x--------x--x--x-----x--------x--x--x--------------x-----x",
"x--x--x--xxxxxxxxxx--x--x--xxxx--x--x--xxxx--x--xxxxxxxxxx--x--x--xxxxxxx--x--xxxx--x--xxxxxxxxxxxxxxxx--x--xxxx--x--xxxx--x--x--x--xxxx--xxxx--x--xxxx",
"x--x--x-----------x--x-----x-----x--------x--x--------x-----x-----x--x--x--x-----x--x--x--------x-----------------------x--x--x--x-----x-----x-----x--x",
"x--xxxx--xxxxxxxxxxxxx--xxxxxxx--xxxxxxxxxxxxx--x--x--xxxx--x--x--x--x--xxxx--x--xxxx--x--xxxx--xxxxxxxxxxxxxxxxxxx--x--xxxx--xxxxxxxxxxxxx--xxxxxxx--x",
"x--x-----x--------------x--------------x--------x--x--x--x--x--x--x--------x--x--x--x--x--x-----x--x--------x--x-----x--x-----x--x--x--x--x-----x--x--x",
"x--xxxxxxxxxxxxxxxxxxxxxxxxxxxx--xxxxxxx--x--x--x--xxxx--x--x--x--xxxxxxx--xxxx--x--x--xxxx--x--x--xxxxxxx--x--xxxx--x--xxxxxxx--x--x--x--x--x--x--x--x",
"x--x--------x-----------------x--------x--x--x--x--x--------x--x--x-----x-----x--------------x-----------------------x--x-----x--x-----------x--x-----x",
"xxxx--xxxx--x--x--x--xxxxxxx--x--xxxx--x--xxxx--xxxx--xxxxxxxxxxxxxxxx--x--xxxxxxx--xxxx--xxxxxxx--xxxx--xxxxxxxxxxxxx--xxxx--x--xxxx--xxxxxxx--x--x--x",
"x-----x--x-----x--x--x--x--------x-----x--x-----x--------------x--------------x--x--x-----x--x-----x-----x--x-----------x-----x-----x--x--------x--x--x",
"xxxx--x--xxxx--x--x--x--xxxxxxxxxx--x--xxxxxxxxxxxxx--xxxxxxx--xxxx--xxxxxxxxxx--xxxxxxxxxx--x--x--xxxxxxx--xxxx--xxxxxxx--xxxxxxx--x--xxxx--x--xxxx--x",
"x--------x-----x--x--x-----x--x-----x--x--x--x--x--x-----x--x--x--x--x--x--------------x--x--x--x--x--x--------------------x--------x--x-----x--x-----x",
"xxxx--xxxxxxxxxx--x--x--x--x--x--xxxxxxx--x--x--x--xxxx--x--x--x--x--x--xxxx--xxxxxxx--x--x--xxxxxxx--x--xxxx--xxxxxxxxxxxxx--x--xxxxxxxxxxxxx--xxxx--x",
"x-----x-----------x--x--x-----------------------x--x--x-----x--------x-----x-----x--x--x--x--x-----------x--x--------x-----x--x--x--x--x-----x--------x",
"x--xxxxxxx--xxxxxxx--xxxx--x--x--x--xxxxxxxxxxxxx--x--x--xxxx--x--xxxx--x--x--xxxx--xxxx--x--xxxx--xxxxxxx--x--xxxxxxxxxx--x--xxxx--x--x--x--x--xxxxxxx",
"x--------x--x--x--------x--x--x--x-----x-----x--------------x--x--------x--x-----x-----x--------------------x-----x--x--x--x--x--x--------x--x--x--x--x",
"x--xxxxxxx--x--x--xxxxxxxxxx--xxxxxxxxxx--xxxx--x--xxxx--xxxxxxxxxxxxx--x--xxxx--xxxx--xxxx--xxxxxxx--xxxx--xxxxxxx--x--x--x--x--x--xxxxxxx--x--x--x--x",
"x--x-----x--x--x--------x-----x-----------x--x--x--x-----x--x-----x-----x--x-----x-----x--x--------x--x--------------x--------x--------x-----x--------x",
"xxxx--xxxx--x--xxxxxxxxxxxxxxxxxxxxxx--x--x--x--xxxx--xxxx--x--xxxx--xxxxxxx--xxxxxxx--x--x--x--xxxxxxxxxx--xxxx--xxxx--x--x--x--xxxxxxxxxx--xxxxxxx--x",
"x--------x--------x--x--x-----x--------x--x--------x--------------x--x--x--------------------x-----x--x-----x--x--------x--x--x-----x-----------x-----x",
"xxxx--x--x--xxxxxxx--x--x--xxxxxxx--xxxx--xxxxxxxxxxxxxxxx--xxxxxxx--x--xxxxxxxxxxxxxxxx--xxxxxxx--x--x--xxxx--xxxx--xxxxxxx--x--xxxxxxx--x--xxxxxxx--x",
"x-----x--------x-----------x--------x-----x--------x--------x--------x-----------x-----x--x-----x-----x--------x--x--------x--------x-----x--x--x--x--x",
"x--x--xxxx--xxxx--xxxx--x--xxxxxxx--xxxxxxxxxxxxx--xxxxxxxxxx--xxxxxxxxxxxxx--xxxxxxx--xxxxxxx--x--xxxx--x--x--x--xxxx--x--xxxxxxx--xxxx--xxxx--x--x--x",
"x--x-----x-----x--x--x--x--------x-----x--x--------x-----x-----x--------------x-----------x--------x--x--x--x--x-----x--x--x--------x--------x--x-----x",
"x--x--x--x--xxxx--x--xxxxxxx--xxxx--x--x--xxxx--x--x--xxxx--x--x--xxxx--xxxx--xxxx--x--x--xxxx--xxxx--x--x--x--x--xxxxxxx--xxxxxxxxxxxxx--xxxx--x--xxxx",
"x--x--x--x--x-----x-----x--------x--x--x--------x--x--------x--x-----x-----x-----x--x--x--x-----x--x--x--x--x--x-----x-----x--------x-----x--x-----x--x",
"x--xxxxxxx--x--x--xxxx--x--xxxxxxx--x--xxxxxxx--xxxxxxx--xxxx--xxxx--xxxxxxx--xxxx--xxxxxxxxxxxxx--x--xxxxxxx--x--x--xxxx--x--xxxxxxx--x--x--x--x--x--x",
"x--x--------x--x--x--------------x--x-----x--x--x--------x--x-----x-----x-----x--x-----x--x-----x--------x--------x-----x--x--x--x-----x--x--x--x-----x",
"xxxx--xxxxxxxxxxxxx--x--xxxxxxx--xxxxxxx--x--x--xxxx--xxxx--xxxxxxxxxx--x--xxxx--x--xxxx--x--xxxxxxx--x--xxxx--x--xxxx--xxxx--x--x--xxxxxxx--xxxxxxx--x",
"x-----x--------x-----x--x--x--x-----x--x--x-----------------x--------x--x-----x-----x-----------------x--x-----x-----x--x--x--x-----x--x-----x--x-----x",
"x--x--x--x--x--xxxxxxx--x--x--xxxx--x--x--x--x--x--xxxxxxxxxx--x--xxxx--xxxx--xxxx--xxxxxxxxxxxxxxxx--xxxxxxxxxx--xxxxxxx--x--xxxx--x--xxxx--x--x--x--x",
"x--x--x--x--x--------x--------x--------x--x--x--x-----------x--x--x-----x-----------x-----x-----x-----x--x-----x--x-----x--x--------------------x--x--x",
"xxxxxxxxxx--xxxx--xxxx--xxxxxxxxxx--x--x--x--xxxxxxxxxxxxx--x--xxxx--xxxx--x--xxxx--xxxx--x--xxxx--xxxx--xxxx--xxxxxxx--x--x--x--x--xxxxxxx--x--x--xxxx",
"x-----------x-----x-----x--x--------x-----x--x-----------x--------x-----x--x--x--x--------x--------x--------x--x--x--x--x-----x--x-----x--x--x-----x--x",
"xxxx--xxxx--xxxxxxxxxx--x--x--xxxxxxxxxx--x--xxxxxxxxxx--x--xxxxxxx--xxxxxxx--x--xxxx--xxxx--xxxxxxxxxxxxx--x--x--x--x--x--xxxx--x--x--x--x--x--xxxx--x",
"x--------x-----x--x--x--x--x-----x--x-----x--x-----------x-----x-----x--------x--x--x-----x--------x--x-----x--x-----x--------x--x--x--x-----x--------x",
"x--x--x--x--x--x--x--xxxx--xxxxxxx--xxxx--xxxxxxx--xxxx--x--x--xxxx--x--x--x--x--x--x--xxxxxxxxxx--x--x--x--x--xxxx--x--xxxx--xxxxxxxxxx--x--xxxx--xxxx",
"x--x--x--x--x--------x--------------x--------------x--------x--x-----x--x--x--------x-----x-----x--x--x--x-----------------x--------x-----x-----x--x--x",
"x--xxxxxxxxxxxxxxxxxxx--x--xxxxxxx--xxxxxxx--xxxx--xxxxxxxxxxxxxxxx--xxxxxxxxxx--x--xxxxxxx--xxxx--x--xxxxxxx--xxxxxxx--x--xxxx--x--xxxx--xxxxxxx--x--x",
"x--------x--------------x-----x--x-----x--x-----x--x-----x-----x--x-----------x--x-----x--x-----x-----------------x--x--x--x--x--x--x--------x-----x--x",
"x--x--x--x--x--x--xxxxxxx--xxxx--xxxx--x--x--x--x--x--xxxx--xxxx--x--x--x--xxxxxxxxxx--x--xxxx--xxxxxxxxxxxxx--xxxx--xxxx--x--xxxxxxx--x--x--xxxx--x--x",
"x--x--x-----x--x--x-----x--x-----x--x--x-----x--x--x--------x--------x--x-----x-----x--x--x--x--------------x--x--------x--------x-----x--x--x--x-----x",
"xxxx--xxxxxxx--xxxx--xxxx--x--x--x--xxxx--xxxx--x--x--xxxx--xxxx--xxxxxxxxxxxxx--x--xxxx--x--x--x--xxxx--xxxxxxxxxx--x--x--xxxx--xxxx--xxxxxxx--x--x--x",
"x--x--x-----x-----x-----------x--------------x--x-----x-----x-----x--x-----x-----x--x--------x--x-----x--x-----x--x--x-----x-----x--------x-----x--x--x",
"x--x--x--xxxxxxx--x--x--xxxx--x--xxxxxxx--xxxx--x--x--xxxxxxx--x--x--x--x--x--xxxx--xxxx--xxxx--xxxxxxxxxx--xxxx--xxxxxxx--x--xxxxxxxxxx--xxxx--xxxx--x",
"x--------x-----x--x--x--x--x--x--x--------x--x--x--x-----------x--x-----x--------x-----------x--x--------x--x--x--x--x--x--x-----------x--x-----x-----x",
"x--xxxx--xxxx--xxxxxxxxxx--xxxxxxx--x--x--x--xxxxxxxxxx--x--xxxx--x--x--xxxxxxxxxxxxxxxx--xxxx--x--x--x--x--x--x--x--x--x--x--x--xxxxxxxxxx--x--x--xxxx",
"x-----x-----x-----x-----x-----------x--x-----x--x--x--x--x--x--x-----x--x-----x--x--x--------x--x--x--x--------x--x-----x--x--x--x--x-----x--x--x-----x",
"xxxx--xxxxxxx--xxxx--xxxxxxxxxx--xxxxxxx--x--x--x--x--xxxxxxx--x--xxxx--x--x--x--x--xxxxxxxxxx--xxxxxxx--xxxxxxx--x--x--xxxx--xxxx--xxxx--xxxx--xxxx--x",
"x-----x-----------x--------x-----------x--x-----x-----x--------x--x--x-----x--x--------------x-----x-----x-----------x--------------x--x--------x--x--x",
"x--xxxx--xxxx--xxxxxxx--xxxx--xxxx--xxxx--x--x--xxxx--xxxx--xxxxxxx--x--x--x--xxxx--xxxx--x--xxxx--xxxx--xxxx--xxxxxxxxxx--xxxxxxxxxx--xxxxxxx--x--x--x",
"x--x--------x-----------------x-----x-----x--x-----------x--------------x--x--------x-----x-----------------------x--------------x--------------------",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--"

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
        new Wall(c,2,r);
      }
    }
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})