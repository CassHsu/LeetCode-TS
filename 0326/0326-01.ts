function isPowerOfThree(n: number): boolean {
    let p = 1;
    for (let i = 0; i < 31; i++) {
        if (p === n) return true;   
        p *= 3;
    }
    return false;
};