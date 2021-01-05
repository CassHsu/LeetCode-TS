function maxRepeating(sequence: string, word: string): number {
    const keep = word;
    let count = 0;
    
    while (sequence.includes(word)) {
        count++;
        word += keep;
    }
    
    return count;
}