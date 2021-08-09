function getLucky(s: string, k: number): number {
    let tmp = "";
    for (const c of s) tmp += (c.charCodeAt(0) - 96).toString(10);
    
    while (k--) {
        tmp = ((ss) => {
            let sum = 0;
            for (const c of ss) sum += parseInt(c, 10);
            return sum.toString(10);
        })(tmp);
    }
    
    return parseInt(tmp, 10);
};
