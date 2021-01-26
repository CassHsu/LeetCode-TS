function maxProfit(prices: number[]): number {
    let res = 0;
    const size = prices.length;
    for (let i = 1; i < size; i++) {
        const pf = prices[i] - prices[i-1];
        if (pf > 0) res += pf;
    }
    return res;
};