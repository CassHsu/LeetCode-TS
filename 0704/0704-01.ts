function search(nums: number[], target: number): number {
    let l = 0, r = nums.length - 1
    
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2)
        if (target === nums[m]) return m
        else if (target > nums[m]) l = m + 1
        else r = m - 1
    }
    
    return -1
};
