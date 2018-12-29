// Class for GrassEater
class GrassEater extends forGrassAndGrassEater{

    // GrassEater multiply
	mul(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newGrassEater = new GrassEater(x,y,this.index);
			grassEaterArr.push(newGrassEater);
			matrix[y][x] = 2;
		}		
	}

    // GrassEater move
	move(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
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
	eat(){
		var eatCord = this.getDirections(1);
		var cord = random(eatCord);		
		if(cord){
	        var n = cord[0];
	        var m = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 2;
	        this.x = n;
	        this.y = m;
	        for (var i in grassArr){
	        	if (grassArr[i].x == n && grassArr[i].y == m){
	        		grassArr.splice(i, 1);
	        	}
	        }
	        this.energy++;
	        if (this.energy == 10){
	        	this.mul();
	        	this.energy = 5;
	        }  
		}
		else{
			this.move();
			this.energy--;
			if (this.energy == 0){
				this.die();
				this.energy = 5;
			}
		}
	}

    // GrassEater die
	die(){
		matrix[this.y][this.x] = 0;
		for (var i in grassEaterArr){
			if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y){
	        		grassEaterArr.splice(i, 1);
	        }
		}
	}
}
