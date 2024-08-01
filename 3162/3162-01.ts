function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    let count = 0

    for (let n1 of nums1) {
        for (let n2 of nums2) {
            if (n1 % (n2 * k) === 0) count++
        }
    }

    return count
};
