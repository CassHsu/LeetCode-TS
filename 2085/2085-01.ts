function countWords(words1: string[], words2: string[]): number {
    let count = 0
    const m = new Map()
    
    words1.forEach(w => {
        if (m.has(w)) {
            const r = m.get(w)
            r[0] += 1
            m.set(w, r)
        } else {
            m.set(w, [1, 0])
        }
    })
    
    words2.forEach(w => {
        if (m.has(w)) {
            const r = m.get(w)
            r[1] += 1
            m.set(w, r)
        } else {
            m.set(w, [0, 1])
        }
    })
    
    m.forEach((v, k) => {
        if (v[0] == 1 && v[1] == 1) count++
    })
    
    return count
};
