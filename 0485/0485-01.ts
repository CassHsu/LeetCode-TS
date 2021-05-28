function findMaxConsecutiveOnes(nums: number[]): number {
    let max1 = 0;
    let count = 0;
    
    for (let n of nums) {
        if (n == 1) {
            count++;
        } else {
            count = 0;
        }
        
        if (count > max1) max1 = count;
    }
    return max1;
};
