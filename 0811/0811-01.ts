function subdomainVisits(cpdomains: string[]): string[] {
    const m = new Map();
    const ret = [];
    
    for (let cp of cpdomains) {
        const cpArr = cp.split(" ");
        const count = parseInt(cpArr[0]);
        const domains = cpArr[1].split(".");
        
        let d = domains.pop();
        m[d] = m[d] ? m[d] + count : count;
        while (domains.length > 0) {
            d = domains.pop() + "." + d;
            m[d] = m[d] ? m[d] + count : count;
        }
    }
    
    for (let d in m) {
        ret.push(m[d] + " " + d);
    }
    return ret;
};
