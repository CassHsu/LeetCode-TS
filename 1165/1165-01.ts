function calculateTime(keyboard: string, word: string): number {
    const m = new Map();
    
    for (let i = 0; i < keyboard.length; i++) {
        m.set(keyboard.charAt(i), i)
    }
    
    let count = 0
    let curr = 0
    for (const w of word) {
        count += Math.abs(m.get(w) - curr);
        curr = m.get(w);
    }
    
    return count
};
