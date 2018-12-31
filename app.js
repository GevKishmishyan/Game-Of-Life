// Variables

// requires 
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
var Grass = require('./modules/grass.class');
var GrassEater = require('./modules/grassEater.class');
var Predator = require('./modules/predator.class');
var Vampire = require('./modules/vampire.class');
var matrix = require("./modules/matrix");

// arrays for Characters
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var vampire;

app.use(express.static("./public"));
app.get('/', function (req, res) {
  res.redirect('index.html');
});

// Listen for requests
server.listen(3000);


// Create characters
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
          var grass = new Grass(j, i, 1);
          grassArr.push(grass);
      }
      else if (matrix[i][j] == 2) {
          var grassEater = new GrassEater(j, i, 2);
          grassEaterArr.push(grassEater);
      }
      else if (matrix[i][j] == 3) {
          var predator = new Predator(j, i, 3);
          predatorArr.push(predator);
      }
      else if (matrix[i][j] == 4) {
          vampire = new Vampire(j, i, 4);
      }
  }
} 

// io connection
io.on("connection", function (socket) {
  socket.emit("send matrix", matrix);

  setInterval(function () {

    // Grass multiply
    for (var i in grassArr) {
      grassArr[i].mul(matrix, grassArr);
    }
    // GrassEater eat [include move, mul, die]
    for (var i in grassEaterArr) {
      grassEaterArr[i].eat(matrix, grassArr, grassEaterArr);
    }
    // Predator eat [include move, mul, die]
    for (var i in predatorArr) {
      predatorArr[i].eat(matrix, grassEaterArr, predatorArr);
    }
    // Vampire eat
    vampire.eat(matrix, grassEaterArr);

		socket.emit("redraw", matrix);
}, time);

});

// creating time for set interval
var time = frameRate(1);
function frameRate(frameCount) {
  return 1000 / frameCount;
}