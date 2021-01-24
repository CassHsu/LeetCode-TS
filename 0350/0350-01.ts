function intersect(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [];
    const m: Map<number, number> = new Map();
    
    for (let n of nums1) {
        if (m[n]) m[n]++;
        else m[n] = 1;
    }
    
    for (let n of nums2) {
        if (m[n] > 0) {
            m[n]--;
            res.push(n);
        }
    }
    
    return res;
};