function replaceDigits(s: string): string {
    const shift = (c, x) => {
        return String.fromCharCode(c.charCodeAt(0) + parseInt(x));
    };
    
    let ret = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) ret += s[i];
        else ret += shift(s[i-1], s[i]);
    }
    return ret;
};
