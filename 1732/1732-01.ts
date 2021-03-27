function largestAltitude(gain: number[]): number {
    let max = 0;
    let last = 0;
    gain.forEach(g => {
        last = last + g;
        if (last > max) max = last;
    });
    return max;
};
