function moveZeroes(nums: number[]): void {
    let p = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i !== p) {
                [nums[p], nums[i]] = [nums[i], nums[p]]
            }
            p++;
        }
    }
};