// 
// Clay Reimann 2013
// 
// A program to determine the largest prime factor of 600851475143
// 

var BIG_NUMBER = 600851475143;

// Name:            isPrime(n)
// Description:     Determine if a given number is prime
// Params:
//          n - the number to test
var isPrime = (function() {
    var primes = [2,3,5,7,11,13];

    return function isPrime(n) {
        var i, p, l = primes.length;

        // check n against previously computed primes
        for(i = 0; i < l; i++) {
            p = primes[i];

            // we've seen n before
            if(n === p) {
                return true;
            }

            // n has a prime factor
            if( n % p === 0) {
                return false;
            }
        }

        // Obselete with memoriziation
        // // see if number is even
        // if( n % 2 === 0) {
        //     return false;
        // }

        // // see if number is multiple of 3
        // if( n % 3 === 0) {
        //     return false;
        // }

        // see if number is multiple of a number 6k±1 <= sqrt(n)
        var sqrtN = Math.sqrt(n);
        for(var i = 1; 6*i - 1 <= sqrtN; i++) {
            if( n % (6*i - 1) === 0) {
                return false;
            }

            if( n % (6*i + 1) === 0) {
                return false;
            }
        }

        primes.push(n);
        return true;
    };
}())

var sqrtBig = Math.sqrt(BIG_NUMBER);

var possible = [];
for(var i = 2; i <= sqrtBig; i++) {
    if(isPrime(i)) {
        if(BIG_NUMBER % i === 0) {
            possible.push(i);
        }
    }
}

console.log(possible.length);
