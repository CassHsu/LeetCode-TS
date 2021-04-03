function partitionLabels(S: string): number[] {
    const last: Map<string, number> = new Map();
    const ans: number[] = [];
    let anchor = 0;
    let j = 0;
    
    for (let i = 0; i < S.length; i++) {
        last.set(S[i], i);
    }
    
    for (let i = 0; i < S.length; i++) {
        j = Math.max(j, last.get(S[i]));
        if (i === j) {
            ans.push(j - anchor + 1);
            anchor = j + 1;
        }
    }
    return ans;
};
