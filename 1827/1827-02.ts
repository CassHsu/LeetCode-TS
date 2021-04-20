function minOperations(nums: number[]): number {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] >= nums[i]) {
            let diff = nums[i-1] - nums[i];
            diff++;
            count += diff;
            nums[i] += diff;
        }   
    }
    return count;
};
