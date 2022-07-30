function findAndReplacePattern(words: string[], pattern: string): string[] {
    const res: string[] = [];
    const p: string = findPattern(pattern);
    
    for (let w of words) {
        if (p === findPattern(w)) {
            res.push(w);
        }
    }
    return res;
};

function findPattern(pattern: string): string {
    const pm: Map<string, number> = new Map();
    let code: string = "";
    let i = 0;
    
    for (let p of pattern) {
        if (pm[p] == undefined) {
            pm[p] = i;
            i++;
        }
        code += pm[p];
    }
    return code;
}
