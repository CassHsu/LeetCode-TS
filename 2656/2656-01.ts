function maximizeSum(nums: number[], k: number): number {
    let ans = 0
    const mx = Math.max(...nums)
    
    for (let i = 0; i < k; i++) {
        ans += mx
        ans += i
    }

    return ans
};
