function singleNumber(nums: number[]): number {
    let res = 0;
    for (let n of nums) {
        res ^= n;
    }
    return res;
};