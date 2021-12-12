function largestUniqueNumber(nums: number[]): number {
    const m = new Map();
    const singles = [];
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1);
        else m.set(n, 1);
    });
    
    m.forEach((v, k) => {
        if (v === 1) singles.push(k); 
    });
    
    return singles.length > 0 ? Math.max(...singles) : -1;
};
