module.exports = function solveSudoku(matrix) {
    
    
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
          
          if (matrix[i][j] === 0) {
            
                for (var tmp = 1; tmp <= 9; tmp++) {
              
                    if (compareResult(matrix, i, j, tmp)) {
                        matrix[i][j] = tmp;
                        if (solveSudoku(matrix) != 0) {
                            return matrix;
                        } else {
                            matrix[i][j] = 0;
                        }     
                    }
                }
                return false;
            }
        }
    }
    return true;
      
    
    function compareResult(matrix, tmpRow, tmpCol, tmpValue) {

      // check for cols
      
      for (var col = 0; col < 9; col++) {
        if (matrix[tmpRow][col] === tmpValue && col != tmpCol) {
          return false;
        }
      }
      
      // check for rows
      

      for (var row = 0; row < 9; row++) {
        if (matrix[row][tmpCol] === tmpValue && row != tmpRow) {
            return false;
        }
      }

      // check for square 3x3 

      var mainRow = Math.floor(tmpRow / 3) * 3;
      var mainCol = Math.floor(tmpCol / 3) * 3;

      for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
          if (row != tmpRow) {
              if (col != tmpCol) {
                if (matrix[mainRow + row][mainCol + col] === tmpValue) {
                    return false;
                }
              }
          }
        }
      }
      return true;
    }
  }