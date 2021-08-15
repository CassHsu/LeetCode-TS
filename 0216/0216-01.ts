function combinationSum3(k: number, n: number): number[][] {
    const ans: number[][] = [];
    const backtrack = (curr: number[], start: number, remain: number) => {
        if (curr.length === k) {
            if (remain === 0) {
                ans.push([...curr]);
            }
            return;
        }
        
        for (let i = start; i <= 9; i++) {
            curr.push(i);
            backtrack(curr, i + 1, remain - i);
            curr.pop();
        }
    }
    
    backtrack([], 1, n);
    return ans;
};
