function subsets(nums: number[]): number[][] {
    const ret = [[]];
    
    for (let n of nums) {
        ret.forEach(s => {
           ret.push([...s, n]); 
        });
    }
    return ret;
};
