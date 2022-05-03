function sortArrayByParity(nums: number[]): number[] {
    const odd = []
    const even = []
    
    nums.forEach(n => {
        if (n % 2 == 0) even.push(n)
        else odd.push(n)
    })
    
    return [...even, ...odd]
};
