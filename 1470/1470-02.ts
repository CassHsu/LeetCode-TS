function shuffle(nums: number[], n: number): number[] {
    const size = nums.length
    const ans = []

    let j = 0
    let k = n
    for (let i = 0; i < size; i++) {
        ans.push(i % 2 == 0 ? nums[j++] : nums[k++])
    }

    return ans
};
