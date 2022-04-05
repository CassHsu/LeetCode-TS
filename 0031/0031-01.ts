/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const swap = (nums, i, j) => {
        const t = nums[i]
        nums[i] = nums[j]
        nums[j] = t
    }

    const reverse = (nums, i) => {
        let j = nums.length - 1
        while (i < j) {
            swap(nums, i, j)
            i++
            j--
        }
    }
    
    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) i--

    if (i >= 0) {
        let j = nums.length - 1
        while (nums[i] >= nums[j]) j--
        
        swap(nums, i, j)
    }

    reverse(nums, i + 1)
};
