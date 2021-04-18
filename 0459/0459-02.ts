function repeatedSubstringPattern(s: string): boolean {
    const size = s.length;
    for (let i = Math.floor(size/2); i > 0; i--) {
        if (size % i === 0) {
            const repeat = Math.floor(size/i);
            let curr = "";
            
            for (let j = 0; j < repeat; j++) {
                curr += s.slice(0, i);
            }
            
            if (curr === s) return true;
        }   
    }
    return false;
};
