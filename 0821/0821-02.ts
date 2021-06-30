function shortestToChar(s: string, c: string): number[] {
    const size = s.length;
    const ans = [];
    const pos = [];
    
    for (let i = 0; i < size; i++) {
        if (s[i] === c) pos.push(i);
    }
    
    for (let i = 0; i < size; i++) {
        let n = size;
        pos.forEach(p => { n = Math.min(n, Math.abs(i - p)) });
        ans.push(n);
    }
    
    return ans;
};
