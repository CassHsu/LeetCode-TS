function leftRigthDifference(nums: number[]): number[] {
    const ans = new Array(nums.length).fill(0)

    let ls = 0
    let rs = 0
    nums.forEach((n) => rs += n)

    for(let i = 0; i < nums.length; i++) {
        rs -= nums[i]
        ans[i] = Math.abs(ls - rs)
        ls += nums[i]              
    }

    return ans
};
