function twoSum(nums: number[], target: number): number[] {
    const m = new Map()
    
    for (const [i, n] of nums.entries()) {
        const find = target - n
        if (m.has(find)) return [m.get(find), i]
        
        m.set(n, i)
    }
    
    
    return [-1, -1]
};
