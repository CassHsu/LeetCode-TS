function minCostClimbingStairs(cost: number[]): number {
    let s1 = 0;
    let s2 = 0;
    
    for (let i = 2; i <= cost.length; i++) {
        const tmp = s1;
        s1 = Math.min(s1 + cost[i-1], s2 + cost[i-2]);
        s2 = tmp;
    }
    return s1;
};
