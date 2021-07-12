function arrangeCoins(n: number): number {
    let l = 0;
    let r = n;
    
    while (l <= r) {
        let m = Math.floor((r + l) / 2);
        let curr = m * (m + 1) / 2;
        
        if (curr === n) return m;
        
        if (n < curr) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    
    return r;
};
