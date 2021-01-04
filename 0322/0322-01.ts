function coinChange(coins: number[], amount: number): number {
    if (amount === 0 || coins.length === 0) {
        return 0;
    }
    
    const add1 = amount + 1;
    const cache: number[] = new Array(add1).fill(add1);
    cache[0] = 0;
    
    for (let c of coins) {
        for (let i = c; i <= amount; i++) {
            cache[i] = Math.min(cache[i - c] + 1, cache[i]);
        }
    }
    return cache[amount] >= add1 ? -1: cache[amount];
};