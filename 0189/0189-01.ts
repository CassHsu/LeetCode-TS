function rotate(nums: number[], k: number): void {
    const size = nums.length;
    
    if (size < 2) {
        return
    }

    const reverse = (l: number, r: number): void => {
        while (l < r) {
            let tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;
            l++;
            r--;
        }
    }

    k = k % size;
    reverse(0, size - 1);
    reverse(0, k - 1);
    reverse(k, size - 1);
};
