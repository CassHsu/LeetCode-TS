function findUnsortedSubarray(nums: number[]): number {
    let l = nums.length;
    let r = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                r = Math.max(r, j);
                l = Math.min(l, i);
            }
        }
    }
    
    return r - l < 0 ? 0 : r - l + 1;
};
