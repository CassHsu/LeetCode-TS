function intersection(nums: number[][]): number[] {
    let r = new Set(nums[0])
    
    for (let i = 1; i < nums.length; i++) {
        const ns = new Set(nums[i])
        r = new Set([...r].filter(x => ns.has(x)))
    }
    
    return [...r].sort((a, b) => a- b)
};
