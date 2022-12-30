function answerQueries(nums: number[], queries: number[]): number[] {
    nums = nums.sort((a, b) => a - b)
    const ans = []

    for (let i = 0; i < queries.length; i++) {
        const t= queries[i]
        let sum = 0

        for (let j = 0; j < nums.length; j++) {
            sum += nums[j]

            if (sum > t) {
                ans.push(j)
                break
            }
        }
        
        if (ans[i] === undefined) ans.push(nums.length)
    }

    return ans
};
