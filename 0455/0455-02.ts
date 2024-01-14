function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    
    let count = 0
    let gi = g.length - 1
    let si = s.length - 1

    while (gi >= 0 && si >= 0) {
        if (s[si] >= g[gi]) {
            count++
            gi--
            si--
        } else {
            gi--
        }
    }
    
    return count
};
