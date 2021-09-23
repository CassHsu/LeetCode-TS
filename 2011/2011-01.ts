function finalValueAfterOperations(operations: string[]): number {
    let ans = 0;
    
    for (let op of operations) {
        if (op === "--X" || op === "X--") ans--;
        if (op === "++X" || op === "X++") ans++;
    }
    
    return ans;
};
