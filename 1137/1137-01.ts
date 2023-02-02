function tribonacci(n: number): number {
    const dp = []
    for (let i = 0; i <= n; i++) {
        if (i < 2) dp.push(i)
        else if (i == 2) dp.push(1)
        else dp.push(-1)
    }

    const f = (x) => {
        if (dp[x] != -1) return dp[x]

        dp[x] = f(x - 3) + f(x - 2) + f(x - 1)
        return dp[x]
    }

    f(n)
    return dp[n]
};
