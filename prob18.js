var TRI = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
];

// the greedy solution doesn't work
// looks like we'll have to look a little deeper to find a solution
function pickNextGreedily(curRow, curPos) {
  var left = TRI[curRow + 1][curPos]
    , right = TRI[curRow + 1][curPos + 1]
    ;
  return left > right ? curPos : curPos + 1;
}

function getValueForPath(path) {
    var i
      , coords
      , row, col
      , val = 0;
    
    console.log(path.length);
    for(i = 0; i < path.length; i++) {
        coords = path[i];
        row = coords[0];
        col  = coords[1];
        if(row < TRI.length) {
            console.log("row");
            if(col < TRI[row].length) {
                console.log("col");
                val += TRI[row][col]
            }
        }
    }
    
    return val;
}

function pickNextUsingLookahead(curRow, curPos) {
    var left = []
      , right = []
      , leftMax
      , rightMax
      ;
    // left left left
    left.push(getValueForPath([[curRow+1, curPos], [curRow+2, curPos], [curRow+3, curPos]]));
    // left left right
    left.push(getValueForPath([[curRow+1, curPos], [curRow+2, curPos], [curRow+3, curPos+1]]));
    // left right left
    left.push(getValueForPath([[curRow+1, curPos], [curRow+2, curPos+1], [curRow+3, curPos+1]]));
    // left right right
    left.push(getValueForPath([[curRow+1, curPos], [curRow+2, curPos+1], [curRow+3, curPos+2]]));
    
    // right left left
    right.push(getValueForPath([[curRow+1, curPos+1], [curRow+2, curPos+1], [curRow+3, curPos+1]]));
    // right left right
    right.push(getValueForPath([[curRow+1, curPos+1], [curRow+2, curPos+1], [curRow+3, curPos+2]]));
    // right right left
    right.push(getValueForPath([[curRow+1, curPos+1], [curRow+2, curPos+2], [curRow+3, curPos+2]]));
    // right right right
    right.push(getValueForPath([[curRow+1, curPos+1], [curRow+2, curPos+2], [curRow+3, curPos+3]]));
    
    leftMax = Math.max.apply(null, left);
    rightMax = Math.max.apply(null, right);
    
    return leftMax > rightMax ? curPos : curPos + 1;
}

function getMaxPath() {
  var curRow = 0
    , curPos = 0
    , total = 0
    ;

  for( ; curRow < TRI.length - 1; curRow++) {
    total += TRI[curRow][curPos];
    curPos = pickNextUsingLookahead(curRow, curPos);
  }
  total += TRI[curRow][curPos];

  return total;
}

console.log(getMaxPath());
