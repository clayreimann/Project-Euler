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
  [04, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
];

function getIndexOfNextMax(curRow, curPos) {
  var left = TRI[curRow + 1][curPos]
    , right = TRI[curRow + 1][curPos + 1]
    ;
  if(left === right) {
    var leftLeft = TRI[curRow + 2][curPos]
      , leftRight = TRI[curRow + 2][curPos + 1]
      , rightLeft = TRI[curRow + 2][curPos + 1]
      , rightRight = TRI[curRow + 2][curPos + 2]
      ;
    if((leftLeft > rightRight && leftLeft > rightLeft) 
        || (leftRight > rightRight && leftRight > rightLeft)) {
      return curPos;
    } else {
      return curPos + 1;
    }
  }
  return left > right ? curPos : curPos + 1;
}

function getMaxPath() {
  var curRow = 0
    , curPos = 0
    , total = 0
    ;

  for( ; curRow < TRI.length - 1; curRow++) {
    total += TRI[curRow][curPos];
    curPos = getIndexOfNextMax(curRow, curPos);
  }
  total += TRI[curRow][curPos];

  return total;
}

