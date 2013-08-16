// 
// Clay Reimann 2013
// 
// A program to determine the largest palindrome resulting from
// the product of two 3-digit numbers
// 

// Name:            isPalendrome(n)
// Description:     Determine if a value is palindromic
// Params:
//          n - the number to test
function isPalendrome(n) {
    var str = n.toString();
    var len = str.length;
    var maxIdx = len - 1;
    for(var i = 0; i < len/2; i++) {
        if(str[i] !== str[maxIdx-i]) {
            return false;
        }
    }
    return true;
}

var palindromes = [];
var i, j, num;

// walk through all the 3 digit numbers
for(i = 100; i < 1000; i++) {
    if(i % 10 === 0) {
        console.log("i: "+i);
    }
    // again
    for (j = 100; j < 1000; j++) {
        num = i * j;   
        if(isPalendrome(num)) {
            palindromes.push(num);
        }
    }
}


i = num = 0;
var len = palindromes.length;
for(i = 0; i < len; i++) {
    if(palindromes[i] > num) {
        num = palindromes[i];
    }
}

console.log(num);
