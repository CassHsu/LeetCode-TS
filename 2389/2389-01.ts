function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b)
    const ans = []

    for (let q of queries) {
        let count = 0

        for (let n of nums) {
            if (q >= n) {
                q -= n
                count++
            } else {
                break
            }
        }

        ans.push(count)
    }

    return ans
};
