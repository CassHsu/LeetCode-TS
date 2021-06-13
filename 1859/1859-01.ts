function sortSentence(s: string): string {
    const ss = s.split(" ");
    const ret = [];
    
    ss.forEach(w => ret.push(w));
    ss.forEach(w => {
       const i = parseInt(w[w.length - 1]);
       ret[i - 1] = w.substring(0, w.length - 1);
    });
    
    return ret.join(" ");
};
