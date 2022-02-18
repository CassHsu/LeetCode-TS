function sortEvenOdd(nums: number[]): number[] {
    const ans = []
    const odds = []
    const evens = []
    
    nums.forEach((n, i) => {
        if (i % 2 === 0) evens.push(n)
        else odds.push(n)
    })
    
    evens.sort((a, b) => a - b)
    odds.sort((a, b) => b - a)
    
    let i = 0
    let j = 0
    const ei = evens.length
    const oi = odds.length
    while (i < ei || j < oi) {
        if (i < ei) {
            ans.push(evens[i])
            i++
        }
        
        if (j < oi) {
            ans.push(odds[j])
            j++
        }
    }
    
    
    
    return ans
};
