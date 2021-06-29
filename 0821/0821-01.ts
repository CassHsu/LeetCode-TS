function shortestToChar(s: string, c: string): number[] {
    const ans = new Array(s.length).fill(0);
    let prev = -Infinity;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) prev = i;
        ans[i] = i - prev;
    }
    
    prev = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) prev = i;
        ans[i] = Math.min(ans[i], prev - i);
    }
    
    return ans;
};
