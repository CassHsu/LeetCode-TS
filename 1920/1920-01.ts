function buildArray(nums: number[]): number[] {
    const ans = [];
    
    nums.forEach(n => ans.push(nums[n]));
    
    return ans;
};
