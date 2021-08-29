function countGoodSubstrings(s: string): number {
    let count = 0;
    
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] !== s[i-1] && s[i] !== s[i+1] && s[i-1] !== s[i+1]) {
            count++;
        }
    }
    
    return count;
};
