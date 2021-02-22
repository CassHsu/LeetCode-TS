function mergeAlternately(word1: string, word2: string): string {
    let w1 = word1.length;
    let w2 = word2.length;
    let i = 0;
    let ret = "";
    
    while (w1 > 0 && w2 > 0) {
        ret += word1[i];
        ret += word2[i];
        i++;
        w1--;
        w2--;
    }
    
    if (w1 > 0) {
        while (i < word1.length) {
            ret += word1[i];
            i++;
        }
    } else {
        while (i < word2.length) {
            ret += word2[i];
            i++
        }
    }
    
    return ret;
};
