function largestLocal(grid: number[][]): number[][] {
    const res = []
    
    for (let r = 0; r <= grid.length - 3; r++) {
        const mx = []
        for (let c = 0; c <= grid[0].length - 3; c++) {
            const v1 = Math.max(grid[r][c], grid[r][c + 1], grid[r][c + 2])
            const v2 = Math.max(grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2])
            const v3 = Math.max(grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2])
            
            mx.push(Math.max(v1, v2, v3))
        }
        
        res.push(mx)
    }
    
    return res
};
