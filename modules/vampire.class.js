// Class for Vampire
module.exports = class Vampire{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
	}

	newDirections(matrix){
		this.directions = [];

		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix[i].length; j++) {
				if (i + j == matrix[0].length - 1) {
					this.directions.push([i, j])
				}
			}
		}
	}

	getDirections(matrix, t){
		this.newDirections(matrix);
		var found = [];
		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[x][y] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

    // Vampire eat
	eat(matrix, predatorArrNew){
		var eatCord = this.getDirections(matrix, 3);
		var cord = getRandomCord(eatCord);		
		if(cord){
	        var m = cord[0];
	        var n = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 4;
	        this.x = n;
	        this.y = m;	
	        for (var i in predatorArrNew){
				if (predatorArrNew[i].x == n && predatorArrNew[i].y == m){
		        	predatorArrNew.splice(i, 3);
		        }
			}
		}
	}

}

function getRandomCord(arr)
{
    var randomItem = Math.floor(Math.random() * arr.length);
    return arr[randomItem];
}

