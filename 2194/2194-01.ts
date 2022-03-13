function cellsInRange(s: string): string[] {
    const res = []
    
    const col_start = s.charCodeAt(0)
    const col_end = s.charCodeAt(3)
    const row_start = parseInt(s.charAt(1))
    const row_end = parseInt(s.charAt(4))
    
    for (let c = col_start; c <= col_end; c++) {
        for (let r = row_start; r <= row_end; r++) {
            res.push(String.fromCharCode(c) + r.toString())
        }
    }
    
    return res
};
