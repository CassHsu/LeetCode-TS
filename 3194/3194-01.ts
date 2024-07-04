function minimumAverage(nums: number[]): number {
    nums.sort((a, b) => a - b)
    const res = []
    const size = nums.length / 2

    for (let i = 0; i <size; i++) {
        res.push((nums[i] + nums[nums.length - i - 1]) / 2)
    }

    return Math.min(...res)
};
