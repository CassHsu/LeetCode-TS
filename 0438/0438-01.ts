function findAnagrams(s: string, p: string): number[] {
    const ans = []
    const pn = p.length
    const sn = s.length
    
    if (sn < pn) return ans
    
    const sa = []
    const pa = []
    for (let i = 0; i < 26; i++) {
        sa.push(0)
        pa.push(0)
    }
    
    const isEqual = (pa, sa) => {
        for (let i = 0; i < 26; i++) {
            if (pa[i] != sa[i]) return false
        }
        return true
    }
    
    const a = 'a'.charCodeAt(0)
    for (let i = 0; i < pn; i++) {
        pa[p.charCodeAt(i) - a] += 1
    }
    
    for (let i = 0; i < sn; i++) {
        sa[s.charCodeAt(i) - a] += 1
        
        if (i >= pn) sa[s.charCodeAt(i - pn) - a] -= 1
        
        if (isEqual(pa, sa)) ans.push(i - pn + 1)
    }
    
    return ans
};
