function stringMatching(words: string[]): string[] {
    return words.filter((word, i) => words.some((w, j) => i !== j && w.includes(word)));
};
