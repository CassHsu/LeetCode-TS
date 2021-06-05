function addDigits(num: number): number {
    if (num === 0) return 0;
    
    while (num >= 10) {
        num = Math.floor(num / 10) + (num % 10);
    }
    return num;
};
