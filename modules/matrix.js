// Variables

// requires 
var Grass = require('./grass.class');
var GrassEater = require('./grassEater.class');
var Predator = require('./predator.class');
var Vampire = require('./vampire.class');

// for matrix
var matrix = [];
var x = 60;
var y = 60;
var z = x * y;

// for arrays
var allcord = [];
var vampireCord = [];

//for count
var new_cord;
var grassCount = Math.floor(z * 0.4);
var grassEaterCount = Math.floor(z * 0.1);
var predatorCount = Math.floor(z * 0.02);

// Intert 0 to all matrix elements
for (var l = 0; l < x; l++) {
    matrix[l] = [];
    for (var k = 0; k < y; k++) {
        matrix[l][k] = 0;
    }
}

// Push all matrix codinates to "allCord" array and vampire's cordinates to "vampireCord" array
for (var i = 0; i < y; i++) {
    for (var j = 0; j < x; j++) {
        if (i + j == matrix[0].length - 1) {
            vampireCord.push([i, j])
        }
        else {
            allcord.push([i, j]);
        }
    }
}

// Insert 40% Grass to matrix
for (var q = 0; q < grassCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 1;
    allcord.splice(new_cord, 1);
}

// Insert 10% GrassEater to matrix
for (var q = 0; q < grassEaterCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 2;
    allcord.splice(new_cord, 1);
}

// Insert 1% Predator to matrix
for (var q = 0; q < predatorCount; q++) {
    new_cord = Math.floor(Math.random() * allcord.length);
    matrix[allcord[new_cord][0]][allcord[new_cord][1]] = 3;
    allcord.splice(new_cord, 1);
}

// Insert one Vampire on specific cordinate
matrix[matrix.length - 1][0] = 4;

// export matrix
module.exports = matrix;