function subsetXORSum(nums: number[]): number {
    const subsets: number[][] = [[]];
    let sum = 0;
    for(const n of nums){
        const last = subsets.length - 1;
        for(let i = 0; i <= last; i++) {
            subsets.push([...subsets[i], n]);
        }
    }
    
    for(let i = 0; i < subsets.length; i++){
        if (subsets[i].length === 0) sum += 0
        else if (subsets[i].length === 1) sum += subsets[i][0];
        else sum += subsets[i].reduce((acc, curr) => acc ^ curr);
    }
    return sum;
};
