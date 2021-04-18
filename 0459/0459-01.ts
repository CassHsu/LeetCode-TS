function repeatedSubstringPattern(s: string): boolean {
    const size = s.length;
    if (size == 0) return false;
    
    let ss = s + s;
    ss = ss.slice(1, size*2-1);
    
    return ss.includes(s);
};
