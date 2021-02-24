function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;
    
    const a = "a".charCodeAt(0);
    const count1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - a]++;
    }
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        const count2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for (let j = 0; j < s1.length; j++) {
            count2[s2.charCodeAt(i + j) - a]++;
        }
        if (match(count1, count2)) return true;
    }
    return false;
};

function match(c1: number[], c2: number[]) {
    for (let i = 0; i < 26; i++) {
        if (c1[i] !== c2[i]) return false;
    }
    return true;
}
