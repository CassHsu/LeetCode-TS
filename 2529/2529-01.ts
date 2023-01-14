function maximumCount(nums: number[]): number {
    let p = 0
    let n = 0

    for (const num of nums) {
        if (num > 0) p++
        if (num < 0) n++
    }

    return Math.max(p, n)
};
