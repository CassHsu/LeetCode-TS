function splitWordsBySeparator(words: string[], separator: string): string[] {
    let res = []

    words.forEach(word => {
        const arr = word.split(separator)
        for (const w of arr) {
            if (w != "") {
                res.push(w)
            }
        }
    });

    return res
};
