function maxProfit(prices: number[]): number {
    let min_price = prices[0]
    let max_prof = 0
    
    prices.forEach(p => {
        min_price = Math.min(min_price, p)
        max_prof = Math.max(max_prof, p - min_price)
    });
    
    return max_prof
};
