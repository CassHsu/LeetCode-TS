function maximumNumberOfStringPairs(words: string[]): number {
    let count = 0
    const pairs = new Set()

    words.forEach(w => {
        const rw = w.split("").reverse().join("")
        if (w != rw && !pairs.has(rw) && words.includes(rw)) {
            count++
            pairs.add(w)
        }
    })

    return count
};
