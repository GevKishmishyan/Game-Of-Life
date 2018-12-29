// class for Grass
class Grass extends LivingCreature{

    // Grass multiply
	mul(){
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(0);
			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];
				var newGrass = new Grass(x,y,this.index);
				grassArr.push(newGrass);
				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

    // Grass die
	die(){

	}
}
