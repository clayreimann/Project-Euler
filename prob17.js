// 
// Clay Reimann 2013
// 
// A program to determine the number of characters for that all of the numbers 
// from 1 to 1000 would take if written out (excluding spaces and hyphens)
// 

// dictionary lookup makes adding I18N much easier
var AND = "and"
var WORDS = {
    1: "one", // .length,
    2: "two", // .length,
    3: "three", // .length,
    4: "four", // .length,
    5: "five", // .length,
    6: "six", // .length,
    7: "seven", // .length,
    8: "eight", // .length,
    9: "nine", // .length,
    10: "ten", // .length,
    11: "eleven", // .length,
    12: "twelve", // .length,
    13: "thirteen", // .length,
    14: "fourteen", // .length,
    15: "fifteen", // .length,
    16: "sixteen", // .length,
    17: "seventeen", // .length,
    18: "eighteen", // .length,
    19: "nineteen", // .length,
    20: "twenty", // .length,
    30: "thirty", // .length,
    40: "forty", // .length,
    50: "fifty", // .length,
    60: "sixty", // .length,
    70: "seventy", // .length,
    80: "eighty", // .length,
    90: "ninety", // .length,
    100: "hundred", // .length,
    1000: "thousand", // .length,
    and: AND // .length
}
var COUNT = {
    1: "one".length,
    2: "two".length,
    3: "three".length,
    4: "four".length,
    5: "five".length,
    6: "six".length,
    7: "seven".length,
    8: "eight".length,
    9: "nine".length,
    10: "ten".length,
    11: "eleven".length,
    12: "twelve".length,
    13: "thirteen".length,
    14: "fourteen".length,
    15: "fifteen".length,
    16: "sixteen".length,
    17: "seventeen".length,
    18: "eighteen".length,
    19: "nineteen".length,
    20: "twenty".length,
    30: "thirty".length,
    40: "forty".length,
    50: "fifty".length,
    60: "sixty".length,
    70: "seventy".length,
    80: "eighty".length,
    90: "ninety".length,
    100: "hundred".length,
    1000: "thousand".length,
    and: AND.length
}

var i, num, piece, word, words = [], count = 0;

for(i = 1; i < 1001; i++) {
    word = "";
    num = i;

    // piece out the thousands
    piece = Math.floor(num / 1000);
    if(piece > 0) {
        word += WORDS[piece] /*+ " "*/ + WORDS[1000]
        count += (COUNT[piece] + COUNT[1000]);
        num = num % 1000;
    }
    
    // piece out the hundreds
    piece = Math.floor(num / 100);
    if(piece > 0) {
        word += WORDS[piece] /*+ " "*/ + WORDS[100];
        count += (COUNT[piece] + COUNT[100]);
        // if(isNaN(count)) {
        //     console.log("<HUNDREDS> Count is NaN @ "+i+" piece: "+piece+" num: "+num);
        // }
        if(num % 100 > 0) {
            word += AND; //(" " + AND + " ");
            count += COUNT[AND];
            // if(isNaN(count)) {
            //     console.log("<AND> Count is NaN @ "+i+" piece: "+(num % 100));
            // }
        }
        num = num % 100;
    }

    // for multiples of 10
    piece = Math.floor(num / 10);
    if(piece > 0) {
        // handle the teens
        if(piece === 1) {
            word += WORDS[num];
            count += COUNT[num];
            // if(isNaN(count)) {
            //     console.log("<TEEN> Count is NaN @ "+i+" piece: "+piece+" num: "+num);
            // }
            words.push(word);
            continue;
        }
        word += WORDS[piece * 10]; //(WORDS[piece * 10] + (num % 10 !== 0 ? "-" : ""));
        count += COUNT[piece * 10];
        // if(isNaN(count)) {
        //     console.log("<TENS> Count is NaN @ "+i+" piece: "+piece+" num: "+num);
        // }
        num = num % 10;
    }

    piece = num % 10;
    if(piece > 0) {
        word += WORDS[piece];
        count += COUNT[piece];
        // if(isNaN(count)) {
        //     console.log("<ONES> Count is NaN @ "+i+" piece: "+piece+" num: "+num);
        // }
    }
    words.push(word);
}

var count2 = 0;
for(i in words) {
    count2 += words[i].length;
}

console.log("The numbers 1 - 1000 contain "+count+" characters.");
console.log("The numbers 1 - 1000 contain "+count2+" characters.");
