function minCostClimbingStairs(cost: number[]): number {
    const cache = new Map();
    const minCost = (i) => {
        if (i <= 1) return 0;
        if (cache.has(i)) return cache.get(i);
        
        cache.set(i, Math.min(cost[i-1] + minCost(i-1), cost[i-2] + minCost(i-2)));
        return cache.get(i);
    };
    return minCost(cost.length);
};
