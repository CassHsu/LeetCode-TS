function combine(n: number, k: number): number[][] {
    const ans = [];
    const backtrack = (curr, start) => {
        if (curr.length === k) {
            ans.push([...curr]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            curr.push(i);
            backtrack(curr, i + 1);
            curr.pop();
        }
    };
    
    backtrack([], 1);
    return ans;
};
