// Variables

// for matrix
var matrix = [];
var x = 30;
var y = 20;
var side = 35;
var socket; 

var img;
var santa;
var grinch;

function preload() {
  gift = loadImage('img/gift.png');
  santa = loadImage('img/santa.png');
  grinch = loadImage('img/grinch.png');
}

// Start setup function 
function setup() {
  
  background('#acacac');
  frameRate(15);

  socket = io();

  // socket on for matrix
  socket.on("send matrix", function (mtx) {
    matrix = mtx;

    // Start creating Canvas
    createCanvas(x * side, y * side);
    background('#acacac');
    redraw();

    socket.on("redraw", function (mtx) {
      matrix = mtx;
      redraw();
    });
  });
  noLoop();
}

// Start draw function
function draw() {
  background("#acacac");

  // Check elements one by one [1, 2, 3, 4] and draw them
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        // fill("green");
        // rect(j * side, i * side, side, side);
        image(gift, (i * side) + (side / 4), (j * side) + (side / 4), side / 2, side / 2);
      }
      else if (matrix[i][j] == 2) {
        // fill("yellow");
        // rect(j * side, i * side, side, side);
        image(santa, i * side, j * side, side / 1.5, side);
      }
      else if (matrix[i][j] == 3) {
        // fill("red");
        // rect(j * side, i * side, side, side);
        image(grinch, i * side, j * side, side, side);
      }
      // else if (matrix[i][j] == 4) {
      //   fill("purple");
      //   rect(j * side, i * side, side, side);
      // }
      // else {
      //   fill("#acacac");
      //   rect(j * side, i * side, side, side);
      // }
    }
  }
}



