function checkPerfectNumber(num: number): boolean {
    if (num <= 0) return false;
    
    let sum = 0;
    let half = num >> 1;
    
    for (let i = 1; i <= half; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    
    return sum == num;
};
