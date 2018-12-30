var forGrassAndGrassEater = require('./forGrassAndGrassEater');
// Class for GrassEater
module.exports = class GrassEater extends forGrassAndGrassEater{

    // GrassEater multiply
	mul(matrix, grassEaterArrNew){
		var emptyCord = this.getDirections(matrix, 0);
		var cord = getRandomCord(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newGrassEater = new GrassEater(x,y,this.index);
			grassEaterArrNew.push(newGrassEater);
			matrix[y][x] = 2;
		}		
	}

    // GrassEater move
	move(matrix){
		var emptyCord = this.getDirections(matrix, 0);
		var cord = getRandomCord(emptyCord);
		if (cord){
			var n = cord[0];
			var m = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[m][n] = 2;
			this.x = n;
			this.y = m;
		}
	}

    // GrassEater eat [include move, mul, die]
	eat(matrix, grassArrForGrassEater, grassEaterArrNew){
		var eatCord = this.getDirections(matrix, 1);
		var cord = getRandomCord(eatCord);		
		if(cord){
	        var n = cord[0];
	        var m = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 2;
	        this.x = n;
	        this.y = m;
	        for (var i in grassArrForGrassEater){
	        	if (grassArrForGrassEater[i].x == n && grassArrForGrassEater[i].y == m){
	        		grassArrForGrassEater.splice(i, 1);
	        	}
	        }
	        this.energy++;
	        if (this.energy == 10){
	        	this.mul(matrix, grassEaterArrNew);
	        	this.energy = 5;
	        }  
		}
		else{
			this.move(matrix);
			this.energy--;
			if (this.energy == 0){
				this.die(matrix, grassEaterArrNew);
				this.energy = 5;
			}
		}
	}

    // GrassEater die
	die(matrix, grassEaterArrNew){
		matrix[this.y][this.x] = 0;
		for (var i in grassEaterArrNew){
			if (grassEaterArrNew[i].x == this.x && grassEaterArrNew[i].y == this.y){
				grassEaterArrNew.splice(i, 1);
	        }
		}
	}
}

function getRandomCord(arr)
{
    var randomItem = Math.floor(Math.random() * arr.length);
    return arr[randomItem];
}

