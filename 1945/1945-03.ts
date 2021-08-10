const code0 = "0".charCodeAt(0);
function getLucky(s: string, k: number): number {
    let ts = convert(s);
    
    while (k > 0) {
        ts = transform(ts);
        k--;
    }
    
    return parseInt(ts);
};

function convert(s: string): string {
    let ret = "";
    s.split("").forEach(c => {
       ret += (c.charCodeAt(0) - 96).toString(); 
    });
    
    return ret;
}

function transform(s: string): string {
    let sum = 0;
    s.split("").forEach(c => {
       sum += (c.charCodeAt(0) - code0);
    });
    return sum.toString();
}
