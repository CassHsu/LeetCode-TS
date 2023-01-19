function maximumCount(nums: number[]): number {
    let p = 0
    let n = 0

    for (const num of nums) {
        if (num > 0) {
            p++
            continue
        }
        if (num < 0) {
            n++
            continue
        }
    }

    return Math.max(p, n)
};
