function sortColors(nums: number[]): void {
    let isConti = true;
    let stop = 1;
    while (isConti) {
        isConti = false;
        let count = nums.length - stop;
        for (let i = 0; i < count; i++) {
            if (nums[i] > nums[i+1]) {
                let tmp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = tmp;
                isConti = true;
            }
        }
        stop++;
    }
};