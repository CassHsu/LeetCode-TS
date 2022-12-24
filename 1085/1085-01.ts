function sumOfDigits(nums: number[]): number {
    const min = Math.min(...nums)
    const strMin = String(min)

    let ans = 0
    for (let c of strMin.split('')) {
        ans += parseInt(c)
    }

    return ans % 2 ? 0 : 1
};
