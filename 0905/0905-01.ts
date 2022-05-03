function sortArrayByParity(nums: number[]): number[] {
    return nums.sort((n, _) => n % 2 ? 1 : -1)
};
