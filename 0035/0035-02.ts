function searchInsert(nums: number[], target: number): number {
    let right = 0;
    let left = nums.length;
    
    while (left != right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return mid;
        if (target > nums[mid]) {
            right = mid + 1;
        } else {
            left = mid;
        }
    }
    return left;
};