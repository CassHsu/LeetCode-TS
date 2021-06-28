function minCostToMoveChips(position: number[]): number {
    let even_cnt = 0;
    let odd_cnt = 0;
    
    position.forEach(v => {
        if (v % 2 === 0) even_cnt++;
        else odd_cnt++;
    });
    
    return Math.min(even_cnt, odd_cnt);
};
