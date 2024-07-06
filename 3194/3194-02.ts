function minimumAverage(nums: number[]): number {
    nums.sort((a, b) => a - b)
    const size = nums.length
    let ans = nums[size - 1]
    let i = 0
    let j = size - 1

    while (i <= j) {
        ans = Math.min(ans, (nums[i] + nums[j])/ 2)
        i += 1
        j -= 1
    }

    return ans
};
