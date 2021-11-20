function checkAlmostEquivalent(word1: string, word2: string): boolean {
    const counts = new Array(26).fill(0);
    
    for (const w of word1) {
        counts[w.charCodeAt(0) - 97]++;
    }
    
    for (const w of word2) {
        counts[w.charCodeAt(0) - 97]--;
    }
    
    for (const c of counts) {
        if (Math.abs(c) > 3) return false;
    }
    
    return true
};
