function countLetters(s: string): number {
    let count = 1
    const dp = [1]
    
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] === s[i]) dp.push(dp[i-1] + 1)
        else dp.push(1)
        
        count += dp[i]
    }
    
    return count
};
