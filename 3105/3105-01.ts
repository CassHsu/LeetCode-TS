function longestMonotonicSubarray(nums: number[]): number {
    let max_i = 1, max_d = 1
    let count_i = 1, count_d = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1])
            count_i += 1
        else
            count_i = 1

        if (nums[i] < nums[i - 1])
            count_d += 1
        else
            count_d = 1

        if (count_i > max_i)
            max_i = count_i
        if (count_d > max_d)
            max_d = count_d
    }

    return Math.max(max_i, max_d)
};
