var forGrassAndGrassEater = require('./forGrassAndGrassEater');
// class for Grass
module.exports = class Grass extends forGrassAndGrassEater{

    // Grass multiply
	mul(matrix, grassArrNew){
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(matrix, 0);
			var cord = getRandomCord(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				var newGrass = new Grass(x,y,this.index);
				grassArrNew.push(newGrass);
				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

    // Grass die
	die(){

	}
}

function getRandomCord(arr)
{
    var randomItem = Math.floor(Math.random() * arr.length);
    return arr[randomItem];
}
