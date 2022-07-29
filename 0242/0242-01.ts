function isAnagram(s: string, t: string): boolean {
    const sorting = (str) => {
        return str.split('').sort().join('')
    }
    
    return sorting(s) === sorting(t)
};
