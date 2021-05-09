function minCostClimbingStairs(cost: number[]): number {
    const size = cost.length + 1;
    const minCost = [0, 0];
    
    for (let i = 2; i < size; i++) {
        const s1 = minCost[i-1] + cost[i-1];
        const s2 = minCost[i-2] + cost[i-2];
        minCost.push(Math.min(s1, s2));
    }
    return minCost[size - 1];
};
