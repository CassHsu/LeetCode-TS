function numOfStrings(patterns: string[], word: string): number {
    let count = 0
    patterns.forEach(p => { if (word.includes(p)) count++ })
    return count
};
