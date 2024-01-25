function maxFrequencyElements(nums: number[]): number {
    const m = new Map()
    let max = 0
    let count = 0

    for (const n of nums) {
        const f = m.get(n) + 1 || 1
        console.log(f)
        if (f === max) count++
        else if (f > max) {
            max = f
            count = 1
        }

        m.set(n, f)
    }

    return max * count
};
