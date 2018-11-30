// GRASS CLASS
class Grass{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
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
		console.log(found);
	}

// GRASS MUL
	mul(){
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(0);
			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);
				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

	die(){

	}
}


// XOTAKER CLASS
class Xotaker{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		this.eatCount = 0;
		
	}

	newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
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

	mul(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newXotaker = new Xotaker(x,y,this.index);
			xotakerArr.push(newXotaker);
			matrix[y][x] = 2;
		}
		
	}

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
// XOTAKER EAT, MOVE, MUL AND DIE
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

	        for (var i in xotArr){
	        	if (xotArr[i].x == n && xotArr[i].y == m){
	        		xotArr.splice(i, 1);
	        	}
	        }

	        this.eatCount++;
	        if (this.eatCount > 10){
	        	this.mul();
	        	this.eatCount = 0;
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

	die(){
		matrix[this.y][this.x] = 0;
		for (var i in xotakerArr){
			if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y){
	        		xotakerArr.splice(i, 1);
	        }
		}
	}
}


// GISHATICH CLASS
class Gishatich{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 10;
		this.multiply = 0;
		this.eatCount = 0;
		
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

	mul(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			var newGishatich = new Gishatich(x,y,this.index);
			gishatichArr.push(newGishatich);
			matrix[y][x] = 3;
		}
		
	}

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
// GISHATICH EAT, MOVE, MUL AND DIE
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

	        for (var i in xotakerArr){
	        	if (xotakerArr[i].x == n && xotakerArr[i].y == m){
	        		xotakerArr.splice(i, 1);
	        	}
	        }

	        this.eatCount++;
	        if (this.eatCount > 15){
	        	this.mul();
	        	this.eatCount = 0;
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

	die(){
		matrix[this.y][this.x] = 0;
		for (var i in gishatichArr){
			if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y){
	        		gishatichArr.splice(i, 1);
	        }
		}
	}
}


// VAMPIR CLASS
class Vampir{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		this.eatCount = 0;
		// this.directions = [];

		// for (var i = 1; i <= matrix.length; i++){
		// 	this.x = this.x + i;
		// 	this.y = this.y - i;

		// 	var x = this.x;
		// 	var y = this.y;

		// 	this.directions.push([x,y])
		// }
	}

	getDirections(t){
		var found = [];
		for(var i in vampirCord){
			var x = vampirCord[i][0];
			var y = vampirCord[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[x][y] == t){
					found.push(vampirCord[i]);
				}
			}
		}
		return found;
	}

	move(){
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);

		if (cord){
			var m = cord[0];
			var n = cord[1];
			matrix[this.y][this.x] = 0;
			matrix[m][n] = 4;
			this.x = n;
			this.y = m;
		}
	}

// XOTAKER EAT, MOVE, MUL AND DIE
	eat(){
		var eatCord = this.getDirections(3);
		//console.log(eatCord);
		var cord = random(eatCord);		
		//console.log(cord);
		if(cord){
	        var m = cord[0];
	        var n = cord[1];

	        matrix[this.y][this.x] = 0;
	        matrix[m][n] = 4;
	        this.x = n;
	        this.y = m;	
	        console.log("x");
	        for (var i in gishatichArr){
				if (gishatichArr[i].x == n && gishatichArr[i].y == m){
		        	gishatichArr.splice(i, 1);
		        }
			}

	
		}
		// else{
		// 	this.move();
			
		// }
	}

}