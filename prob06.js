// 
// Clay Reimann 2013
// 
// A program to determine the difference between the sum-of-squares
//  and the sum-squared for the first 100 natural numbers
// 

var LIMIT = 101;
var sumSquared = 0;
var sumSquares = 0;

for(i = 0; i < LIMIT; i++) {
    sumSquared += i;
}

sumSquared = Math.pow(sumSquared, 2);

for(i = 0; i < LIMIT; i++) {
    sumSquares += Math.pow(i, 2);
}

var dif = sumSquared - sumSquares;
console.log(dif);
