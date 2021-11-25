function removeVowels(s: string): string {
    const arr = []
    const vowels = ["a", "e", "i", "o", "u"]
    
    for (const c of s) {
        if (!vowels.includes(c)) arr.push(c)   
    }
    
    return arr.join("")
};
