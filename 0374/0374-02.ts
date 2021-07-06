function guessNumber(n: number): number {
    let mid = Math.floor(n / 2);
    let res = guess(mid);
    
    while (true) {
        if (res === 0) {
            return mid;
        } else if (res > 0) {
            mid = Math.floor((mid + 1 + n) / 2);
            res = guess(mid);
            
        } else {
            n = mid - 1;
            mid = Math.floor(n / 2);
            res = guess(mid);
        }
    }
    
    return -1;
};
