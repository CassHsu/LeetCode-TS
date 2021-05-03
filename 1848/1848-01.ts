function getMinDistance(nums: number[], target: number, start: number): number {
    let ans = 100000;
    nums.forEach((n, i) => {
        if (n === target) {
            ans = Math.min(ans, Math.abs(i - start));
        }
    });
    return ans;
};
