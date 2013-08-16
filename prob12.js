// 
// Clay Reimann 2013
// 
// A program to determine the first triangle number with more than 500 divisors
// 

var NUM_DIVISORS = 500;

// Name:            triangleNumber(n)
// Description:     Compute the nth triangle number
// Params:
//          n - the desired triangle number
var triangleNumber = (function() {
    // cached values
    var triNums = {1: 1};

    return function triangleNumber(n) {
        var num;

        // see if we've got it cached
        if(n in triNums) {
            return triNums[n];
        }

        // assignment evaluates to RHS, piggyback on this
        return triNums[n] = triangleNumber(n-1) + n;
    }
}());

// Name:            numFactors(n)
// Description:     Compute the number of factors of n
// Params:
//          n - the number to be factored
function numFactors(n) {
    var i, cnt, sqrt;

    cnt = 0;
    sqrt = Math.sqrt(n);

    for(i = 1; i <= sqrt; i++) {
        if(n % i === 0) {
            // don't double count factors for square numbers
            cnt += (i !== sqrt) ? 2 : 1;
        }
    }

    return cnt;
}

var i, n, factors;

i = 1;
while(true) {
    n = triangleNumber(i);

    if(numFactors(n) > 500) {
        break;
    }

    if(i % 50 === 0) {
        console.log("n("+i+"): "+n+" factors: "+numFactors(n));
    }

    i += 1;
}

console.log("Triangle number: "+n+" has "+numFactors(n)+" divisors.");
