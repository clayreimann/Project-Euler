// 
// Clay Reimann 2013
// 
// A program to sum the even fibbonachi numbers
// 

// Calculate fibbonachi numbers using memorization
var fib = (function() {
    var fibs = {
        0:1,
        1:1
    }
    return function fibbonachi(n) {
        if(n in fibs)
            return fibs[n];
        var res = fibbonachi(n-1) + fibbonachi(n-2);
        fibs[n] = res;
        return res;
    }
}());

var n = 0;
var evenFibs = [];
for (var i = 1; n < 4000000; i++) {
    n = fib(i);
    if((n%2) === 0) {
        evenFibs.push(n);
    }
}

var total = 0;
for (var i = 0; i < evenFibs.length; i++) {
    total += evenFibs[i]
}

console.log("Fib total: "+total);
