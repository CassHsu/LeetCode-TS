function findUnsortedSubarray(nums: number[]): number {
    let r = 0;
    let l = nums.length;
    
    const snums = [...nums];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== snums[i]) {
            r = Math.max(r, i);
            l = Math.min(l, i);
        }
    }
    
    return r - l >= 0 ? r - l + 1 : 0;
};
