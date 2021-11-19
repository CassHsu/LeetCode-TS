function getMaximumGenerated(n: number): number {
    if (n == 0) return 0;
    
    const dp = new Array(n+1).fill(0)
    dp[1] = 1
    
    const m = Math.floor((n + 1) / 2)
    for (let i = 1; i < m; i++) {
        dp[2 * i] = dp[i]
        dp[(2 * i) + 1] = dp[i] + dp[i + 1]
    }
    
    return Math.max(...dp)
};
