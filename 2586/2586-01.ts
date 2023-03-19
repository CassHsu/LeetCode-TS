function vowelStrings(words: string[], left: number, right: number): number {
    let count = 0

    const vowels ={
        "a": true, "e": true, "i": true, "o": true, "u": true 
    }

    for (let i = left; i <= right; i++) {
        const w = words[i]
        const end = w.length - 1
        if (vowels[w[0]] && vowels[w[end]]) count++
    }

    return count
};
