function isToeplitzMatrix(matrix: number[][]): boolean {
    for (const [r, row] of matrix.entries())
        for (const [c, v] of row.entries())
            if (r > 0 && c > 0 && v !== matrix[r - 1][c - 1])
                return false
    
    return true;
};
