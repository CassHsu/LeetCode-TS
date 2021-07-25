function canBeTypedWords(text: string, brokenLetters: string): number {
    return text.split(" ").filter(w => !w.split("").some(c => new Set(brokenLetters).has(c))).length;
};
