function repeatedCharacter(s: string): string {
    let r = 0
    const m = {}
    
    for (let i = 0; i < s.length; i++) {
        if (m[s[i]]) {
            r = i
            break
        }
        m[s[i]] = 1
    }
    
    return s[r]
};
