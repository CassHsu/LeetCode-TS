function arraySign(nums: number[]): number {
    let p = 1;
    nums.forEach(n => p *= n);
    return signFunc(p);
};

const signFunc = (p: number) => {
    if (p > 0) return 1;
    else if (p < 0) return -1;
    else return 0;
}
