function mostFrequent(nums: number[], key: number): number {
    const m = new Map()
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            if (m.has(nums[i])) m.set(nums[i], m.get(nums[i]) + 1)
            else m.set(nums[i], 1)
        }
    }
    
    let ans = nums[0]
    let max = 0
    
    m.forEach((v, k) => {
        if (v > max) {
            max = v
            ans = k
        }
    })
    
    return ans
};
