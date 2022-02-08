function removeDuplicates(nums: number[]): number {
    let count = 1
    let curr =1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++
        } else {
            count = 1
        }
        
        if (count <= 2) {
            nums[curr] = nums[i]
            curr++
        }
    }
    
    return curr
};
