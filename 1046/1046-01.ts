function lastStoneWeight(stones: number[]): number {
    if (stones.length === 1) return stones[0];
    
    const [m1, m2, ...others] = stones.sort((a, b) => b -a);
    return lastStoneWeight([...others, m1 - m2]);
};
