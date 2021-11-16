function kthDistinct(arr: string[], k: number): string {
    const c = {}
    arr.forEach(a => c[a] ? c[a]++ : c[a] = 1)
    
    for (const a of arr) {
        if (c[a] == 1) {
            k--
            if (k == 0) return a
        }
    }
    
    return ""
};
