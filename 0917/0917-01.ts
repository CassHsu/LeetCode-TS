function reverseOnlyLetters(s: string): string {
    const ret = [];
    let j = s.length - 1;
    
    const isalpha = (c: string) => {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }
    
    for (let i = 0; i < s.length; i++) {
        if (isalpha(s[i])) {
            while (isalpha(s[j]) == false) {
                j--;
            }
            
            ret.push(s[j]);
            j--;
            
        } else {
            ret.push(s[i]);
        }
    }
    return ret.join("");
};
