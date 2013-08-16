// 
// Clay Reimann 2013
// 
// A program to determine the longest colatz sequence for 
// a number starting under 1,000,000
// 

var LIMIT = 1000000;

// Name:            colatz(n)
// Description:     Compute the length of a colatz sequence for n
// Params:
//          n - the number to compute a colatz sequence for
var colatz = (function() {
    var seqs = {1: 0};

    function transform(n) {
        if(n % 2 === 0) {
            return (n / 2);
        } 
        return (3 * n) + 1;
    }

    return function colatz(n) {
        var cnt, tmp;

        // invalid input
        if(n < 1) {
            return -1;
        }

        // memorzied sequence length
        if(n in seqs) {
            return seqs[n];
        }

        cnt = 0;
        tmp = n;
        // save stack space: don't recurse, loop instead
        while(true) {
            tmp = transform(tmp);
            cnt += 1;
            // console.log(tmp+": "+cnt);

            // if we've got a memorzied sequence length
            if(tmp in seqs) {
                return seqs[n] = seqs[tmp] + cnt;
            } else if(tmp === 1) {
                return seqs[n] = cnt;
            }
        }
    };
}());

var num, len, curLen;
len = 0;
for(i = 1; i < LIMIT; i++) {
    if(i % 1000 === 0) {
        console.log("Reached "+i+" of "+LIMIT);
    }
    curLen = colatz(i);
    if(curLen > len) {
        num = i;
        len = curLen;
    }
}

console.log("Longest sequence length: "+len+" for "+num);
