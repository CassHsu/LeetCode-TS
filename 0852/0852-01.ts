function peakIndexInMountainArray(arr: number[]): number {
    let pv = arr[0];
    let pi = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > pv) {
            pv = arr[i];
            pi = i;
        }
    }
    
    return pi;
};
