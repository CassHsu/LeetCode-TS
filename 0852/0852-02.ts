function peakIndexInMountainArray(arr: number[]): number {
    let l = 0;
    let h = arr.length;
    
    while (l < h) {
        const m = Math.floor((l + h) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            h = m;
        }
    }
    
    return l;
};
