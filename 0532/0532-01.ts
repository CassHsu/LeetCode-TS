function findPairs(nums: number[], k: number): number {
    let count = 0
    const m = new Map()
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1)
        else m.set(n, 1)
    })
    
    
    if (k > 0) m.forEach((_, key) => { if (m.has(key + k)) count++ })
    if (k === 0) m.forEach((val, _) => { if (val > 1) count++ })
    
    return count
};
