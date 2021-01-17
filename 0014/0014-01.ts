function longestCommonPrefix(strs: string[]): string {
    if (!strs || strs.length === 0 || strs.filter(x => x === "").length > 0) return "";
    if (strs.length === 1) return strs[0];
    
    const minLen = Math.min(...strs.map(s => s.length));
    let end = 0;
    
    while (end < minLen) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i - 1][end] != strs[i][end]) {
                return strs[0].substr(0, end);
            }
        }
        end++;
    }
    return strs[0].substr(0, end);
};