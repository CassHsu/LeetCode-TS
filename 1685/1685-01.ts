function getSumAbsoluteDifferences(nums: number[]): number[] {
    const result = new Array(nums.length).fill(0);
    const total = nums.reduce((acc, n) => acc + n, 0);
    let curr = 0;
    
    nums.forEach((n, i) => {
        curr += n;
        result[i] = (i+1)*n - curr + (total - curr) - (nums.length-i-1)*n;
    });
    
    return result;
};
