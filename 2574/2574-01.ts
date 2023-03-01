function leftRigthDifference(nums: number[]): number[] {
    const size = nums.length
    const rArr = new Array(size).fill(0)
    const lArr = new Array(size).fill(0)
    const ans = []

    for (let i = 1; i < size; i++) {
        lArr[i] = lArr[i - 1] + nums[i - 1]
    }

    for (let i = size - 2; i > -1; i--) {
        rArr[i] = rArr[i + 1] + nums[i + 1]
    }

    for (let i = 0; i < size; i++) {
        ans[i] = Math.abs(lArr[i] - rArr[i])
    }

    return ans
};
