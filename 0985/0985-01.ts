function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    const ans = [];
    let s = 0;
    nums.forEach(n => { if (n % 2 === 0) s += n });
    
    for (let i = 0; i < queries.length; i++) {
        if (nums[queries[i][1]] % 2 === 0) s -= nums[queries[i][1]];
        
        nums[queries[i][1]] += queries[i][0];
        
        if (nums[queries[i][1]] % 2 === 0) s += nums[queries[i][1]];
        
        ans.push(s);
    }
    
    return ans;
};
