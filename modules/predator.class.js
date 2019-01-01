var forPredator = require('./forPredator');
// Class for Predator
module.exports = class Predator extends forPredator{
	
    // Predator multiply
	mul(matrix, predatorArrNew){
		var emptyCord = this.getDirections(matrix, 0);
		var cord = getRandomCord(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newPredator = new Predator(x,y,this.index);
			predatorArrNew.push(newPredator);
			matrix[y][x] = 3;
		}
	}

    // Predator move
	move(matrix){
		var emptyCord = this.getDirections(matrix, 0);
		var cord = getRandomCord(emptyCord);
		if (cord){
			var n = cord[0];
			var m = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[m][n] = 3;
			this.x = n;
			this.y = m;
		}
    }
    
    // Predator eat [include move, mul, die]
	eat(matrix, grassEaterArrForPredator, predatorArrNew){
		var eatCord = this.getDirections(matrix, 2);
		var cord = getRandomCord(eatCord);	
		if(cord){
	        var n = cord[0];
	        var m = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 3;
	        this.x = n;
	        this.y = m;
	        for (var i in grassEaterArrForPredator){
	        	if (grassEaterArrForPredator[i].x == n && grassEaterArrForPredator[i].y == m){
	        		grassEaterArrForPredator.splice(i, 1);
	        	}
	        }
	        this.energy++;
	        if (this.energy == 10){
	        	this.mul(matrix, predatorArrNew);
	        	this.energy = 10;
	        }  
		}
		else{
			this.move(matrix);
			this.energy--;
			if (this.energy == 0){
				this.die(matrix, predatorArrNew);
				this.energy = 5;
			}
		}
	}

    // Predator die
	die(matrix, predatorArrNew){
		matrix[this.y][this.x] = 0;
		for (var i in predatorArrNew){
			if (predatorArrNew[i].x == this.x && predatorArrNew[i].y == this.y){
                predatorArrNew.splice(i, 1);
	        }
		}
	}
}

function getRandomCord(arr)
{
    var randomItem = Math.floor(Math.random() * arr.length);
    return arr[randomItem];
}

