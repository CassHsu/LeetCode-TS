function totalMoney(n: number): number {
    let total = 0;
    const w = Math.floor(n / 7);
    const r = Math.floor(n % 7);
    let monday = 1;
    
    for (let i = 0; i < w; i++) {
        let tmp = monday;
        for (let j = 0; j < 7; j++) {
            total += tmp;
            tmp++;
        }
        monday++;
    }
    
    let tmp = monday;
    for (let i = 0; i < r; i++) {
        total += tmp;
        tmp++;
    }
    
    return total;
};