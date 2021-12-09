function isArmstrong(n: number): boolean {
    let total = 0
    const sn = n.toString().split("")
    const size = sn.length
    
    sn.forEach(c => total += Math.pow(parseInt(c), size))
    
    return total === n ? true: false
};
