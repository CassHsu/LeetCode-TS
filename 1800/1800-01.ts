function maxAscendingSum(nums: number[]): number {
    let count = nums[0];
    let ans = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            count += nums[i];
        } else {
            count = nums[i];
        }
        
        ans = Math.max(ans, count);
    }
    
    return ans;
};
