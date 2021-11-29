function targetIndices(nums: number[], target: number): number[] {
    const ans = []
    nums.sort((a, b) => a - b)
    
    for (const [i, n] of nums.entries()) {
        if (n === target) ans.push(i)
    }
    
    return ans
};
