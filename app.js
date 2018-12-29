// requires 
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
var Grass = require('./grass.class');
var GrassEater = require('./grassEater.class');
var Predator = require('./predator.class');
var Vampire = require('./vampire.class');
var matrix = require("./moduls/matrix");


// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.redirect('index.html');
});

// Listen for requests
var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});


io.on("connection", function (socket) {
  socket.emit("send matrix", matrix);

  setInterval(function () {

    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
				if (matrix[i][j] == 1) {
          matrix[i][j].mul();
        }
				else if(matrix[i][j] == 2){
          matrix[i][j].eat();
        }
				else if(matrix[i][j] == 3){
          matrix[i][j].eat();
        }
				else if(matrix[i][j] == 4){
          matrix[i][j].eat();
        }
			}
		}
		// socket.emit("redraw", matrix);
	}, time);

});