function isToeplitzMatrix(matrix: number[][]): boolean {
    const m = new Map();
    
    for (const [r, row] of matrix.entries()) {
        for (const [c, v] of row.entries()) {
            const val = m.get(r - c);
            if (val == null)
                m.set(r - c, v)
            else if (val !== v) return false;
        }
    }
    
    return true;
};
