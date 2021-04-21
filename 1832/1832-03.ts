function checkIfPangram(sentence: string): boolean {
    return "abcdefghijklmnopqrstuvwxyz".split("").every(a => sentence.includes(a));
};
