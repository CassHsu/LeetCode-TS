function numberOfLines(widths: number[], s: string): number[] {
    let lines = 1;
    let width = 0;
    const a = 'a'.charCodeAt(0);
    
    for (let i = 0; i < s.length; i++) {
        const w = widths[s.charCodeAt(i) - a];
        width += w;
        
        if (width > 100) {
            lines++;
            width = w;
        }
    }
    
    return [lines, width];
};
