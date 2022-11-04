function findMaxK(nums: number[]): number {
    let res = -1
    const m = new Map()
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1)
        else m.set(n, 1)
        
        if (m.has(-n)) res = Math.max(res, Math.abs(n))
    })
    
    
    return res
};
