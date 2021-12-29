function countPoints(rings: string): number {
    let count = 0
    const m = new Map();
    
    for (let c = 0, r = 1; r < rings.length; c += 2, r += 2) {
        if (!m.has(rings[r])) m.set(rings[r], rings[c])
        else m.set(rings[r], m.get(rings[r]) + rings[c])
    }
    
    for (const v of m.values()) {
        if (v.length < 3) continue
        
        let r = false, g = false, b = false
        
        for (const c of v) {
            if (c === "R") r = true
            if (c === "G") g = true
            if (c === "B") b = true
            
            if (r && g && b) {
                count++
                break
            }
        }
    }
    
    return count
};
