function maxLengthBetweenEqualCharacters(s: string): number {
    let ans = -1;
    const m: Map<string, number> = new Map();
    
    s.split("").forEach((c, i) => {
       if (m.has(c) == false) {
           m.set(c, i);
       } else {
           ans = Math.max(ans, i - m.get(c) - 1);
       }
    });
    
    return ans;
};