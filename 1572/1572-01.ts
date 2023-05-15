function diagonalSum(mat: number[][]): number {
    let sum = 0
    let l = 0
    let r = mat.length - 1
    
    for (let m of mat) {
        if (l === r) {
            sum += m[l]
        } else {
            sum += m[l]
            sum += m[r]
        }
        l++
        r--
    }
    
    return sum
};
