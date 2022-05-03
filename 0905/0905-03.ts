function sortArrayByParity(nums: number[]): number[] {
    let l = 0, r = nums.length - 1
    
    while (l < r) {
        if (nums[l] % 2 > nums[r] % 2) {
            const t = nums[l]
            nums[l] = nums[r]
            nums[r] = t
        }
        
        if (nums[l] % 2 == 0) l++
        if (nums[r] % 2 == 1) r--
    }
    
    return nums
};
