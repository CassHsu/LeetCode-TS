function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    const size = pattern.length;
    
    if (size !== words.length) return false;
    
    const sp = new Set(pattern);
    const sw = new Set(words);
    if (sp.size !== sw.size) return false;
    
    const mp = new Map();
    const ms = new Map();
    
    for (let i = 0; i < size; i++) {
        const p = pattern[i];
        const w = words[i];
        
        if (mp.has(p) == false) mp.set(p, w);
        else if (mp.get(p) !== w) return false;
        
        if (ms.has(w) == false) ms.set(w, p);
        else if (ms.get(w) !== p) return false;
    }
    return true;
};
