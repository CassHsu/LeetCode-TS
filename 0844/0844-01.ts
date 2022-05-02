function backspaceCompare(s: string, t: string): boolean {
    const buildit = (st: string) => {
        const r = []
        for (const c of st) {
            if (c === "#") {
                if (r.length > 0) {
                    r.pop()
                }
                
            } else {
                r.push(c)
            }
        }
        
        return r.join("")
    }
    
    return buildit(s) === buildit(t)
};
