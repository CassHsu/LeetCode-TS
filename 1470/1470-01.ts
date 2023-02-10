function shuffle(nums: number[], n: number): number[] {
    const n1 = nums.slice(0, n)
    const n2 = nums.slice(n)
    const ans = []

    for (let i = 0; i < n1.length; i++) {
        ans.push(n1[i])
        ans.push(n2[i])
    }

    return ans
};
