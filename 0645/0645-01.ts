function findErrorNums(nums: number[]): number[] {
    const ans = [-1, -1]
    const m = new Map()
    
    nums.forEach(n => m.set(n, m.has(n) ? m.get(n) + 1 : 1))
    for (let i = 1; i <= nums.length; i++) {
        if (m.has(i)) {
            if (m.get(i) == 2) ans[0] = i
        } else {
            ans[1] = i
        }
    }
    
    return ans
};
