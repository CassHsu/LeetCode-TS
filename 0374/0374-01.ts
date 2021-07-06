function guessNumber(n: number): number {
    let low = 1;
    let high = n;
    
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        const res = guess(mid);
        
        if (res === 0) {
            return mid;
        } else if (res < 0) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return -1;
};
