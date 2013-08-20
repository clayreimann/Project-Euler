// 
// Clay Reimann 2013
// 
// A program to determine the number of lattice paths
// through a 20x20 grid while only traveling right & down
// 

// Name:            pascalTriangleRow(row)
// Description:     Compute a row in pascal's triangle
// Params:
//          row - the row number
function pascalTriangleRow(row) {
    var cnt, cur, prev, nums = [];
    if(row < 0) {
        return nums;
    }
    
    cnt = 1;
    cur = 1;
    do {
        nums.push(cur);
        prev = cur;
        cur = Math.round(prev * ((row + 1 - cnt) / cnt));
        cnt += 1;
    } while(cnt <= row)
    // compensate for row starting at item 0
    nums.push(cur);
    return nums;
}

// use the numbers from pascal's triangle
// since the number of paths from one corner
// to another corresponds to the numbers in the triangle
var size = 20;
var row = pascalTriangleRow(2*size)

// we want the middle term
console.log(row[Math.floor(row.length/2)]);
