function countAsterisks(s: string): number {
    let count = 0
    let bars = 0
    
    for (const c of s) {
        switch(c) {
            case '*':
                if (bars % 2 == 0) count++
                break
            case '|':
                bars++
                break
            default:
                break
        }
    }
    
    return count
};
