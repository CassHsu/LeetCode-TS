function subsets(nums: number[]): number[][] {
    const ret = [];
    const curr = [];
    
    const backtrack = (i) => {
        if (i >= nums.length) {
            ret.push([...curr]);
            return;
        }
        
        curr.push(nums[i]);
        backtrack(i + 1);
        
        curr.pop();
        backtrack(i + 1);
        return;
    };
    
    backtrack(0);
    return ret;
};
