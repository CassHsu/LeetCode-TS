function generate(numRows: number): number[][] {
    const ret = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const row = [1];
        
        for (let j = 1; j < i; j++) {
            row.push(ret[i-1][j-1] + ret[i-1][j]);
        }
        
        row.push(1);
        ret.push(row);
    }
    return ret;
};
