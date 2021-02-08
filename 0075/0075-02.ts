function sortColors(nums: number[]): void {
    const count = [0,0,0];
    for (let n of nums) {
        count[n]++;
    }

    for (let i in nums) {
        if (count[0] > 0) {
            nums[i] = 0;
            count[0]--;
            
        } else if (count[1] > 0) {
            nums[i] = 1;
            count[1]--;
            
        } else {
            nums[i] = 2;
        }
    }
};