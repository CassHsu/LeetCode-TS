function countSubstrings(s: string): number {
    let count = 0
    const size = s.length
    const twopointers = (l, r) => {
        while (l >= 0 && r < size && s[l] === s[r]) {
            count++
            l--
            r++
        }
    }
    
    for (let i = 0; i < size; i++) {
        twopointers(i, i)
        twopointers(i, i+1)
    }
    
    return count
};
