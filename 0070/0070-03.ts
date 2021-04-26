function climbStairs(n: number): number {
    if (n === 1) return 1;
    
    let prev = 1;
    let curr = 2;
    for (let i = 3; i <= n; i++) {
        const tmp = prev + curr;
        prev = curr;
        curr = tmp;
    }
    return curr;
};
