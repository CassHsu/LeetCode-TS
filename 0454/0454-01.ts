function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let count = 0
    const m = new Map();
    
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const n = n1 + n2
            if (m.has(n)) {
                m.set(n, m.get(n) + 1)
            } else {
                m.set(n, 1)   
            }
        }
    }
    
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const n = -(n3 + n4)
            if (m.has(n)) {
                count += m.get(n)
            }
        }
    }
    
    return count
};
