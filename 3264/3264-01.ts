function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for (let i = 0; i < k; i++) {
        let n = nums.indexOf(Math.min(...nums))
        nums[n] *= multiplier
    }

    return nums
};
