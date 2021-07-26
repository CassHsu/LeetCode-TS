function isMonotonic(nums: number[]): boolean {
    let mode = -1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            if (mode === 1) return false;
            else mode = 0;
        }
        
        if (nums[i - 1] > nums[i]) {
            if (mode === 0) return false;
            else mode = 1;
        }
    }
    
    return true;
};
