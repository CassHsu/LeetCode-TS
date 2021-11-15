function timeRequiredToBuy(tickets: number[], k: number): number {
    let ans = 0
    const n = tickets.length
    const count = tickets[k]
    
    for (let r = 0; r < count; r++) {
        for (let c = 0; c < n; c++) {
            if (r == count - 1 && c > k) break
            if (tickets[c] > 0) {
                tickets[c]--
                ans++
            }
        }
    }
    
    return ans
};
