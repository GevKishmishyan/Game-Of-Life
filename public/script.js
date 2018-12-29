// Variables

// for matrix
var matrix = [];
var x = 60;
var y = 60;
var side = 10;
// var z = x * y;

// // for arrays
// var allcord = [];
// var grassArr = [];
// var grassEaterArr = [];
// var predatorArr = [];
// var vampireCord = [];
// var vampireArr = [];
// var vampire;



// Start setup function 
function setup() {

  // Start creating Canvas
  background('#acacac');
  frameRate(15);
  createCanvas(x * side, y * side);
  background('#acacac');

  // // Create characters
  // for(var i = 0; i < matrix.length; i++){
  //   for(var j = 0; j < matrix[i].length; j++){
  //     if(matrix[i][j] == 1){
  //       var grass  = new Grass(j, i, 1);
  //       grassArr.push(grass);
  //     }
  //     else if(matrix[i][j] == 2){
  //       var grassEater  = new GrassEater(j, i, 2);
  //       grassEaterArr.push(grassEater);
  //     }
  //     else if(matrix[i][j] == 3){
  //       var predator  = new Predator(j, i, 3);
  //       predatorArr.push(predator);
  //     }
  //     else if(matrix[i][j] == 4){
  //       vampire  = new Vampire(j, i, 4);
  //     }
  //   }
  // }   
}

// Start draw function
function draw() {
  background("#acacac");

  // Check elements one by one [1, 2, 3, 4] and draw them
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2){
        fill("yellow");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 3){
        fill("red");
        rect(j * side, i * side, side, side);
      }   
      else if(matrix[i][j] == 4)
      {
        fill("purple");
        rect(j * side, i * side, side, side);
      }
      else
      {
        fill("#acacac");
        rect(j * side, i * side, side, side);
      }
    }
  }

  // Grass multiply
  for(var i in grassArr){
    grassArr[i].mul();
  }
  // GrassEater eat [include move, mul, die]
  for(var i in grassEaterArr){
    grassEaterArr[i].eat();
  }
  // Predator eat [include move, mul, die]
  for(var i in predatorArr){
    predatorArr[i].eat();
  }
  // Vampire eat
  vampire.eat();
}



