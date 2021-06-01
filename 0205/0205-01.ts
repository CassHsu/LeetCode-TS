function isIsomorphic(s: string, t: string): boolean {
    const ms = new Map();
    const mt = new Map();
    for (let i = 0; i < s.length; i++) {
        if (ms[s[i]] !== mt[t[i]]) return false;
        
        ms[s[i]] = i;
        mt[t[i]] = i;
    }
    return true;
};
