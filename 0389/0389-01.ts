function findTheDifference(s: string, t: string): string {
    let r = t.charCodeAt(s.length);
    for (let i = 0; i < s.length; i++) {
        r ^= s.charCodeAt(i) ^ t.charCodeAt(i);
    }
    return String.fromCharCode(r);
};
