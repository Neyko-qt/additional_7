module.exports = function solveSudoku(matrix) {
    
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          
            if (matrix[i][j] === 0) {
            
                for (var tmp = 1; tmp <= 9; tmp++) {
              
                    if (compareResult(matrix, i, j, tmp)) {
                        matrix[i][j] = tmp;
                        var solution = solveSudoku(matrix);
                
                        if (solution) {
                        return matrix;
                        }
                              
                        matrix[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }

    return true;
      
    
    function compareResult(matrix, tmpCol, tmpRow, result) {
      
      var mainRow = Math.floor(i / 3) * 3;
      var mainCol = Math.floor(j / 3) * 3;
      
      
      // check for cols
      
      for (var col = 0; col < 9; col++) {
        if (col != j && matrix[i][col] === result) {
          return false;
        }
      }
      
      // check for rows
      
      for (var row = 0; row < 9; row++) {
        if (row != i) {
            if (matrix[row][j] === result) {
                return false;
            }
        }
      }

      // check for square 3x3 

      for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
          if (row != i && col != j) {
            if (matrix[mainRow + row][mainCol + col] === result) {
                return false;
            }
          }
        }
      }
      return true;
    }
  }