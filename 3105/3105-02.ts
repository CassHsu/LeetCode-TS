function longestMonotonicSubarray(nums: number[]): number {
    let mx = 1, up = 1, dn = 1

    for (let i = 1; i < nums.length; i++) {
        up = (nums[i] > nums[i - 1]) ? up + 1: 1
        dn = (nums[i] < nums[i - 1]) ? dn + 1: 1
        mx = Math.max(mx, up, dn)
    }
    
    return mx
};
