function countLetters(s: string): number {
    let count = 1
    let dp = 1
    
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] == s[i]) dp++
        else dp = 1
        count += dp
    }
    
    return count
};
