function findMaxK(nums: number[]): number {
    let max = -1
    const m = new Map()
    
    nums.forEach(n => {
        if (m.has(n)) m.set(n, m.get(n) + 1)
        else m.set(n, 1)
    })
    
    nums.forEach(n => {
        if (n > 0 && m.has(-n) && n > max) max = n
    })
    
    return max
};
