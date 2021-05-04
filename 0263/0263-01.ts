function isUgly(n: number): boolean {
    if (n === 0) return false;
    
    const arr = [2, 3, 5];
    arr.forEach(a => {
       while (n % a === 0) {
           n /= a;
       } 
    });
    
    return n === 1;
};
