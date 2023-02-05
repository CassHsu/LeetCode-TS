function countDigits(num: number): number {
    const numArr = num.toString().split("")
    let ans = 0
    for (const n of numArr) {
        if (num % parseInt(n) == 0) {
            ans += 1
        }
    }

    return ans
};
