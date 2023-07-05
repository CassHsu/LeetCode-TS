function maximumNumberOfStringPairs(words: string[]): number {
    let count = 0
    const n = words.length

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (words[i][0] == words[j][1] && words[i][1] == words[j][0]) {
                count++
            }
        }
    }    

    return count
};
