function firstPalindrome(words: string[]): string {
    let ans = ""
    
    const isPalindrom = (w) => {
        let i = 0
        let j = w.length - 1
        
        while (i < j) {
            if (w[i] !== w[j]) return false
            i++
            j--
        }
        
        return true
    }
    
    for (const w of words) {
        if (isPalindrom(w)) {
            ans = w
            break
        }
    }
    
    return ans
};
