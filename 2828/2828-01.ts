function isAcronym(words: string[], s: string): boolean {
    let w = ""
    for (const word of words) {
        w += word[0]
    }

    return w === s
};
