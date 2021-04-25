function climbStairs(n: number): number {
    if (n == 1) return 1;
    
    const dp: number[] = [];
    for (let i = 0; i <= n; i++) {
        dp.push(0);
    }
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
