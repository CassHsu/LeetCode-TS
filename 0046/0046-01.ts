function permute(nums: number[]): number[][] {
    const ans = [];
    
    const backtrack = (curr) => {
        if (curr.length == nums.length) {
            ans.push([...curr]);
            return;
        }
        
        for (const n of nums) {
            if (curr.includes(n)) continue;
            
            curr.push(n);
            backtrack(curr);
            curr.pop();
        }
    }
    
    backtrack([]);
    return ans;
};
