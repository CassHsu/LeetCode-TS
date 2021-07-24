function canBeTypedWords(text: string, brokenLetters: string): number {
    const texts = text.split(" ");
    let ans = texts.length;
    
    texts.forEach(t => {
        for (let i = 0; i < brokenLetters.length; i++) {
            if (t.includes(brokenLetters[i]) === true) {
                ans--;
                break;
            }
        } 
    });
    
    return ans;
};
