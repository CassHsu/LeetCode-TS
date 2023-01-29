function alternateDigitSum(n: number): number {
    const digits = n.toString().split("")
    const signed = []

    const sign = (i, s) => {
        if (i < 0 || i >= digits.length) return

        const v = parseInt(digits[i])
        if (s < 0) signed.push(v * -1)
        else signed.push(v)

        sign(i + 1, s * -1)
    };

    sign(0, 1)
    return signed.reduce((acc, v) => acc + v, 0)
};
