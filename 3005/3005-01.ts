function maxFrequencyElements(nums: number[]): number {
    const m = new Map()
    let count = 0
    
    nums.forEach(n => {
        m.set(n, m.get(n) + 1 || 1)
    })

    let max = Math.max(...m.values())
    for (const k of m) {
        if (k[1] === max) {
            count += k[1]
        }
    }

    return count
};
