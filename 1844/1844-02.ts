function replaceDigits(s: string): string {
    return s.split("").map((c, i) => {
        if (i % 2 === 0) return c;
        else return String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(c));
    }).join("");
};
