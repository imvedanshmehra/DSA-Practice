/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const answers = [];
    
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    
    while (left <= right && top <= bottom) {
        // traverse left -> right
        for (let i = left; i <= right; i++) {
            answers.push(matrix[top][i]);
        }
        top++;

        // traverse top -> bottom
        for (let i = top; i <= bottom; i++) {
            answers.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // traverse right -> left
            for (let i = right; i >= left; i--) {
                answers.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // traverse bottom -> top
            for (let i = bottom; i >= top; i--) {
                answers.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return answers;
};
