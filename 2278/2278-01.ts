function percentageLetter(s: string, letter: string): number {
    let count = 0
    s.split("").forEach(c => { if (c === letter) count++})
    
    return Math.floor(count * 100 / s.length)
};
