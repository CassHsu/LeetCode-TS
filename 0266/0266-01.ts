function canPermutePalindrome(s: string): boolean {
    let count = 0
    const m = new Map()
    
    s.split("").forEach(c => m.has(c) ? m.set(c, m.get(c) + 1) : m.set(c, 1))
    for (const v of m.values()) {
        count += v % 2
    }
    
    return count <= 1
};
