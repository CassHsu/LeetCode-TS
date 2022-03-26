function twoCitySchedCost(costs: number[][]): number {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    
    let total = 0
    let countA = 0
    const half = Math.floor(costs.length/2)
    
    for (let c of costs) {
        if (countA < half) {
            total += c[0]
            countA++
        } else {
            total += c[1]
        }
    }
    return total
};
