function reconstructQueue(people: number[][]): number[][] {
    const ans: number[][] = []
    
    people.sort((pa: number[], pb: number[]) => {
        if (pa[0] === pb[0]) return pa[1] - pb[1]
        return pb[0] - pa[0]
    })
    
    for (const p of people) {
        ans.splice(p[1], 0, p)
    }
    
    return ans
};
