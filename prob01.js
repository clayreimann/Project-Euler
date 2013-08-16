// 
// Clay Reimann 2013
// 
// A program to sum the natual numbers which are either multiples 
// of 3 or of 5 and are < 1000
// 


// Name:        getMultiples
// Purpose:     Get all the multiples of n < below a given limit
// Params:
//          n - the desired base
//          max - the upper bound
// Return:      An array of the multiples
function getMultiples (n, max) {
    var muls = [];
    for (var i = 0; (i * n) < max; i++) {
        muls.push(i*n);
    }
    return muls;
}

// get the multiples of 3 and of 5
var upperBound = 1000;
var allMuls = [];
var muls3 = getMultiples(3, upperBound);
var muls5 = getMultiples(5, upperBound);

// merge the lists
var idx3 = 0, l3 = muls3.length;
var idx5 = 0, l5 = muls5.length;
while(idx3 < l3 || idx5 < l5) {
    if(idx5 === l5) {
        allMuls.push(muls3[idx3]);
        idx3++;

    } else if(muls3[idx3] == muls5[idx5]) {
        allMuls.push(muls3[idx3]);
        idx3++;
        idx5++;

    } else if(muls3[idx3] < muls5[idx5]) {
        allMuls.push(muls3[idx3]);
        idx3++;

    } else if(muls3[idx3] > muls5[idx5]) {
        allMuls.push(muls5[idx5]);
        idx5++;

    } else {
        console.log("WTF? 3:"+idx3+" | 5:"+idx5);
        console.log("m3: "+muls3[idx3]+" | m5: "+muls5[idx5]);
    }
}

// Sum the multiples
var total = 0;
for (var i = 0; i < allMuls.length; i++) {
    total += allMuls[i]
}

console.log("Total under "+upperBound+": "+total);
