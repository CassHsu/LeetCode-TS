var buyChoco = function(prices, money) {
    let res = money;
    let step = 0;
    const size = prices.length;
    prices.sort((a, b) => a - b);

    for (let i = 0; i < size; i++) {
        const p = prices[i];
        if (p <= res) {
            res -= p;
            step += 1;

            if (step == 2) return res;
        } else return money;
    }
    return money;
};
