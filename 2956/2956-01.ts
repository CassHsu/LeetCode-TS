function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)

    let count1 = 0, count2 = 0
    nums1.forEach(n => {
        if (s2.has(n)) count1++
    })

    nums2.forEach(n => {
        if (s1.has(n)) count2++
    })

    return [count1, count2]
};
