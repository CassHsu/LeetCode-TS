function strStr(haystack: string, needle: string): number {
    const nSize = needle.length;
    const hSize = haystack.length;
    
    if (nSize === 0 || haystack === needle) return 0;
    
    let p = 0;
    const diff = hSize - nSize;
    while (p <= diff) {
        if (haystack.substring(p, p + nSize) === needle) {
            return p;
        } else {
            p++;
        }
    }
    return -1;
};