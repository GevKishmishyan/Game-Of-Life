// Class for Vampire
class Vampire{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
	}

	getDirections(t){
		var found = [];
		for(var i in vampireCord){
			var x = vampireCord[i][0];
			var y = vampireCord[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[x][y] == t){
					found.push(vampireCord[i]);
				}
			}
		}
		return found;
	}

    // Vampire eat
	eat(){
		var eatCord = this.getDirections(2);
		var cord = random(eatCord);		
		if(cord){
	        var m = cord[0];
	        var n = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 4;
	        this.x = n;
	        this.y = m;	
	        for (var i in predatorArr){
				if (predatorArr[i].x == n && predatorArr[i].y == m){
		        	predatorArr.splice(i, 1);
		        }
			}
		}
	}

}