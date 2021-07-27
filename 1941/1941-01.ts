function areOccurrencesEqual(s: string): boolean {
    const m = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const v = m.get(s[i]);
        if (v) m.set(s[i], v + 1);
        else m.set(s[i], 1);
    }
    
    const num = m.get(s[0]);
    for (const v of m.values())
        if (num !== v) return false;
    
    return true;
};
