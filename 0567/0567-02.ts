function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;
    
    const a = "a".charCodeAt(0);
    const c1: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    const c2: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < s1.length; i++) {
        c1[s1.charCodeAt(i) - a]++;
        c2[s2.charCodeAt(i) - a]++;
    }
    
    const w = s2.length - s1.length;
    for (let i = 0; i < w; i++) {
        if (matches(c1, c2)) return true;
        
        c2[s2.charCodeAt(i) - a]--;
        c2[s2.charCodeAt(i + s1.length) - a]++;
    }
    return matches(c1, c2);
};

function matches(c1: number[], c2: number[]): boolean {
    for (let i = 0; i < 26; i++) {
        if (c1[i] !== c2[i]) return false;
    }
    return true;
}
