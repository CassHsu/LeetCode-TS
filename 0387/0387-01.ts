function firstUniqChar(s: string): number {
    const m = new Map();
    
    for (let c of s) {
        if (m.has(c)) {
            m.set(c, m.get(c) + 1);
        } else {
            m.set(c, 1);
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (m.get(s[i]) == 1) return i;
    }
    
    return -1;
};