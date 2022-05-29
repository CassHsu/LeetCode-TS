function missingNumber(nums: number[]): number {
    let ans = 0
    const size = nums.length
    nums.sort((a, b) => a - b)
    
    if (nums[0] !== 0) ans = 0
    else if (nums[size - 1] !== size) ans = size
    else {
        for (let i = 1; i < size; i++) {
            if (nums[i] !== i) {
                ans = i
                break
            }
        }
    }
    
    return ans
};
