// Class for Predator
class Predator{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 10;
		this.multiply = 0;
	}

	newDirections(){
		this.directions = [
		    [this.x - 2, this.y - 2],
		    [this.x - 1, this.y - 2],
		    [this.x    , this.y - 2],
		    [this.x + 1, this.y - 2],
		    [this.x + 2, this.y - 2],

		    [this.x - 2, this.y - 1],
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x + 2, this.y - 1],

		    [this.x - 2, this.y    ],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x + 2, this.y    ],

		    [this.x - 2, this.y + 1],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1],

		    [this.x - 2, this.y + 2],
		    [this.x - 1, this.y + 2],
		    [this.x    , this.y + 2],
		    [this.x + 1, this.y + 2],
		    [this.x + 2, this.y + 2]
		];
	}

	getDirections(t){
		this.newDirections();
		var found = [];
		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

    // Predator multiply
	mul(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newPredator = new Predator(x,y,this.index);
			predatorArr.push(newPredator);
			matrix[y][x] = 3;
		}
	}

    // Predator move
	move(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
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
	eat(){
		var eatCord = this.getDirections(2);
		var cord = random(eatCord);	
		if(cord){
	        var n = cord[0];
	        var m = cord[1];
	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 3;
	        this.x = n;
	        this.y = m;
	        for (var i in grassEaterArr){
	        	if (grassEaterArr[i].x == n && grassEaterArr[i].y == m){
	        		grassEaterArr.splice(i, 1);
	        	}
	        }
	        this.energy++;
	        if (this.energy == 15){
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

    // Predator die
	die(){
		matrix[this.y][this.x] = 0;
		for (var i in predatorArr){
			if (predatorArr[i].x == this.x && predatorArr[i].y == this.y){
                predatorArr.splice(i, 1);
	        }
		}
	}
}
