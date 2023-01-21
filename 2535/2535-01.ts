function differenceOfSum(nums: number[]): number {
    let es = 0
    let ds = 0
    let digits = ""

    nums.forEach(n => {
        es += n
        digits += n.toString()
    })

    for (const d of digits) {
        ds += parseInt(d)
    }

    return Math.abs(es - ds)
};
