function findCenter(edges: number[][]): number {
    let center = 1;
    const num = edges.length;
    
    for (let i = 1; i <= num + 1; i++) {
        let count = 0;
        
        for (let j = 0; j < num; j++) {
            if (edges[j][0] != i && edges[j][1] != i) break;
            count++;
        }
        
        if (count === num) {
            center = i;
            break;
        }
    }
    
    return center;
};
