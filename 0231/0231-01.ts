function isPowerOfTwo(n: number): boolean {
    let p = 1;
    for (let i = 0; i < 31; i++) {
        if (n === p) {
            return true;
        }
        p *= 2;
    }
    return false;
};