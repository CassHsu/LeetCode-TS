function reformat(s: string): string {
    const alphas = []
    const digits = []
    
    for (const c of s) {
        if (isNaN(Number(c))) alphas.push(c)
        else digits.push(c)
    }
    
    if (Math.abs(alphas.length - digits.length) > 1) return ""
    
    const isAlphaFist = (alphas.length > digits.length) ? true : false
    let ans = ""
    
    let a = 0
    let d = 0
    while (alphas.length > a && digits.length > d) {
        if (isAlphaFist) ans += (alphas[a] + digits[d])
        else ans += (digits[a] + alphas[d])
        
        a++
        d++
    }
    
    if (alphas.length > a) ans += alphas[a]
    if (digits.length > d) ans += digits[d]
    
    return ans
};
