function minimumSum(num: number): number {
    const nums = num.toString().split('').sort()
    return Number(nums[0] + nums[2]) + Number(nums[1] + nums[3])
};
