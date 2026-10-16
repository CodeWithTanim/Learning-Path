function diagonalSums(matrix) {
    // Write your code here
    const n = matrix.length;
    let main = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++) {
        main += matrix[i][i];
        secondary += matrix[i][n - 1 - i];
    }

    return { main, secondary };
}