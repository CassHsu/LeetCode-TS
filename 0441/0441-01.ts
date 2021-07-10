function arrangeCoins(n: number): number {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        count += i;
        
        if (n < count) {
            return i - 1;
        } else if (n === count) {
            return i;
        }
    }
    
    return count;
};
