function addDigits(num: number): number {
    if (num === 0) return 0;
    let m9 = num % 9;
    if (m9 === 0) return 9;
    return m9;
};
