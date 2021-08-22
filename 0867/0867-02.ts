function transpose(matrix: number[][]): number[][] {
    return matrix[0].map((col, i) => matrix.map((row, j) => matrix[j][i]));
};
