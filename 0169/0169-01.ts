function majorityElement(nums: number[]): number {
    const size = nums.length / 2;
    const m = new Map();
    for (const n of nums) {
        const v = m.get(n);
        if (v) {
            m.set(n, v+1);
        } else {
            m.set(n, 1);
        }
    }
    
    let major = nums[0];
    for (const [k, v] of m) {
        if (v > size) {
            major = k;
            break;
        };
    }
    
    return major;
};
