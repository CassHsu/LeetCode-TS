function numIslands(grid: string[][]): number {
    const ROW = grid.length;
    if (ROW <= 0) return 0;
    
    let islands = 0;
    const COL = grid[0].length;
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            if (grid[r][c] === "1") {
                islands++;
                dfs(grid, ROW, COL, r, c);
            }
        }
    }
    return islands;
};

function dfs(grid: string[][], row: number, col: number, r: number, c: number) {
    if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] !== "1") return;
    
    grid[r][c] = "0";
    dfs(grid, row, col, r+1, c);
    dfs(grid, row, col, r, c+1);
    dfs(grid, row, col, r-1, c);
    dfs(grid, row, col, r, c-1);
}
