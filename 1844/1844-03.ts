function replaceDigits(s: string): string {
    return s.split("").map((c, i) => {
        if (isNaN(Number(c))) return c;
        else return String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(c));
    }).join("");
};
