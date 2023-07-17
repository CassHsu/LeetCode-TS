function getCommon(nums1: number[], nums2: number[]): number {
    let i = 0
    let j = 0
    const n = nums1.length
    const m = nums2.length

    while (i < n && j < m) {
        if (nums1[i] < nums2[j]) i++
        else if (nums1[i] > nums2[j]) j++
        else return nums1[i]
    }

    return -1
};
