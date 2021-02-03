function countAndSay(n: number): string {
    if (n === 1) return "1";
    
    const cs = countAndSay(n - 1);
    let count = 0;
    let init = cs[0];
    let res = "";
    
    for (let c of cs) {
        if (c === init) {
            count += 1;
        } else {
            res += String(count) + init;
            count = 1;
            init = c;
        }
    }
    
    res += String(count) + init;
    return res;
};