function kWeakestRows(mat: number[][], k: number): number[] {
    const counts = []
    
    for (const [i, row] of mat.entries()) {
        counts.push([i, row.reduce((a, b) => a + b, 0)])
    }
    
    counts.sort((a, b) => a[1] - b[1])
    
    const ans = []
    for (const c of counts.slice(0, k)) {
        ans.push(c[0])
    }
    
    return ans
};
