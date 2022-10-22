function commonFactors(a: number, b: number): number {
    let count = 1
    const min = Math.min(a, b)
    
    for (let n = 2; n <= min; n++) {
        if (a % n == 0 && b % n == 0) {
            count++
        }
    }
    
    return count
};
