function squareIsWhite(coordinates: string): boolean {
    const x = (coordinates.charCodeAt(0) - "a".charCodeAt(0) + 1) % 2;
    const y = parseInt(coordinates[1]) % 2;
    
    return (x ^ y) == 1;
};
