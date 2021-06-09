function replaceElements(arr: number[]): number[] {
    const ret = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let max = arr[i+1];
        for (let j = i + 2; j < arr.length; j++) {
            max = Math.max(max, arr[j]);
        }
        ret.push(max);
    }
    
    ret.push(-1);
    return ret;
};
