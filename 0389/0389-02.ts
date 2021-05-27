function findTheDifference(s: string, t: string): string {
    const ms = new Map();
    const mt = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (ms.has(c)) {
            ms.set(c, ms.get(c) + 1);
        } else {
            ms.set(c, 1);
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        const c = t[i];
        if (mt.has(c)) {
            mt.set(c, mt.get(c) + 1);
        } else {
            mt.set(c, 1);
        }
    }
    
    for (const [k, v] of mt.entries()) {
        if (!ms.has(k) || ms.get(k) !== v) return k;   
    }
    return null;
};
