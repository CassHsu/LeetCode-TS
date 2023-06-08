function checkStraightLine(coordinates: number[][]): boolean {
    const x0 = coordinates[0][0];
    const y0 = coordinates[0][1];
    
    const dx = coordinates[1][0] - x0;
    const dy = coordinates[1][1] - y0;
    
    for (let i = 2; i < coordinates.length; i++) {
        if (dx * (coordinates[i][1] - y0) !== dy * (coordinates[i][0] - x0)) {
            return false;
        }
    }
    return true;
};
