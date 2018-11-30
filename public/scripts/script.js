// INSERT VARIABLES
var matrix = [];
var x = 60;
var y = 60;
var side = 10;
var z = x * y;

var allcord = [];
var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vampirCord = [];
var vampirArr = [];

var vampir;

var new_cord;
var xotCount = Math.floor(z*0.4);
var xotakerCount = Math.floor(z*0.1);
var gishatichCount = Math.floor(z*0.001);

// INSERT 0 TO ALL ELEMENTS IN MATRIX
for (var l = 0; l < x; l++) {
  matrix[l] = [];
  for (var k = 0; k < y; k++) {
    matrix[l][k] = 0;
  }
}

// PUSH ALL CORDINATS IN 1 ARRAY
for (var i = 0; i < y; i++) {
  for (var j = 0; j < x; j++){
    if(i + j == matrix[0].length - 1){
      vampirCord.push([i,j])
    }
    else{
      allcord.push([i,j]);
    }
  }
}

function setup() {

// PUSH 40%   (1)  TO MATRIX
  for (var q = 0; q < xotCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 1; 
    allcord.splice(new_cord,1);
  }

// PUSH 10%   (2)  TO MATRIX
  for (var q = 0; q < xotakerCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 2; 
    allcord.splice(new_cord,1);
  }

// PUSH 5%  (3) TO MATRIX
  for (var q = 0; q < gishatichCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 3; 
    allcord.splice(new_cord,1);
  }

  matrix[matrix.length-1][0] = 4;

// CANVAS
  frameRate(15);
  createCanvas(x * side, y * side);
  background('#acacac');

// INSERT XOT AND XOTAKER
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        var xotik  = new Grass(j, i, 1);
        xotArr.push(xotik);

      }

      else if(matrix[i][j] == 2){
        var xotaker  = new Xotaker(j, i, 2);
        xotakerArr.push(xotaker);
      }

      else if(matrix[i][j] == 3){
        var gishatich  = new Gishatich(j, i, 3);
        gishatichArr.push(gishatich);
      }

      else if(matrix[i][j] == 4){
        vampir  = new Vampir(j, i, 4);
        //vampirArr.push(vampir);
      }
    }
  }   
}


function draw() {
  background("#acacac");

// CHECK IF ELEMENT IS 1, 2, OR 3
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

// XOT MULTIPLY
  for(var i in xotArr){
    xotArr[i].mul();
  }

// XOTAKER EAT, MULTIPLY, MOVE, DIE
  for(var i in xotakerArr){
    xotakerArr[i].eat();
  }

// GISHATICH EAT, MULTIPLY, MOVE, DIE
  for(var i in gishatichArr){
    gishatichArr[i].eat();

 }
// VAMPIR MOVE, EAT
vampir.eat();


  


}



