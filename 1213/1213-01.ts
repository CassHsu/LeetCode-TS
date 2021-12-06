function arraysIntersection(arr1: number[], arr2: number[], arr3: number[]): number[] {
    const m = new Map()
    const ans = []
    
    const countIt = (n) => {
        if (m.has(n)) {
            m.set(n, m.get(n) + 1)
        } else {
            m.set(n, 1)
        }
    }
    
    arr1.forEach(n => countIt(n))
    arr2.forEach(n => countIt(n))
    arr3.forEach(n => countIt(n))
    
    for (const [k, v] of m.entries()) {
        if (v === 3) ans.push(k)
    }
    
    return ans
};
