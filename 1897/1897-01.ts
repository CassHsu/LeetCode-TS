function makeEqual(words: string[]): boolean {
    const n = words.length
    const m = new Map()
    const allwords = words.join("")
    
    for (const c of allwords) {
        if (m.has(c)) { m.set(c, m.get(c) + 1) }
        else m.set(c, 1)
    }
    
    for (const c of m.values()) {
        if (c % n !== 0) return false
    }
    
    return true
};
