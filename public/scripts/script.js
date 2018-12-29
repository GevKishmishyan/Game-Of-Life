// Variables

// for matrix
var matrix = [];
var x = 60;
var y = 60;
var side = 10;
var z = x * y;

// for arrays
var allcord = [];
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var vampireCord = [];
var vampireArr = [];
var vampire;

//for count
var new_cord;
var grassCount = Math.floor(z*0.4);
var grassEaterCount = Math.floor(z*0.1);
var predatorCount = Math.floor(z*0.01);

// Intert 0 to all matrix elements
for (var l = 0; l < x; l++) {
  matrix[l] = [];
  for (var k = 0; k < y; k++) {
    matrix[l][k] = 0;
  }
}

// Push all matrix codinates to "allCord" array and vampire's cordinates to "vampireCord" array
for (var i = 0; i < y; i++) {
  for (var j = 0; j < x; j++){
    if(i + j == matrix[0].length - 1){
      vampireCord.push([i,j])
    }
    else{
      allcord.push([i,j]);
    }
  }
}

// Start setup function 
function setup() {
  // Insert 40% Grass to matrix
  for (var q = 0; q < grassCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 1; 
    allcord.splice(new_cord,1);
  }

  // Insert 10% GrassEater to matrix
  for (var q = 0; q < grassEaterCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 2; 
    allcord.splice(new_cord,1);
  }

  // Insert 1% Predator to matrix
  for (var q = 0; q < predatorCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 3; 
    allcord.splice(new_cord,1);
  }

  // Insert one Vampire on specific cordinate
  matrix[matrix.length-1][0] = 4;

  // Start creating Canvas
  frameRate(15);
  createCanvas(x * side, y * side);
  background('#acacac');

  // Create characters
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        var grass  = new Grass(j, i, 1);
        grassArr.push(grass);
      }
      else if(matrix[i][j] == 2){
        var grassEater  = new GrassEater(j, i, 2);
        grassEaterArr.push(grassEater);
      }
      else if(matrix[i][j] == 3){
        var predator  = new Predator(j, i, 3);
        predatorArr.push(predator);
      }
      else if(matrix[i][j] == 4){
        vampire  = new Vampire(j, i, 4);
      }
    }
  }   
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



