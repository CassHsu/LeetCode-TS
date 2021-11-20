function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const c1 = new Map()
    const c2 = new Map()
    const s = new Set(word1 + word2)
    
    for (const w of word1) {
        if (c1.has(w)) { c1.set(w, c1.get(w) + 1) }
        else c1.set(w, 1)
    }
    
    for (const w of word2) {
        if (c2.has(w)) { c2.set(w, c2.get(w) + 1) }
        else c2.set(w, 1)
    }
    
    for (const w of s) {
        const v1 = c1.has(w) ? c1.get(w) : 0
        const v2 = c2.has(w) ? c2.get(w) : 0
        
        if (Math.abs(v1 - v2) > 3) return false
    }
    
    return true
};
