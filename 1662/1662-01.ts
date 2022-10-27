function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.reduce((acc, cur) => acc += cur, "") === word2.reduce((acc, cur) => acc += cur, "");
};
