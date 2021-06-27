function uniquePaths(m: number, n: number): number {
    const dp = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            if (i === 0) row.push(1);
            else row.push(0);
            
            if (j === 0) row[0] = 1;
        }
        dp.push(row);
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};
