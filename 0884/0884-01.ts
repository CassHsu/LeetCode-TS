function uncommonFromSentences(s1: string, s2: string): string[] {
    const m = new Map();
    const ret = [];
    
    const as1 = s1.split(" ");
    const as2 = s2.split(" ");
    
    as1.forEach(w => {
        const v = m.get(w);
        if (v) m.set(w, v + 1);
        else m.set(w, 1);
    });
    
    as2.forEach(w => {
        const v = m.get(w);
        if (v) m.set(w, v + 1);
        else m.set(w, 1);
    });
    
    m.forEach((v, k) => {
       if (v === 1) ret.push(k); 
    });
    
    return ret;
};
