function findChampion(grid: number[][]): number {
    const n = grid.length
    const m = grid[0].length

    for (let i = 0; i < n; i++) {
        let sum = 0
        for (let j = 0; j < m; j++) {
            sum += grid[i][j]
        }

        if (sum == n - 1) return i
    }
    
    return 0;    
};
