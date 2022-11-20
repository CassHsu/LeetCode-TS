function arithmeticTriplets(nums: number[], diff: number): number {
    const s = new Set()
    let count = 0

    for (const n of nums) {
        if (s.has(n - diff) && s.has(n - diff - diff)) count++
        s.add(n)
    }

    return count
    
};
