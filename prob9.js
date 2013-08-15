// 
// Clay Reimann 2013
// 
// A program to find the Pythagorean triple such that a + b + c = 1000
// 


// Name:            generateTriple(m, n)
// Description:     Generate a Pythagorean triple using the formula from
//                  http://en.wikipedia.org/wiki/Pythagorean_triplet#Generating_a_triple
// Params:
//          m - an integer
//          n - an integer < m
function generateTriple(m, n) {
    var a, b, c;
    a = Math.pow(m, 2) - Math.pow(n, 2);
    b = 2 * m * n;
    c = Math.pow(m, 2) + Math.pow(n, 2);
    return {"a": a, "b": b, "c": c};
}


// Generate triplets 
//  if 1000 % sum(triple) == 0 then
//      multiply triple by consecutive integers until we find the triple we are looking for
var i, j, quit, trip, sum, k, a2, b2, c2, product, proof;

quit = false;
for(i = 2; i < 10; i++) {
    if(quit) break;

    for(j = 1; j < i; j++) {
        if(quit) break;
        trip = generateTriple(i, j);
        sum = trip.a + trip.b + trip.c;

        // console.log("i: "+i+" j: "+j+" sum: "+sum);

        if(1000 % sum === 0) {
            // console.log("Found base triple: "+JSON.stringify(trip));
            k = 0;
            while(sum !== 1000 && sum < 1000) {
                k += 1;
                sum = (k * trip.a) + (k * trip.b) + (k * trip.c);
            }
            quit = true;
            break;
        }
    }
}

// scale the triple appropriatly
trip.a = trip.a * k;
trip.b = trip.b * k;
trip.c = trip.c * k;

sum = trip.a + trip.b + trip.c;
product = trip.a * trip.b * trip.c;
a2 = Math.pow(trip.a, 2);
b2 = Math.pow(trip.b, 2);
c2 = Math.pow(trip.c, 2);
proof = (a2 + b2 === c2)

console.log("Triple: "+trip.a+", "+trip.b+", "+trip.c+" | k: "+k);
console.log("a^2 + b^2 = c^2 === "+a2+" + "+b2+" = "+c2+" ? "+(proof ? "Yes" : "No"));
console.log("Sum: "+sum);
console.log("Product: "+(trip.a * trip.b * trip.c));
