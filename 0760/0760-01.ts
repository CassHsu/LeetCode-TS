function anagramMappings(nums1: number[], nums2: number[]): number[] {
    const ans = []
    const m = new Map()
    
    nums2.forEach((n, i) => {
       m[n] = i 
    })
    
    nums1.forEach(n => {
        ans.push(m[n])
    })
    
    return ans
};
