function findMiddleIndex(nums: number[]): number {
    const len = nums.length
    const sum = (start, end) => {
        let ans = 0
        for (let i = start; i < end; i++) {
            ans += nums[i]
        }
        return ans
    }
    
    for (let i = 0; i < len; i++) {
        const l = sum(0, i)
        const r = sum(i+1, len)
        
        if (l == r) return i
    }
    
    return -1
};
