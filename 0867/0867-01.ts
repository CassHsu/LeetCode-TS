function transpose(matrix: number[][]): number[][] {
    const ans = [];
    const w = matrix[0].length;
    const h = matrix.length;
    
    for (let c = 0; c < w; c++) {
        const tmp = [];
        for (let r = 0; r < h; r ++) {
            tmp.push(matrix[r][c]);
        }
        ans.push(tmp);
    }
    
    return ans;
};
