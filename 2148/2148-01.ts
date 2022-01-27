function countElements(nums: number[]): number {
    let count = 0
    nums.sort((a, b) => a - b)
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    
    for (let i = 1; i < nums.length; i++) {
        if (max > nums[i] && nums[i] > min) count++   
    }
    
    return count
};
