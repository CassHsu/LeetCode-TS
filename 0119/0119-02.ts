function getRow(rowIndex: number): number[] {
    const i = rowIndex;
    if (i === 0) return [1];
    if (i === 1) return [1, 1];
    
    const last = getRow(i - 1);
    const row = [1];
    for (let j = 0; j < last.length - 1; j++) {
        row.push(last[j] + last[j+1])
    }
    row.push(1);
    return row;
};
