function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const m = new Map()
    const ans = []

    for (let i = 0; i < nums1.length; i++) {
        const k = nums1[i][0]
        const v = nums1[i][1]

        if (m.get(k) == null) {
            m.set(k, [v])
        } else {
            const arr = m.get(k)
            arr.push(v)
            m.set(k, arr)
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        const k = nums2[i][0]
        const v = nums2[i][1]

        if (m.get(k) == null) {
            m.set(k, [v])
        } else {
            const arr = m.get(k);
            arr.push(v)
            m.set(k, arr)
        }
    }
    
    const keyArr = new Array(...m.keys()).sort((a, b) => a -b)
    
    for (const k of keyArr) {
        ans.push([k, m.get(k).reduce((acc, a) => acc + a, 0)])
    }

    return ans
};
