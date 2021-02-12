function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];
    if (strs.length === 1) return [strs];
    
    const m = new Map();
    for (let s of strs) {
        const k = [...s].sort().join("");
        
        if (m.has(k)) {
            m.get(k).push(s);
        } else {
            m.set(k, [s]);
        }
    }
    
    const ret = [];
    for (let [_, list] of m.entries()) {
        ret.push(list);
    }
    return ret;
};