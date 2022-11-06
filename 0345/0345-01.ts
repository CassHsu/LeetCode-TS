function reverseVowels(s: string): string {
    const vowels = new Set(['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'])
    const res = s.split("")
    let l = 0
    let r = s.length - 1

    while (l < r) {
        if (vowels.has(res[l]) && vowels.has(res[r])) {
            [res[l], res[r]] = [res[r], res[l]]
            l++
            r--
        } else if (!vowels.has(res[l])) {
            l++
        } else {
            r--
        }
    }

    return res.join("")
};
