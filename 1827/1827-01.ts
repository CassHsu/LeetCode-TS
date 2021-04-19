function minOperations(nums: number[]): number {
    let count = 0;
    let prev = 0;
    
    nums.forEach(n => {
       if (prev >= n) {
           prev++;
           count += prev - n;
       } else {
           prev = n;
       }
    });
    
    return count;
};
