function runningSum(nums: number[]): number[] {
    const ret = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        ret.push(nums[i] + ret[i-1]);
    }
    return ret;
};
