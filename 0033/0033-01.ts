function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) return mid;
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;
        
        if (target > nums[start] && nums[mid] > target) {
            end = mid - 1;
        } else if (target > nums[mid] && nums[end] > target) {
            start = mid + 1;
        } else if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1;
};