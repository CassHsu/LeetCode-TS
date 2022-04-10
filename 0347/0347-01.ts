function topKFrequent(nums: number[], k: number): number[] {
    const m = new Map()
    const ans = []
    
    for (const n of nums) {
        m.set(n, m.get(n) + 1 || 1)
    }
    
    for (const [k, v] of m) {
        ans.push([k, v])
    }
    
    ans.sort((a, b) => b[1] - a[1])
    return ans.slice(0, k).map(x => x[0])
};
