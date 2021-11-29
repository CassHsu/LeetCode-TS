function targetIndices(nums: number[], target: number): number[] {
    return nums.sort((a, b) => a - b).reduce((acc, n, i) => (n === target) ? [...acc, i] : acc, []);
};
