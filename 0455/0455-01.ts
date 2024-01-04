function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    
    let count = 0
    while (g.length > 0 && s.length > 0) {
        if (s[0] >= g[0]) {
            count++
            g.shift()
        }
        s.shift()
    }
    return count
};
