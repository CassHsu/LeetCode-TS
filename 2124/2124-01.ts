function checkString(s: string): boolean {
    let a = 0
    let b = s.length
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') a = i
        else if (b === s.length) b = i
    }
    
    return a <= b
};
