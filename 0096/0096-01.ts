function numTrees(n: number): number {
    const cache = new Map();
    
    const getNum = (k) => {
        if (k == 0) return 1;
        if (cache.has(k)) return cache.get(k);

        let ans = 0;
        for (let i = 1; i <= k; i++) {
            ans += getNum(i - 1) * getNum(k - i);
        }
        cache.set(k, ans);
        return ans;
    }
    
    return getNum(n);
};
