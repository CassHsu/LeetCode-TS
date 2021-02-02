function removeDuplicates(nums: number[]): number {
    const size = nums.length;
    if (size <= 1) return size;
    let p = 0;
    for (let i = 0; i < size; i++) {
        if (nums[i] != nums[p]) {
            p += 1;
            nums[p] = nums[i];
        }
    }
    return p + 1;
};