function canAliceWin(nums: number[]): boolean {
    let s = 0
    let d = 0

    for (let n of nums) {
        if (n.toString().length === 1) {
            s += n
        } else {
            d += n
        }
    }

    return s != d
};
