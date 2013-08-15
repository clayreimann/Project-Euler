// 
// Clay Reimann 2013
// 
// A program to determine the sum of the primes under 2,000,000
// 

var TWO_MILLION = 2000000;

// Name:            isPrime(n)
// Description:     Determine if a given number is prime
// Params:
//          n - the number to test
var isPrime = (function() {
    var primes = [2,3,5,7,11,13];

    function isPrime(n) {
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
        var sqrtN = Math.floor(Math.sqrt(n));
        for(var i = 1; 6*i - 1 <= sqrtN; i++) {
            if( n % (6*i - 1) === 0) {
                return false;
            }

            if( n % (6*i + 1) === 0) {
                return false;
            }
        }

        primes.push(n);
        isPrime.count = primes.length;
        isPrime.last = n;
        return true;
    }
    isPrime.count = 6;
    isPrime.last = 13;
    
    return isPrime;
}())

var cnt = 1, sum = 0;

while(cnt < TWO_MILLION) {
    cnt += 1;

    if(isPrime(cnt)) {
        sum += cnt;
    }

    if(cnt % 10000 === 0) {
        console.log("Up to: "+cnt);
    }
}

console.log("Sum of the primes under two million: "+sum);
console.log("Found "+isPrime.count+" primes");
